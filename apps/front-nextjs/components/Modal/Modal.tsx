import SvgClose from '../../public/icons/close.svg';
import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  title: string;
  text: string;
  onClose: () => void,
}

const ModalWrapper = () => {
  return (
    <>
      <div className='title'>TITLE</div>

      <div className='Text'>TEXT</div>

    </>

  )
}

export const Modal = ({ title, text }: ModalProps) => {
  debugger;

  return ReactDOM.createPortal(
    <ModalWrapper/>
    , document.querySelector('#test'));

};
