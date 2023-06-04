import { ReactNode, useState, useEffect } from 'react'
import cn from 'classnames'
import usePortal from '@/hooks/usePortal'


export interface IDialogComponentProps {
  headerClasses?: string
  //
  footerClasses?: string
  //
  headerChildren?: ReactNode
  // 
  children: ReactNode
  // 
  footerChildren?: ReactNode
  // 
  visible: boolean
  // 
  withoutHeader?: boolean
  // 
  withoutCloseButton?: boolean
  // 
  fitContent?: boolean
  // 
  onClose?: () => void
  // 
  elementId?: string
  // 
  zIndex?: number
}

export const DialogComponent = ({
  headerChildren = <></>,
  footerChildren = <></>,
  withoutHeader = false,
  withoutCloseButton = false,
  fitContent = false,
  elementId = 'modal-dialog',
  headerClasses = '',
  footerClasses = '',
  zIndex = 50,
  ...props
}: IDialogComponentProps) => {
  const Portal = usePortal(elementId)
  const [showDialog, setShowDialog] = useState(props.visible)

  useEffect(() => {
    setShowDialog(props.visible)
  }, [props.visible])

  if (!showDialog) {
    return null
  }

  return (
    <>
      <div
        style={{ zIndex }}
        className={`
              fixed
              top-0
              right-0
              bottom-0
              left-0
              w-full
              h-full
              py-10
              bg-[#6A79A2]
              bg-opacity-50
              backdrop-blur-[2px]
              flex
              items-center
              justify-center
              `}>
        {/* Dialog content */}
        <div
          className={cn(
            {
              [`w-fit
                overflow-y-auto
                p-6
                mx-5
                md:mx-0
                md:min-w-[480px]
                md:min-h-[450px]
                max-w-[600px]
                bg-white
                rounded-md
                flex
                flex-col
                justify-between
                z-50`]: !fitContent
            },
            {
              [`w-fit
                max-h-[90%]
                p-6
                mx-5
                bg-white
                rounded-md
                flex
                flex-col
                justify-between
                z-50`]: fitContent
            }
          )}>
          {/* Header slot */}
          {!withoutHeader && (
            <>
              <header className={`flex ${headerClasses}`}>
                <div className='grow'>{headerChildren}</div>
                {!withoutCloseButton && ( <></> )}
              </header>
            </>
          )}

          {/* Main slot */}
          <main className='grow overflow-y-auto custom-scrollbar'>{props.children}</main>

          {/* Footer slot */}
          <footer className={footerClasses}>{footerChildren}</footer>
        </div>
      </div>
    </>
  )
}

