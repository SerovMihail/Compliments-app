import styled from 'styled-components';
import useSWR from 'swr';
import { Loading } from './Loading';
import { Profile } from './Profile';
import { fetcher } from '@front/shared';


const HeaderWrapper = styled.nav`
  height: 80px;
  width: 100%;
  background-color: darkgray;
  position: sticky;
  top: 0;
`

export function Head() {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_ROOT_HOST}/api/profile`, fetcher, {});

  debugger;

  if (error) return <div>Failed to load</div>


  return (
    <HeaderWrapper>
      {!data && <Loading />}

      {data && <Profile profile={data}/>}

    </HeaderWrapper>
  )
}
