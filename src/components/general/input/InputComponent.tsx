import cn from 'classnames'
import { enumTextSizes, enumTextTags, IReactNode } from '@/constants/types'
import { ChangeEvent } from 'react'
import { BaseComponent } from '@/components/base/BaseComponent'
import { TextComponent } from '@/components/general/text/TextComponent'

interface IInputComponentProps extends IReactNode {
  value?: string | number
  //
  name?: string
  //
  type?: string
  //
  labelText?: string
  //
  disabled?: boolean
  //
  hasError?: boolean
  //
  errorMessage?: string
  //
  hasIcon?: boolean
  //
  // iconName?: IonIcons
  //
  handleIconClick?: () => void
  //
  wrapperClasses?: string
  //
  inputClasses?: string
  //
  additionalInputClasses?: string
  //
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  //
  register?: any
  //
  validationSchema?: any
  //
  useRegister?: boolean
  //
  withoutLabel?: boolean
  //
  isLoading?: boolean
  //
  [key: string]: any
}

export const InputComponent = ({
  name = '',
  type = 'text',
  labelText = '',
  disabled = false,
  hasError = false,
  errorMessage,
  hasIcon = false,
  iconName = 'warning',
  wrapperClasses = '',
  inputClasses = '',
  additionalInputClasses = '',
  handleIconClick = () => {},
  onChange,
  useRegister,
  register = () => {},
  validationSchema = {},
  withoutLabel = false,
  isLoading = false,
  ...props
}: IInputComponentProps) => {
  const labelClasses = cn(`mb-1 font-bold ${disabled ? 'text-disabled-500' : 'text-secondary-500'} `)

  const localInputClasses = cn(
    [inputClasses || `w-full text-black font-s14 outline-none border px-2 py-2 rounded ${additionalInputClasses}`],
    {
      [`
        border-input-500
        transition-all
        duration-300
        focus:border-base-500
        hover:border-secondary-500`]: !disabled && !hasError
    },
    {
      [`border-disabled-500
        hover:border-disabled-500
        focus:border-disabled-500
        hover:cursor-not-allowed`]: disabled && !hasError
    },
    { 'border-danger-500': hasError }
  )

  const errorClasses = cn('text-danger-500 font-bold')

  const iconClasses = cn(`
    absolute
    top-0
    right-0
    bottom-0
    flex
    items-center
    pl-2
    bg-white
    text-s21 
    m-2
  `)

  return (
    <BaseComponent isLoading={isLoading}>
      <div className={'relative ' + wrapperClasses}>
        {!withoutLabel && (
          <TextComponent
            tag={enumTextTags.label}
            className={labelClasses}>
            {labelText}
          </TextComponent>
        )}

        <div className={`w-full relative ${withoutLabel ? '' : 'mt-2'}`}>
          {useRegister && register ? (
            <input
              id={name + 're'}
              name={name}
              type={type}
              disabled={disabled}
              className={localInputClasses}
              autoComplete='off'
              onChange={onChange}
              {...props}
              {...register(name, validationSchema)}
            />
          ) : (
            <input
              id={name}
              name={name}
              type={type}
              disabled={disabled}
              className={localInputClasses}
              autoComplete='off'
              onChange={onChange}
              {...props}
            />
          )}

          {hasError && (
            <div className={iconClasses}>
              {/* <IonIcon
                name='alert-circle-outline'
                color='danger'
                size='s21'
              /> */}
            </div>
          )}
          {!hasError && hasIcon && (
            <div
              className={'cursor-pointer ' + iconClasses}
              onClick={() => handleIconClick()}>
              {/* <IonIcon name={iconName} /> */}
            </div>
          )}
        </div>

        {hasError && (
          <TextComponent
            className={errorClasses}
            sizeFont={enumTextSizes.s12}>
            {errorMessage || ''}
          </TextComponent>
        )}
      </div>
    </BaseComponent>
  )
}
