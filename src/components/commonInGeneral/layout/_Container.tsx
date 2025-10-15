import styles from './_Container.module.css'
import type { Style, None, XsToXl, DivProps } from '../../packageInterfaces'

interface WithContainerProps {
  width?: XsToXl
  paddingTop?: XsToXl | None
  paddingBottom?: XsToXl | None
}

const Container = ({
  width = 'lg',
  paddingTop = 'lg',
  paddingBottom = 'lg',
  ...props
}: DivProps & WithContainerProps) => {
  const { style, className, children, ...rest } = props

  const styleForVar: Style = {}
  styleForVar['--width'] = `var(--container-${width})`
  // styleForVar["--width"] = "var(--container-md)"
  styleForVar['--padding-top'] =
    paddingTop === 'none' ? 0 : `var(--spacing-${paddingTop})`
  styleForVar['--padding-bottom'] =
    paddingBottom === 'none' ? 0 : `var(--spacing-${paddingBottom})`

  return (
    <div
      {...rest}
      style={{ ...styleForVar, ...style }}
      className={`${styles.container} ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
