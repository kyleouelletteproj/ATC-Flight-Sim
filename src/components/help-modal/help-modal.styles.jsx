import Colors from 'components/styles/colors';
import styled from 'styled-components';

export const CloseButton = styled.button`
border: 1px solid;
border-radius: 49%;
font-size: 14px;
color: ${Colors.textSecondary};
background-color: transparent;
opacity: 1;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${Colors.textSecondary};
    overflow: scroll;
`;

export const CommandWrapper = styled.div`
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

export const ModalHeader = styled.h2`
    margin-top: -12px;
`;

export const ButtonWrapper = styled.div`
    margin-left: auto;
`;

export const CommandHeader = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

export const CommandSubtitle = styled.div`
    font-size: 12px;
    font-weight: italic;
`;

export const CommandDescription = styled.div`
    font-size: 10px;
    text-align: center;
`;