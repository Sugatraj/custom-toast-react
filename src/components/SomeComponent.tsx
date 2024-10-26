import React from 'react';
import ToastService from '../services/ToastService';

function SomeComponent() {
  const showSuccessToast = () => {
    ToastService.success('Operation completed successfully');
  };

  const showErrorToast = () => {
    ToastService.error('Something went wrong');
  };

  const showInfoToast = () => {
    ToastService.info('Here is some information');
  };

  const showWarningToast = () => {
    ToastService.warning('Please be careful');
  };

  return (
    <div style={styles.container}>
      <button 
        onClick={showSuccessToast} 
        style={{ ...styles.button, backgroundColor: '#28a745' }}
      >
        Show Success
      </button>
      
      <button 
        onClick={showErrorToast} 
        style={{ ...styles.button, backgroundColor: '#dc3545' }}
      >
        Show Error
      </button>
      
      <button 
        onClick={showInfoToast} 
        style={{ ...styles.button, backgroundColor: '#17a2b8' }}
      >
        Show Info
      </button>
      
      <button 
        onClick={showWarningToast} 
        style={{ ...styles.button, backgroundColor: '#ffc107' }}
      >
        Show Warning
      </button>
    </div>
  );
}

// Styles object
const styles = {
  container: {
    display: 'flex',
    gap: '10px',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
    ':hover': {
      opacity: 0.9,
    },
  },
} as const;

export default SomeComponent;
