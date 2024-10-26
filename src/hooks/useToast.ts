import { useState, useCallback } from 'react';
import type { ToastType } from '../components/Toast';

interface ToastState {
  type: ToastType;
  title: string;
  message: string;
  isVisible: boolean;
}

const initialState: ToastState = {
  type: 'info',
  title: '',
  message: '',
  isVisible: false,
};

export const useToast = () => {
  const [toast, setToast] = useState<ToastState>(initialState);

  const showToast = useCallback(
    (type: ToastType, title: string, message: string) => {
      setToast({ type, title, message, isVisible: true });
    },
    []
  );

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  return {
    toast,
    showToast,
    hideToast,
  };
};