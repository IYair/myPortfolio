import { enumTextSizes, enumTextTags } from '@/constants/types'
import Select, { StylesConfig } from 'react-select'
import { TSelectOptions } from './SelectComponent'
import { Controller } from 'react-hook-form'
import { useState } from 'react'
import { TextComponent } from '../general/text/TextComponent'

export type TDefaultValues = {
  value: string,
  label: string
}

interface ISelectSearchComponent {
  name: string
  //
  label: string
  //
  placeholder: string
  //
  optionsList: TSelectOptions[]
  //
  noOptsMsg: string
  //
  emitOnChange?: (value: any) => void
  //
  initialValue?: string | null
  //
  isClearable?: boolean
  //
  control: any
  //
  hasError?: boolean
  //
  errorMessage?: string
  //
  validationSchema: any
  //
  [key: string]: any
}

export const SelectSearchComponent = ({
  name,
  control,
  label,
  placeholder,
  optionsList = [],
  noOptsMsg,
  initialValue = null,
  isClearable = false,
  emitOnChange = (result) => {},
  hasError,
  validationSchema,
  errorMessage
}: ISelectSearchComponent) => {
  const borderError = hasError ? '1px solid red' : '1px solid #AAB4C8'

  const selectStyles: StylesConfig<TSelectOptions | [], false> = {
    option: (styles: any, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        padding: '2px 12px 2px 12px',
        margin: 0,
        fontSize: '14px',
        fontFamily: 'Lato',
        fontWeight: 'normal',
        backgroundColor: isDisabled ? '#E2E6EC' : isSelected ? '#1E90FF' : isFocused ? '#E2E6EC' : 'white',
        color: isDisabled ? '#707070' : isSelected ? 'white' : isFocused ? '#5E6D88' : '#5E6D88',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...styles[':active'],
          border: 'none',
          outline: 'none',
          boxShadow: 'none'
        }
      }
    },
    control: (styles: any, { isFocused }) => ({
      ...styles,
      backgroundColor: 'transparent',
      color: '#5E6D88',
      fontFamily: 'Lato',
      padding: '0',
      border: isFocused ? '1px solid #2CCCD3' : borderError,
      boxShadow: '0',
      ':hover': {
        border: '1px solid #5E6D88'
      }
    }),
    menu: (styles: any) => ({
      ...styles,
      margin: '1px 0 0 0',
      borderRadius: '0',
      border: '1px solid #5E6D88',
      boxShadow: '1px 2px 3px 1px rgba(0, 0, 0, 0.2)'
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color: '#a2a3af'
    }),
    input: (styles: any) => ({
      ...styles,
      padding: '0',
      height: '36px',
      margin: '0',
      backgroundColor: 'transparent',
      color: '#5E6D88',
      fontFamily: 'Lato'
    }),
    dropdownIndicator: (styles: any) => ({
      ...styles,
      color: '#00205B',
      width: '20px',
      padding: '2px',
      cursor: 'pointer',
      ':hover': {
        color: '#00205B'
      }
    }),
    clearIndicator: (styles: any) => ({
      ...styles,
      cursor: 'pointer',
      color: '#00205B',
      width: '20px',
      padding: '2px',
      ':hover': {
        color: '#00205B'
      }
    }),
    singleValue: (styles: any) => {
      return {
        ...styles,
        color: '#00205B',
        fontFamily: 'Lato',
        fontWeight: 'normal',
        fontSize: '16px'
      }
    },
    multiValueLabel: (styles: any) => ({
      ...styles,
      color: '#fffff'
    }),
    multiValueRemove: (styles: any) => ({
      ...styles,
      height: '24px',
      width: '24px',
      padding: '0',
      marginRight: '2px',
      marginLeft: '20px',
      ':hover': {
        backgroundColor: 'transparent',
        color: 'white'
      }
    })
  }

  const [selected, setSelected] = useState<any>(0)

  return (
    <div
      className='w-full my-4 flex flex-col gap-2'>
      <TextComponent
        tag={enumTextTags.label}
        sizeFont={enumTextSizes.s14}
        className='text-secondary-500 font-bold'
      >
        {label}
      </TextComponent>
      <Controller
        name={name}
        control={control}
        rules={validationSchema}
        render={({ field }) => {
          return (
            <Select
              inputId={name}
              isClearable={isClearable}
              placeholder={placeholder}
              controlShouldRenderValue={true}
              value={selected === 0 ? optionsList.filter(({ value }) => value === initialValue) : selected}
              options={optionsList}
              styles={selectStyles}
              maxMenuHeight={150}
              noOptionsMessage={() => noOptsMsg}
              getOptionLabel={(option: any) => option.text || option.label}
              onChange={(thisValue: any) => {
                setSelected(thisValue)
                if (thisValue !== null) {
                  field.value = selected || null
                  field.onChange(selected)
                  hasError = false
                } else {
                  field.value = null
                  field.onChange(null)
                }

                emitOnChange(thisValue || {
                  value: '',
                  label: ''
                })
              }}
            />
          )
        }}
      />
      {hasError && (
        <TextComponent
          tag={enumTextTags.p}
          className='font-bold text-danger-500'
          sizeFont={enumTextSizes.s12}>
          {errorMessage || ''}
        </TextComponent>
      )}
    </div>
  )
}
