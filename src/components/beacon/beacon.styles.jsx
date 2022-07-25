import styled from 'styled-components';
import Colors from 'components/styles/colors';


export const BeaconWrapper = styled.div`
    position: fixed;
    color: ${Colors.backgroundSecondary};
    width: 20px;
    height: 20px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    left: ${({ xPosition }) =>
    xPosition ? `${xPosition}` : '20px'};
    top: ${({ yPosition }) =>
    yPosition ? `${yPosition}` : '35px'};
`;

export const NameWrapper = styled.div`
    display: flex;
    margin-bottom: auto;
    font-size: 12px;
    display: flex;
    justify-content: center;
`;