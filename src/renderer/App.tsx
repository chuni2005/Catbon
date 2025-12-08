import { useEffect, useState } from 'react';
import './App.css';
import logoSvg from './assets/logo.svg';

function App() {
  const [msg, setMsg] = useState('Loading...');
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.api) {
      window.api.getData()
        .then((res: { message: string }) => {
          setMsg(res.message);
        })
        .catch((err: Error) => {
          setError(`Error: ${err.message}`);
          console.error('IPC error:', err);
        });
    } else {
      setError('API not available');
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <img 
        src={logoSvg} 
        alt="Catbon Logo" 
        style={{ width: '120px', height: '120px', marginBottom: '20px' }}
      />
      <h1>Catbon App</h1>
      <p style={{ fontSize: '18px', color: '#0066cc' }}>
        {msg || error}
      </p>
      <p style={{ fontSize: '14px', color: '#666', marginTop: '30px' }}>
        Electron + React + TypeScript
      </p>
    </div>
  );
}

export default App;
