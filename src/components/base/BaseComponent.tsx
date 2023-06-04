import { useEffect, useImperativeHandle, useState, forwardRef } from 'react'
import { LoaderComponent } from '../general/loader/LoaderComponent'

export interface IBaseComponentHandles {
  setIsLoading: (isLoading: boolean) => void
}

type TBaseComponentProps = {
  children: JSX.Element
  //
  isLoading?: boolean
  //
  className?: string
}
export const BaseComponent = forwardRef<IBaseComponentHandles, TBaseComponentProps>((props, ref) => {
  const [isLoading, setIsLoading] = useState(props.isLoading || false)

  useEffect(() => {
    setIsLoading(props.isLoading || false)
  }, [props.isLoading])

  useImperativeHandle(ref, () => ({
    setIsLoading
  }))

  if (isLoading) {
    return (
      <div className={'py-5 ' + props.className}>
        <LoaderComponent />
      </div>
    )
  }

  return <>{props.children}</>
})

BaseComponent.displayName = 'BaseComponent'
