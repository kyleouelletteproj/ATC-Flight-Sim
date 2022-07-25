import styled from 'styled-components';
import Aircraft from 'assets/airplane.png';

export const AircraftWrapper = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    background-image: url(${Aircraft});
    opacity: ${({ spawning }) =>
    spawning ? `1` : '0'};
    transform: ${({ heading }) =>
    heading ? `rotate(${heading}deg)` : 'rotate(0deg)'};
    transition: all 1s linear;
`;