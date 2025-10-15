import type {
  Style,
  Auto,
  None,
  XsToXl,
  DivProps,
} from '../../packageInterfaces'
import styles from './_GridContainer.module.css'

interface WithGridContainerProps {
  gap?: XsToXl | None
  cols?: number | Auto
  colMinWidth?: XsToXl
  rows?: number
}

const GridContainer = ({
  gap = 'md',
  cols,
  colMinWidth,
  rows,
  ...props
}: DivProps & WithGridContainerProps) => {
  const { style, className, children, ...rest } = props
  const styleForVar: Style = {}

  styleForVar['--grid-cols'] =
    cols === 'auto'
      ? `repeat(auto-fill, minmax(var(--sizing-${colMinWidth}), 1fr))`
      : `repeat(${cols}, 1fr)`

  styleForVar['--gap'] = gap === 'none' ? 0 : `var(--spacing-${gap})`

  if (rows) {
    styleForVar['--grid-rows'] = `repeat(${rows})`
    styleForVar['--height'] = '100%'
  }

  return (
    <div
      {...rest}
      style={{ ...styleForVar, ...style }}
      className={`${styles.grid} ${className}`}
    >
      {children}
    </div>
  )
}

export default GridContainer
