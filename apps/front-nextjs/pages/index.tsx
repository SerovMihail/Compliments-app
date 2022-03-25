import styled from 'styled-components';
import { List } from '../components/List';
import { MainLayout } from '../components/MainLayout';
import { useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../contexts';
import { Modal } from '../components/Modal/Modal';

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
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(0);

  const openModal = () => setShowModal(!showModal);

  useEffect(() => {
    console.log('effect');
  });

  debugger;

  return (
    <MainLayout>
      <StyledPage>
        <div id='test'></div>
        You are at home page
        <button onClick={openModal}>Open Modal</button>
        <button onClick={() => setCount(count + 1)}>Button {count}</button>
        <button onClick={() => (ref.current = ref.current + 1)}>
          Button {ref.current}
        </button>
        <List list={posts} />

        {showModal && <Modal title={'title'} text={'text'} onClose={() => console.log('closed')} /> }
      </StyledPage>
    </MainLayout>
  );
}

export default Index;
