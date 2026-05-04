import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dialog.css'

const Dialog = ({ isOpen, onClose, onClearCart }) => {
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleAction = (path) => {
    if (onClearCart) onClearCart();
    if (onClose) onClose();
    navigate(path);
  };

  return (
    <dialog ref={dialogRef} className="checkout-dialog">
        <div>
            <p>Your Order Has Been Placed</p>
            <div className="dialog-actions">
                <button onClick={() => handleAction('/shop')}>Continue Shopping</button>
                <button onClick={() => handleAction('/')}>OK</button>
            </div>
        </div>
    </dialog>
  )
}

export default Dialog