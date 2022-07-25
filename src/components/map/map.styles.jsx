import styled from 'styled-components';
import Colors from 'components/styles/colors';

export const MapWrapper = styled.div`
    background-color: ${Colors.buttonPrimary};
    border-radius: 16px;
    height: 620px;
    width: 600px;
    position: relative;
    overflow: hidden;
`;

export const Beacon = styled.div`
    position: fixed;
    width: 5px;
    height: 10px;
    left: ${({ xPosition }) =>
    xPosition ? `${xPosition}` : '20px'};
    top: ${({ yPosition }) =>
    yPosition ? `${yPosition}` : '35px'};
    background-color: ${Colors.backgroundSecondary};
`;