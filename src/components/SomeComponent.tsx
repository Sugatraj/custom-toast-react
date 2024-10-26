import React from 'react';
import ToastService from '../services/ToastService';
import 'remixicon/fonts/remixicon.css';

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
        <i className="ri-check-line" style={styles.icon}></i>
        <span>Show Success</span>
      </button>
      
      <button 
        onClick={showErrorToast} 
        style={{ ...styles.button, backgroundColor: '#dc3545' }}
      >
        <i className="ri-close-circle-line" style={styles.icon}></i>
        <span>Show Error</span>
      </button>
      
      <button 
        onClick={showInfoToast} 
        style={{ ...styles.button, backgroundColor: '#17a2b8' }}
      >
        <i className="ri-information-line" style={styles.icon}></i>
        <span>Show Info</span>
      </button>
      
      <button 
        onClick={showWarningToast} 
        style={{ ...styles.button, backgroundColor: '#ffc107' }}
      >
        <i className="ri-alert-line" style={styles.icon}></i>
        <span>Show Warning</span>
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
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      opacity: 0.9,
    },
  },
  icon: {
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
  },
} as const;

export default SomeComponent;
