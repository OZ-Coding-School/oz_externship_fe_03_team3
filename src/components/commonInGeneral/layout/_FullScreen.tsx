import type { DivProps, Style } from '../../packageInterfaces'
import styles from './_FullScreen.module.css'

interface WithFullScreenProps {
  isCentered?: boolean
}

const FullScreen = ({
  isCentered,
  ...props
}: DivProps & WithFullScreenProps) => {
  const { style, className, children, ...rest } = props

  const styleForVar: Style = {}
  if (isCentered) {
    styleForVar['--center'] = 'center'
  }

  return (
    <div
      {...rest}
      style={{ ...styleForVar, ...style }}
      className={`${className} ${styles.fullScreen}`}
    >
      {children}
    </div>
  )
}

export default FullScreen
