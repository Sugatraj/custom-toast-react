import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  type: ToastType;
  title: string;
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const toastConfig = {
  success: {
    icon: CheckCircle,
    bgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-500',
    progressColor: 'bg-emerald-500',
  },
  error: {
    icon: XCircle,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-500',
    progressColor: 'bg-red-500',
  },
  warning: {
    icon: AlertCircle,
    bgColor: 'bg-amber-100',
    iconColor: 'text-amber-500',
    progressColor: 'bg-amber-500',
  },
  info: {
    icon: Info,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
    progressColor: 'bg-blue-500',
  },
};

export const Toast: React.FC<ToastProps> = ({
  type,
  title,
  message,
  isVisible,
  onClose,
}) => {
  const config = toastConfig[type];
  const Icon = config.icon;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-4 w-96 ${config.bgColor} rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="relative p-4">
        <div className="flex items-start">
          <div className={`flex-shrink-0 ${config.iconColor}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={onClose}
              className="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1">
        <div
          className={`h-full ${config.progressColor} animate-[progress_3s_linear]`}
        />
      </div>
    </div>
  );
};