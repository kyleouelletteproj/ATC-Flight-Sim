import styled from 'styled-components';
import Colors from 'components/styles';

export const SimulatorWrapper = styled.div`
   max-height: 100vh;
   max-width: 100vw;
   overflow: hidden;
`;
export const Background = styled.div`
background-color: ${Colors.background};
display: flex;
flex-direction: row;
width: 100vw;
height: 100vh;
overflow: hidden;
justify-content: center;
`;

export const UIBox = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
`;

export const MapWrapper = styled.div`
    margin-left: 16px;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
`;

export const ToastWrapper = styled.div`
margin-top: auto;
margin-bottom: 16px;
margin-left: auto;
margin-right: auto;
`;