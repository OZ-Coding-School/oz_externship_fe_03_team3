import type { DivProps, Style } from '../../packageInterfaces'
import styles from './_FlexOneContainer.module.css'

interface FlexOneContainer {
  isYScrollable?: boolean
  isXScrollable?: boolean
}
const FlexOneContainer = ({
  isYScrollable,
  isXScrollable,
  ...props
}: FlexOneContainer & DivProps) => {
  const { style, className, children, ...rest } = props

  const flexOneStyle: Style = {}
  flexOneStyle['--overflow-x'] = isXScrollable ? 'scroll' : 'hidden'
  flexOneStyle['--overflow-y'] = isYScrollable ? 'scroll' : 'hidden'

  return (
    <div
      {...rest}
      style={{ ...flexOneStyle, ...style }}
      className={`${className} ${styles.flexOne}`}
    >
      {children}
    </div>
  )
}

export default FlexOneContainer
