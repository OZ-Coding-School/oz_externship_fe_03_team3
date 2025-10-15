import type {
  DivProps,
  StartToEnd,
  Style,
  None,
  Stretch,
  XsToXl,
} from '../../packageInterfaces'
import hstackStyles from './_Hstack.module.css'

interface WithHstackProps {
  gap?: XsToXl | None
  justify?: StartToEnd
  items?: StartToEnd | Stretch
}

const Hstack = ({
  gap = 'md',
  justify = 'flex-start',
  items = 'stretch',
  ...props
}: DivProps & WithHstackProps) => {
  const { style, className, children } = props

  const defaultStyle: Style = {}
  defaultStyle['--justify'] = justify ? justify : 'flex-start'
  defaultStyle['--items'] = items ? items : 'stretch'
  // defaultStyle["--gap"] = gap === "none" ? 0 : `var(--spacing-${gap})`
  defaultStyle['--gap'] = gap === 'none' ? 0 : `var(--spacing-md)`

  return (
    <div
      {...props}
      style={{ ...defaultStyle, ...style }}
      className={`${hstackStyles.hstack} ${className}`}
    >
      {children}
    </div>
  )
}

export default Hstack
