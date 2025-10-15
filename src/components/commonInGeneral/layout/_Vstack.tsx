import type {
  StartToEnd,
  Style,
  None,
  Stretch,
  XsToXl,
  DivProps,
} from '../../packageInterfaces'
import CenterInRow from './_CenterInRow'
import styles from './_Vstack.module.css'

interface WithBaseVstackProps {
  gap?: XsToXl | None
  justify?: StartToEnd
  items?: StartToEnd | Stretch
}

const BaseVstack = ({
  gap = 'md',
  justify = 'flex-start',
  items = 'stretch',
  ...props
}: DivProps & WithBaseVstackProps) => {
  const { style, className, children, ...rest } = props

  const styleForVar: Style = {}
  styleForVar['--justify'] = justify
  styleForVar['--items'] = items
  styleForVar['--gap'] = gap === 'none' ? 0 : `var(--spacing-${gap})`

  return (
    <div
      {...rest}
      style={{ ...styleForVar, ...style }}
      className={`${styles.vstack} ${className ?? ''}`}
    >
      {children}
    </div>
  )
}

interface WithCenter {
  center?: boolean
}

const Vstack = ({
  center,
  ...props
}: DivProps & WithBaseVstackProps & WithCenter) => {
  const { children, ...rest } = props

  if (!center) {
    return <BaseVstack {...rest}>{children}</BaseVstack>
  }

  return (
    <CenterInRow>
      <BaseVstack {...rest}>{children}</BaseVstack>
    </CenterInRow>
  )
}

export default Vstack
