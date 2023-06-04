import cn from 'classnames'
import PropTypes from 'prop-types'
import { IReactNode } from '@/constants/types'
// import useHasPermission from '@/hooks/useHasPermission'

interface IButtonComponentProps extends IReactNode {
  primary?: boolean
  // |
  disabled?: boolean
  // |
  policy?: string
  // |
  btnClasses?: string
  //
  transparent?: boolean
  // |
  [key: string]: any
}

export const ButtonComponent = ({
  children,
  primary = false,
  disabled = false,
  transparent = false,
  policy = '',
  btnClasses = '',
  ...props
}: IButtonComponentProps) => {
  if (policy) {
    // if (!useHasPermission(policy)) return <></>
  }

  const buttonClasses = cn(
    'px-4 py-1 rounded outline-none font-lato text-s14 ',
    // default
    {
      [`text-disabled-500 
        border 
        border-disabled-500 
        hover:cursor-not-allowed`]: !primary && !transparent && disabled
    },
    {
      [`border 
        border-secondary-500 
        text-secondary-500 
        bg-white 
        transition-shadow 
        ease-linear 
        hover:shadow-button
      `]: !primary && !transparent && !disabled
    },
    // primary
    {
      [`bg-[#9AE0E3]
        text-white 
        border
        border-[#9AE0E3]
        hover:shadow-none 
        hover:cursor-not-allowed`]: primary && !transparent && disabled
    },
    {
      [`
        border
        bg-base-500 
        text-white 
        border-base-500 
        font-bold 
        transition-shadow 
        ease-linear 
        hover:shadow-button`]: primary && !transparent && !disabled
    },
    // transparent
    {
      [`bg-transparent 
        border
        border-transparent
        hover:shadow-none 
        hover:cursor-not-allowed`]: !primary && transparent && disabled
    },
    {
      [`
        border
        bg-transparent
        font-bold 
        transition-shadow 
        ease-linear 
        hover:shadow-none`]: !primary && transparent && !disabled
    }
  )

  return (
    <button
      className={buttonClasses + ' ' + btnClasses}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  policy: PropTypes.string
}
