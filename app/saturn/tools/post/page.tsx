"use client"

import { useEffect, useState } from 'react';
import fetchData from './fetchData';

export default function ToolsData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDataAsync();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Data Fetched Successfully</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
