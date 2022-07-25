import { useState } from 'react';
import Modal from 'react-modal';
import Colors from 'components/styles/colors';
import Warning from './warning';
import { CloseButton, ModalHeader, ContentWrapper, WarningWrapper, ButtonWrapper, WarningHeader, WarningSubtitle } from './crash-warning-modal.styles';

const customStyles = {
    overlay: {

    },
  content: {
    top: '80%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: Colors.background,
    width: '450px',
    height: '15vh',
    borderRadius: '16px',
    color: Colors.textSecondary,
  },
};


const CrashWarningModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }

  return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
      <ContentWrapper>
          <ButtonWrapper>
            <CloseButton onClick={closeModal}>
               X
            </CloseButton>
          </ButtonWrapper>
          <ModalHeader>Warning</ModalHeader>
          {Warning.map((warning,data1,data2) => {
            return (
              <WarningWrapper>
                <WarningHeader>{warning.header}</WarningHeader>
                <WarningSubtitle>{warning.subtitle} </WarningSubtitle>
            </WarningWrapper>
            );
            })
          }
      </ContentWrapper>
      </Modal>
  );
};

export default CrashWarningModal