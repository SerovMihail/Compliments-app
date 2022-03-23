import styled from 'styled-components';
import useSWR from 'swr';
import { fetcher } from '@shared/fetcher';
import { Loading } from './Loading';
import { Profile } from './Profile';
import useSWRImmutable from "swr/immutable"

const HeaderWrapper = styled.nav`
  height: 80px;
  width: 100%;
  background-color: darkgray;
  position: sticky;
  top: 0;
`

export function Head() {
  const { data, error } = useSWRImmutable(`${process.env.NEXT_PUBLIC_ROOT_HOST}/api/profile`, fetcher);

  debugger;

  if (error) return <div>Failed to load</div>


  return (
    <HeaderWrapper>
      {!data && <Loading />}

      {data && <Profile profile={data}/>}

    </HeaderWrapper>
  )
}
