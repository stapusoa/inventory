import classNames from 'classnames'
import type { AvailableIcons } from './IconMapping'
import { IconMapping } from './IconMapping'
import type { IconSize } from './iconConstants'

interface IconProps {
  name: AvailableIcons
  size?: IconSize
}

export const Icon = ({ name, size = 'medium' }: IconProps): JSX.Element => {
  return (
    <i aria-hidden='true' className={iconCss(size)}>
      {IconMapping[name]}
    </i>
  )
}

const iconCss = (size: string) =>
  classNames('[&>svg]:h-inherit [&>svg]:w-inherit', {
    'h-12 min-w-12 w-12': size === 'large',
    'h-8 min-w-8 w-8': size === 'medium',
    'h-6 min-w-6 w-6': size === 'small',
  })
