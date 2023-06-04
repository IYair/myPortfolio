/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const createRootElement = (id: string) => {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  return rootContainer
}

function addRootElement(rootElem: HTMLElement) {
  document.body.appendChild(rootElem)
}

export default function usePortal(id: string) {
  if (!process.browser) return

  let rootElement = window.document.getElementById(`${id}`) as HTMLElement

  if (!rootElement) {
    rootElement = createRootElement(id)
    addRootElement(rootElement)
  }

  const [portal, setPortal] = useState({
    render: ({ children }: any) => {
      if (rootElement) {
        return ReactDOM.createPortal(children, rootElement)
      }

      return <></>
    }
  })

  const createPortal = useCallback((element: any) => {
    const Portal = ({ children }: any) => ReactDOM.createPortal(children, element)

    return { render: Portal }
  }, [])

  useEffect(() => {
    if (!process.browser) return

    if (rootElement) {
      return
    }

    const newPortal = createPortal(rootElement)
    setPortal(newPortal)
  }, [id, createPortal, rootElement])

  return portal.render
}
