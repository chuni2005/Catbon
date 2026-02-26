import React from 'react';

import { BackendTestResponse } from '@catbon/shared';

interface BackendResponse extends BackendTestResponse {}

const BackendTest: React.FC = () => {
  const [data, setData] = React.useState<BackendResponse | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = async () => {
    try {
      const resp = await fetch('http://localhost:5000/api/v1/test');
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const json = await resp.json();
      setData(json);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div>
      <h2>Backend API Test</h2>
      <button onClick={fetchData}>Fetch from Backend</button>
      {data && <p>Response: {data.message}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
};

export default BackendTest;
