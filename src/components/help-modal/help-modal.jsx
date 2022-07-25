import { useState } from 'react';
import Modal from 'react-modal';
import Colors from 'components/styles/colors';
import Commands from 'commands';
import { CloseButton, ModalHeader, ContentWrapper, CommandWrapper, ButtonWrapper, CommandHeader, CommandSubtitle, CommandDescription } from './help-modal.styles';

const customStyles = {
    overlay: {

    },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: Colors.background,
    width: '450px',
    height: '75vh',
    borderRadius: '16px',
    color: Colors.textSecondary,
  },
};


const HelpModal = () => {
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
          <ModalHeader>Commands</ModalHeader>
          {Commands.map((command) => {
            return (
              <CommandWrapper>
                <CommandHeader>{command.header}</CommandHeader>
                <CommandSubtitle>{command.subtitle}</CommandSubtitle>
                <CommandDescription>{command.description}</CommandDescription>
            </CommandWrapper>
            );
            })
          }
      </ContentWrapper>
      </Modal>
  );
};

export default HelpModal