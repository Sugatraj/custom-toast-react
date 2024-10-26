import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { ToastMessage } from './ToastMessage';
import './Toast.css'; // Add this import

interface Toast {
  id: string;
  type: 'success' | 'danger' | 'info' | 'warning';
  message: string;
}

export const ToastContainer = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useImperativeHandle(ref, () => ({
    addToast: (type: 'success' | 'danger' | 'info' | 'warning', message: string) => {
      const newToast = {
        id: Date.now().toString(),
        type,
        message,
      };
      setToasts((prev) => [...prev, newToast]);
    },
  }));

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <ToastMessage
          key={toast.id}
          id={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={removeToast}
          index={index}
          total={toasts.length}
        />
      ))}
    </div>
  );
});

ToastContainer.displayName = 'ToastContainer';
