import styled from 'styled-components';
import Colors from 'components/styles/colors';


export const RunwayWrapper = styled.div`
    position: fixed;
    color: ${Colors.backgroundSecondary};
    width: 40px;
    height: 10px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    left: ${({ xPosition }) =>
    xPosition ? `${xPosition}` : '20px'};
    top: ${({ yPosition }) =>
    yPosition ? `${yPosition}` : '35px'};
`;

export const NameWrapper = styled.div`
    display: left;
    margin-bottom: auto;
    font-size: 12px;
    display: flex;
    justify-content: center;
`;

export const RunwayLine = styled.div`
    width: 20px;
    height: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.backgroundSecondary};
`;