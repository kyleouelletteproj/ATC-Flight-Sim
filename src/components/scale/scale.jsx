import { ScaleWrapper, OuterRing, MiddleRing, CenterRing } from './scale.styles';


const Scale = ({scaleEnabled}) => {
    return(
        <>
        {scaleEnabled && (
          <ScaleWrapper>
            <OuterRing>
                <MiddleRing>
                    <CenterRing />
                </MiddleRing>
            </OuterRing> 
        </ScaleWrapper>
        )}
        </>
    )

}

export default Scale;