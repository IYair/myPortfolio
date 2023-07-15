import cn from 'classnames'
import { enumTextSizes, enumTextTags } from '@/constants/types'
// import useHasPermission from '@/hooks/useHasPermission'
import { ChangeEvent } from 'react'
import useLanguage from '@/hooks/useLanguage'
import { TextComponent } from '../general/text/TextComponent'

export type TSelectOptions = {
  key: any
  value: string
  text: string
  label?: string
}

interface ISelectComponentProps {
  name: string
  //
  labelText?: string
  //
  labelIcon?: boolean
  //
  iconName?: string
  //
  options?: TSelectOptions[]
  //
  disabled?: boolean
  //
  policy?: string
  //
  placeholder?: string
  //
  onFocus?: () => void
  //
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  //
  wrapperClasses?: string
  //
  useRegister?: boolean
  //
  register?: any
  //
  validationSchema?: { [key: string]: any }
  //
  hasError?: boolean
  //
  errorMessage?: string
  //
  [key: string]: any
}

export const SelectComponent = ({
  name,
  labelText = '',
  labelIcon = false,
  iconName = '',
  options = [],
  disabled = false,
  policy = '',
  placeholder = '',
  onFocus = () => {},
  onChange = () => {},
  wrapperClasses = '',
  useRegister = false,
  register = null,
  validationSchema = {},
  hasError = false,
  errorMessage = '',
  ...props
}: ISelectComponentProps) => {
  // hooks
  const { t } = useLanguage()

  // guards
  // if (policy) {
  //   disabled = !useHasPermission(policy)
  // }

  // state
  const selectClasses = cn(
    {
      [`w-full px-2 h-[42px]
      py-2 font-lato 
      font-s14 bg-white 
      rounded transition-all 
      duration-300 outline-none 
      mt-2 border`]: true
    },
    {
      [` 
      border-input-500
      text-principal-500 
      focus:border-base-500
      hover:border-secondary-500
      `]: !disabled && !hasError
    },
    { 'border-disabled-500 cursor-not-allowed': disabled },
    { 'border-danger-500 text-principal-500': hasError }
  )
  const errorClasses = cn('text-danger-500 font-bold')
  const labelClasses = cn(`mb-1 text-s14 font-bold ${disabled ? 'text-disabled-500' : 'text-secondary-500'} `)

  let fieldProps: { [key: string]: any } = {
    id: name,
    className: selectClasses,
    name,
    onFocus,
    onChange,
    disabled,
    ...props
  }

  if (useRegister && register) {
    fieldProps = {
      ...fieldProps,
      ...register(name, validationSchema)
    }
  }

  return (
    <div className='flex justify-center'>
      <div className={wrapperClasses}>
        {labelIcon && labelText && (
          <div className='flex flex-inline'>
            <TextComponent
              tag={enumTextTags.label}
              className={labelClasses}
              sizeFont={enumTextSizes.s14}>
              {labelText}
            </TextComponent>
            <img
              src={iconName}
              className='ml-2 mb-1'
              alt='icon-name'
            />
          </div>
        )}
        {!labelIcon && labelText && (
          <TextComponent
            tag={enumTextTags.label}
            className={labelClasses}
            sizeFont={enumTextSizes.s14}>
            {labelText}
          </TextComponent>
        )}

        <select {...fieldProps}>
          {placeholder !== '' && (
            <option
              value=''
              disabled={disabled}>
              {placeholder}
            </option>
          )}
          {options?.length > 0 ? (
            options.map(item => (
              <option
                key={item.key}
                value={item.value}>
                {item.text}
              </option>
            ))
          ) : (
            <option value=''>{t('No hay opciones disponibles')}</option>
          )}
        </select>

        {hasError && (
          <TextComponent
            tag={enumTextTags.p}
            className={errorClasses}
            sizeFont={enumTextSizes.s12}>
            {errorMessage || ''}
          </TextComponent>
        )}
      </div>
    </div>
  )
}
