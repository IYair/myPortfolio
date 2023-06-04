import { ButtonComponent } from '@/components/button/ButtonComponent'
import { TextComponent } from '@/components/general/text/TextComponent'
import { enumTextTags, enumTextSizes } from '@/constants/types'
import { ReactNode, useState, useEffect } from 'react'
import useLanguage from './useLanguage'
import { DialogComponent } from '@/components/dialog/DialogComponent'
import cn from 'classnames'

export interface IModalDialog {
  title: string
  message?: string | JSX.Element | JSX.Element[] | ReactNode | ReactNode[]
  icon?: string
  dialogClassName?: string
  btnCancelText?: string
  btnAcceptText?: string
}

export interface ISuccessDialogComponentProps extends IModalDialog {
  onAccept?: () => void
  children?: JSX.Element[] | JSX.Element
  wrapperClassName?: string
}

export interface IErrorDialogComponentProps extends IModalDialog {
  onAccept?: () => void
}

export interface IWarningDialogProps extends IModalDialog {
  onConfirm: () => void
}

export default function useModalDialogs() {
  const { t } = useLanguage()

  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false)
  const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false)
  const [showWarningDialog, setShowWarningDialog] = useState<boolean>(false)

  const onEscapeKey = () => {
    setShowSuccessDialog(false)
    setShowErrorDialog(false)
  }

  useEffect(() => {
    document.onkeyup = e => {
      if (e.key === 'Escape') {
        onEscapeKey()
      }
    }

    return () => {
      document.removeEventListener('keyup', () => {})
    }
  })

  const toggleSuccessDialog = () => setShowSuccessDialog(!showSuccessDialog)
  const SuccessDialogComponent = (props: ISuccessDialogComponentProps) => (
    <DialogComponent
      fitContent
      withoutHeader
      visible={showSuccessDialog}>
      <div className={props.wrapperClassName || 'w-[312px] flex flex-col items-center justify-between'}>
        {props.title && (
          <TextComponent
            tag={enumTextTags.h1}
            sizeFont={enumTextSizes.s21}
            classNames='py-3 text-principal-500 font-bold text-center'>
            {props.title || ''}
          </TextComponent>
        )}
        {props.children ? (
          props.children
        ) : (
          <TextComponent
            tag={enumTextTags.h1}
            sizeFont={enumTextSizes.s21}
            classNames='py-3 text-principal-500 font-bold text-center'>
            {props.message || ''}
          </TextComponent>
        )}
        <div>
          <ButtonComponent
            btnClasses='mr-5'
            type='button'
            primary
            autoFocus
            onClick={() => {
              if (props.onAccept) {
                props.onAccept()
                return setShowSuccessDialog(false)
              }
              setShowSuccessDialog(false)
            }}>
            {props.btnAcceptText || t('Hecho')}
          </ButtonComponent>
        </div>
      </div>
    </DialogComponent>
  )

  const ErrorDialogComponent = (props: IErrorDialogComponentProps) => (
    <DialogComponent
      fitContent
      withoutHeader
      visible={showErrorDialog}>
      <div className={props.dialogClassName || 'w-[312px] flex flex-col items-center justify-between'}>
        {/* Title */}
        <TextComponent
          tag={enumTextTags.h1}
          sizeFont={enumTextSizes.s21}
          classNames='py-3 text-principal-500 font-bold text-center'>
          {props.title || ''}
        </TextComponent>
        {/* Message */}
        <TextComponent
          tag={enumTextTags.p}
          sizeFont={enumTextSizes.s18}
          classNames='py-3 text-principal-500 text-center'>
          {props.message || ''}
        </TextComponent>
        <div>
          <ButtonComponent
            btnClasses='mr-5'
            type='button'
            primary
            autoFocus
            onClick={() => {
              if (props.onAccept) props.onAccept()
              setShowErrorDialog(false)
            }}>
            {props.btnAcceptText || t('Aceptar')}
          </ButtonComponent>
        </div>
      </div>
    </DialogComponent>
  )

  const WarningDialog = (props: IWarningDialogProps) => {
    return (
      <DialogComponent
        fitContent
        withoutHeader
        visible={showWarningDialog}>
        <div className={cn('leading-[19px] max-w-[344px] flex flex-col items-center justify-between mh-[276px]')}>
          <TextComponent
            tag={enumTextTags.h1}
            sizeFont={enumTextSizes.s21}
            classNames={cn('text-principal-500 font-bold text-center')}>
            {props.title}
          </TextComponent>

          <div className='m-5 p-2 text-18 text-principal-500 text-center font-normal'>{props.message}</div>

          <div className='w-full flex items-center justify-center'>
            <ButtonComponent
              btnClasses='py-[0.45rem]'
              type='button'
              primary
              onClick={() => {
                setShowWarningDialog(false)
                props.onConfirm()
              }}>
              {props.btnAcceptText || t('Aceptar')}
            </ButtonComponent>
          </div>
        </div>
      </DialogComponent>
    )
  }

  return {
    //
    // Success dialogs
    setShowSuccessDialog,
    toggleSuccessDialog,
    SuccessDialogComponent,
    //
    // Error dialog
    setShowErrorDialog,
    ErrorDialogComponent,
    //
    // Warning for errors for bulk load
    WarningDialog,
    setShowWarningDialog
  }
}
