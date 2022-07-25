import styled from 'styled-components';
import Colors from 'components/styles';

export const TextBoxWrapper = styled.div`
  margin-left: auto;
  max-width: 30vw;
  border-radius: 16px;
`;
export const InputRow = styled.div`
   display: flex;
   flex-direction: row;
   height: 40px;
   border: 2px solid;
   border-color: ${Colors.borderPrimary};
   border-radius: 16px;
`;

export const Submit = styled.button`
width: 100px;
height: 100%;
border: none;
border-bottom-right-radius: 16px;
border-top-right-radius: 16px;
background-color: ${Colors.buttonSecondary};
:focus {
      border-style: none;
      outline: none;
  }
  :hover {
    background-color: ${Colors.buttonPrimary};
  }
`;
export const InputBoxWrapper = styled.div`
  width: 250px;
  background-color: ${Colors.backgroundSecondary};
  border-bottom-left-radius: 16px;
  overflow: hidden;
  border-top-left-radius: 16px;
`;
export const InputBox = styled.input`
font-size: 16px;
  width: 100%;
  color: ${Colors.textPrimary};
  background: ${Colors.backgroundSecondary};
  border-color: blue;
  border-style: none;
  padding-left: 35px;
  padding-top: 12px;
  padding-bottom: 12px;
  :focus {
      border-style: none;
      outline: none;
  }
`;