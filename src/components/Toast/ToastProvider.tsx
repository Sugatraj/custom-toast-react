import React, { useRef, useEffect } from 'react';
import { ToastContainer } from './ToastContainer';
import ToastService from '../../services/ToastService';

interface ToastProviderProps {
  children: React.ReactNode;
}

// Define the type for the ref
interface ToastContainerRef {
  addToast: (type: 'success' | 'error' | 'info' | 'warning', message: string) => void;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  // Use the proper type for the ref
  const containerRef = useRef<ToastContainerRef>(null);

  useEffect(() => {
    const unsubscribe = ToastService.subscribe((type, message) => {
      if (containerRef.current) {
        containerRef.current.addToast(type as 'success' | 'info' | 'warning' | 'error', message);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {children}
      <ToastContainer ref={containerRef} />
    </>
  );
};
