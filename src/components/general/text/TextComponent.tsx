import cn from 'classnames'
import { enumTextSizes, enumTextTags, IReactNode } from '@/constants/types'
import { ReactNode } from 'react'

interface ITextComponentProps extends IReactNode {
  tag?: enumTextTags
  //
  sizeFont?: enumTextSizes
  //
  classNames?: string[] | string
  //
  children: ReactNode | ReactNode[] | string
}
export const TextComponent = ({ classNames = [], tag = enumTextTags.p, sizeFont = enumTextSizes.s14, ...props }: ITextComponentProps) => {
  const CustomTag = tag

  const classes = cn('font-lato', classNames, `text-${sizeFont}`)

  return <CustomTag className={classes}>{props.children ? props.children : ''}</CustomTag>
}
