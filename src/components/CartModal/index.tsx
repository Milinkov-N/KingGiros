import Modal from '../Modal'

import styles from './CartModal.module.css'

export default function CartModal() {
  return (
    <Modal
      show={ false }
      onClose={ () => console.log('fock u') }
    >
      <div>Hi mom</div>
    </Modal>
  )
}