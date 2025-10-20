import { Hstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import { X } from 'lucide-react'

const TagSelected = () => {
  return (
    <RoundBox
      color="primary"
      padding="xs"
      radius="full"
      isBordered={false}
      className="bg-primary-100 h-[28px] px-3"
    >
      <Hstack gap="sm" className="h-full w-full items-center justify-center">
        <span>테스트</span>
        <button>
          <X className="size-4" />
        </button>
      </Hstack>
    </RoundBox>
  )
}

export default TagSelected
