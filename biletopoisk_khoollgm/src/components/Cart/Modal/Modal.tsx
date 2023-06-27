import { useEffect, MouseEvent, FC } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import Image from 'next/image';
import closePic from '@/images/close.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        <div className={styles.text_container}>
          <div className={styles.header}>
            <div className={styles.title}>Удаление билета</div>
            <button onClick={onClose} className={styles.btnClose}>
              <Image src={closePic} alt="close" width={20} height={20} />
            </button>
          </div>
          <div className={styles.question}>
            Вы уверены, что хотите удалить билет?
          </div>
        </div>
        <div className={styles.btns_container}>
          <button className={styles.btn_yes} onClick={onConfirm}>
            Да
          </button>
          <button className={styles.btn_no} onClick={onClose}>
            Нет
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};
