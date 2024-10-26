import React from 'react';
import { ToastProvider } from './components/Toast/ToastProvider';
import SomeComponent from './components/SomeComponent';
import 'remixicon/fonts/remixicon.css';
import './components/Toast/Toast.css';

function App() {
  return (
    <ToastProvider>
      <SomeComponent />
    </ToastProvider>
  );
}

export default App;
