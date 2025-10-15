import Hstack from './_Hstack'
import type { DivProps } from '../../packageInterfaces'

const CenterInRow = ({ children, ...rest }: DivProps) => {
  return (
    <Hstack {...rest} gap="none">
      <div className="grow" />
      {children}
      <div className="grow" />
    </Hstack>
  )
}

export default CenterInRow
