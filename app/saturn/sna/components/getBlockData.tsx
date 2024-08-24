import { useEffect, useState } from 'react';

export const useBlockData = () => {
  const [blockData, setBlockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/public/blocks-multi.json');
      const data = await response.json();
      setBlockData(data);
    };

    fetchData();
  }, []);

  return blockData;
};
