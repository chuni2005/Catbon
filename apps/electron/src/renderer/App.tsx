import React from 'react';
import BackendTest from './components/BackendTest';

declare global {
  interface Window {
    api?: {
      invoke: (channel: string, ...args: any[]) => Promise<any>;
    };
  }
}

function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    window.api?.invoke('ping').then((res: string) => setMessage(res));
  }, []);

  return (
    <div>
      <h1>Catbon Electron App</h1>
      <p>IPC message: {message}</p>

      {/* fetch backend test component */}
      <BackendTest />
    </div>
  );
}

export default App;
