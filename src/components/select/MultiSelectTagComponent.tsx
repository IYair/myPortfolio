import cn from 'classnames'
import PropTypes from 'prop-types'
import { enumTextSizes, enumTextTags } from '@/constants/types'
import CreatableSelect from 'react-select/creatable'
import { StylesConfig } from 'react-select'
import { useEffect, useState } from 'react'
import { TextComponent } from '../general/text/TextComponent'

export interface IOption {
  label: string
  value: string
}

export interface IControlOption {
  readonly value: string
  readonly label: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

interface IMultiSelectTagComponentProps {
  //
  name: string
  //
  items: string[]
  //
  options: IOption[]
  //
  label: string
  //
  placeholder: string
  //
  noOptionsMsg: string
  //
  clearable?: boolean
  //
  menu?: boolean
  //
  disabled: boolean
  //
  components?: any
  //
  onChange: (items: string[]) => void
}

export const MultiSelectTagComponent = (props: IMultiSelectTagComponentProps) => {
  const selectStyles: StylesConfig<IControlOption, true> = {
    option: (styles: any, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        padding: '1px 12px 1px 12px',
        margin: 0,
        fontSize: '14px',
        fontFamily: 'Lato',
        fontWeight: 'normal',
        backgroundColor: isDisabled ? '#E2E6EC' : isSelected ? '#1E90FF' : isFocused ? '#1E90FF' : 'white',
        color: isDisabled ? '#707070' : isSelected ? 'white' : isFocused ? 'white' : '#00205B',
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
      padding: '0',
      border: isFocused ? '1px solid #2CCCD3' : '1px solid #AAB4C8',
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
      margin: '0',
      backgroundColor: 'transparent'
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
    multiValue: (styles: any) => {
      return {
        ...styles,
        borderRadius: '10px',
        color: '#FFFFFF',
        fontFamily: 'Lato',
        padding: '0 2px 0 2px',
        margin: '0 6px 0 0',
        backgroundColor: '#5E6D88'
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

  // #region [state]
  const [localValue, setLocalValue] = useState<IOption[] | null>([])
  const [options, setOptions] = useState<IOption[]>([])
  // #endregion

  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase()
  })

  // #region [events]
  const onInit = () => {
    if (!props.options || props.options.length === 0) return

    const mappedOptions = props.options.map(item => createOption(String(item)))
    setOptions(mappedOptions)
    const mappedValues = props.items.map(item => createOption(item))
    setLocalValue(mappedValues)
  }

  const onChange = (value: IOption[] | null) => {
    setLocalValue(value)
    const items = value?.map(item => item.value) || []
    props.onChange(items)
  }
  // #endregion

  useEffect(() => {
    onInit()
  }, [])

  useEffect(() => {
    onInit()
  }, [props])

  return (
    <div className='w-full mb-4'>
      <TextComponent
        tag={enumTextTags.label}
        sizeFont={enumTextSizes.s14}
        classNames={cn(`mb-1 font-bold ${props.disabled ? 'text-disabled-500' : 'text-secondary-500'} `)}>
        {props.label}
      </TextComponent>
      <CreatableSelect
        formatCreateLabel={(inputValue: string) => inputValue}
        noOptionsMessage={() => props.noOptionsMsg}
        styles={selectStyles}
        isMulti
        isClearable={props.clearable}
        isDisabled={props.disabled}
        components={props.components}
        menuIsOpen={props.menu}
        value={localValue}
        options={options}
        placeholder={props.placeholder}
        onChange={(value: any) => onChange(value)}
      />
    </div>
  )
}

MultiSelectTagComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
