import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Yashirin so'zni 6 urinishda toping. Har urinishda, so'zni topishga
        qancha yaqin kelganingizga qarab katakchalarning rangi o'zgarib boradi.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Ó" status="correct" />
        <Cell value="Z" />
        <Cell value="B" />
        <Cell value="E" />
        <Cell value="K" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ó harfi yashirin so'zda bor va to'g'ri katakchada joylashgan.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="K" status="present" />
        <Cell value="T" />
        <Cell value="I" />
        <Cell value="V" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        K harfi so'zda bor lekin noto'g'ri katakchada.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Y harfi yashirin so'zda yo'q
      </p>
    </BaseModal>
  )
}
