import React, { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css'; // Make sure to install remixicon package

interface ToastMessageProps {
  id: string;
  type: 'success' | 'danger' | 'info' | 'warning';
  message: string;
  onClose: (id: string) => void;
  index: number;
  total: number;
}

export const ToastMessage: React.FC<ToastMessageProps> = ({ 
  id, 
  type, 
  message, 
  onClose,
  index,
  total
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Start entrance animation
    requestAnimationFrame(() => {
      setIsActive(true);
    });

    // Auto close after 3 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  const getIconClass = () => {
    switch (type) {
      case 'success': return 'ri-check-line';
      case 'danger': return 'ri-close-circle-line';
      case 'info': return 'ri-information-line';
      case 'warning': return 'ri-alert-line';
      default: return 'ri-information-line';
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'success': return 'Success';
      case 'danger': return 'Error';
      case 'info': return 'Info';
      case 'warning': return 'Warning';
      default: return 'Notice';
    }
  };

  const style = {
    ['--index' as string]: index,
    ['--total' as string]: total,
  };

  return (
    <div 
      className={`toast ${type} ${isActive ? 'active' : ''} ${isClosing ? 'closing' : ''}`}
      style={style}
    >
      <div className="toast-content">
        <i className={`check ${getIconClass()}`} />
        <div className="message">
          <span className="text text-1">{getTitle()}</span>
          <span className="text text-2">{message}</span>
        </div>
      </div>
      <i className="ri-close-line close" onClick={handleClose} />
      <div className={`progress ${isActive ? 'active' : ''}`} />
    </div>
  );
};
