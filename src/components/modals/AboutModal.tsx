import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

// https://github.com/nomanoff/react-wordle

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="O'yin haqida" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ushbu web dastur Worlde o'yinining o'zbek tilidagi nusxasi {'->'}{' '}
        <a
          target="_blank"
          href="https://github.com/nomanoff/react-wordle"
          className="underline font-bold"
          rel="noreferrer"
        >
          GitHub havola
        </a>{' '}
      </p>

      <br />

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Worlde ning Reactdagi asl nusxasi {'->'}{' '}
        <a
          target="_blank"
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
          rel="noreferrer"
        >
          GitHub havola
        </a>{' '}
      </p>

      <br />

      <p className="text-sm text-gray-500 dark:text-gray-300">
        O'zbek tiliga moslashtirishlar{' '}
        <a
          target="_blank"
          href="https://github.com/nomanoff"
          className="underline font-bold"
          rel="noreferrer"
        >
          Azizbek Nomanoff
        </a>{' '}
        tomonidan bajarildi.
      </p>
    </BaseModal>
  )
}
