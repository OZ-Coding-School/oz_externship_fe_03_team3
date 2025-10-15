import type { DivProps } from '../../../types'

const FullScreen = ({ ...props }: DivProps) => {
  const { className, children, ...rest } = props

  return (
    <div {...rest} className={`${className} h-screen w-screen`}>
      {children}
    </div>
  )
}

export default FullScreen
