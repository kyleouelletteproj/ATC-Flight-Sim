import React from 'react';
import { FlightCardWrapper, TopRow, IdWrapper, RunwayWrapper, AltitudeWrapper, BottomRow, PlaneTypeWrapper, DestinationWrapper } from './flight-card.styles';

const FlightCard = ({data}) => {
    const isDeparting = data?.flightStatus === 'departing'
    return(
      <FlightCardWrapper>
      {isDeparting && (
        <>
          <TopRow>
          <IdWrapper>
            {data?.flightId}
          </IdWrapper>
          <RunwayWrapper>
            {data?.runway}
          </RunwayWrapper>
          <AltitudeWrapper>
            {data?.altitude}
          </AltitudeWrapper>
          </TopRow>
          <BottomRow>
            <PlaneTypeWrapper>
              {data?.planeType}
            </PlaneTypeWrapper>
            <DestinationWrapper>
              {data?.destination}
            </DestinationWrapper>
          </BottomRow>
        </>
      )}
      {!isDeparting && (
        <>
        <TopRow>
        <IdWrapper>
          {data?.flightId}
        </IdWrapper>
        <RunwayWrapper>
          {data?.runway}
        </RunwayWrapper>
        <AltitudeWrapper>
          {data?.altitude}
        </AltitudeWrapper>
        </TopRow>
        <BottomRow>
          <PlaneTypeWrapper>
              {data?.planeType}
          </PlaneTypeWrapper>
          <DestinationWrapper>
              {data?.destination}
            </DestinationWrapper>
        </BottomRow>
        </>
      )}
    </FlightCardWrapper>
    )
}

export default FlightCard;