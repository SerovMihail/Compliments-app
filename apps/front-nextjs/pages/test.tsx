import useSWR from 'swr';
import { fetcher } from '../shared';


export function Test() {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_ROOT_HOST}/api/data`, fetcher);

  if (error) {
    return (<>
      {error}
    </>);
  }

  return (
    <>
      <div>{data?.value}</div>
    </>
  );
}

export default Test;
