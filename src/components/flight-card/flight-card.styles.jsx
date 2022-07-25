import styled from 'styled-components';
import Colors from 'components/styles/colors';


export const FlightCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Colors.textSecondary};
  width: 100%;
  height: 60px;
  margin-top: 0px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: ${Colors.buttonPrimary};
  margin-bottom: 4px;
`;

export const TopRow = styled.div`
   display: flex;
   width: 100%;
   flex-direction: row;
   margin-left: auto;
   margin-right: auto;
   margin-top: 6px;
`;

export const IdWrapper = styled.div`
  margin-left: 12px;
  margin-right: auto;
`;

export const RunwayWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const AltitudeWrapper = styled.div`
  margin-right: 12px;
  margin-left: auto;
`;

export const BottomRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6px;
`;

export const PlaneTypeWrapper = styled.div`
  margin-left: 12px;
  margin-right: auto;
`;

export const DestinationWrapper = styled.div`
  margin-right: 12px;
  margin-left: auto;
`;
