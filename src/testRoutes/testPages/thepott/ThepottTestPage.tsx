import {
  GridContainer,
  Vstack,
} from '../../../components/commonInGeneral/layout'

const Box = () => {
  return <div className="h-[100px] w-[100px] bg-amber-300">뭔가 있음</div>
}

const ThepottTestPage = () => {
  return (
    <Vstack className="w-full bg-rose-200">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <GridContainer>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </GridContainer>
    </Vstack>
  )
}

export default ThepottTestPage
