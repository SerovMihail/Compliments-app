import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import nextConfig from '../next.config';

export function Test() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  console.log(process.env.DB_HOST);

  useEffect(() => {
    alert('ку');
    setLoading(false);
    fetch(`${nextConfig.backendHost}/api/data`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  })


  // const MyLoading = dynamic(() => import('../components/Loading'));

  if(isLoading) {
    // return <MyLoading />
  }

  return (

    <div>
      {data}
    </div>
  );
}

export default Test;
