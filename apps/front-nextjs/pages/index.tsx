import styled from 'styled-components';
import { List } from '../components/List';
import { MainLayout } from '../components/MainLayout';
import { useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../contexts';

const StyledPage = styled.div`
  .page {
  }
`;

const Input = styled.input`
  background-color: red;
  height: 100px;
  width: 200px;

  &:focus {
    background-color: darkgray;
  }
`;

const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];

export function Index() {


  const [count, setCount] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    console.log('effect');
  });

  debugger;


  return (
    <MainLayout>
      <StyledPage>
        You are at home page

        <button onClick={() => setCount(count + 1)}>Button {count}</button>

        <button onClick={() => ref.current = ref.current + 1}>Button {ref.current}</button>

        <List list={posts} />

      </StyledPage>
    </MainLayout>

  );
}

export default Index;
