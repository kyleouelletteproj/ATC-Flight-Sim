import React from 'react';
import { InputCardWrapper, SuccessWrapper, FailWrapper, TextWrapper } from './input-card.styles';


const InputCard = ({ input, status }) => {
    return(
      <InputCardWrapper>
      <TextWrapper>
        {input}
          {status && (
              <SuccessWrapper>
                ✓
              </SuccessWrapper>
          )}
          {!status && (
              <FailWrapper>
                X
              </FailWrapper>
          )}
          </TextWrapper>
      </InputCardWrapper>
    )
}

export default InputCard;