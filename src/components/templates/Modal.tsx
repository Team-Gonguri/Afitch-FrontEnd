import React from 'react';

import { ColumnContainer, RowContainer, Button } from '../UI/atoms';

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

function Modal({ visible, setVisible, children }: ModalProps) {
  const xBtnClicked = () => {
    setVisible(!visible);
  };

  return (
    <ColumnContainer
      width="100vw"
      height="100vh"
      style={{
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.3)',
        position: 'fixed',
        zIndex: 999,
        top: '0',
        left: '0',
      }}
    >
      <ColumnContainer padding="10px" style={{ background: 'white' }}>
        <RowContainer width="100%" style={{ justifyContent: 'flex-end' }}>
          <Button
            width="auto"
            height="auto"
            marginBottom="10px"
            style={{
              background: 'none',
              color: 'black',
              cursor: 'pointer',
            }}
            onClick={xBtnClicked}
          >
            X
          </Button>
        </RowContainer>
        {children}
      </ColumnContainer>
    </ColumnContainer>
  );
}

export default Modal;
