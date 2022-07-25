import { useState } from 'react';
import {toast} from 'react-toastify';
import parseCommand from 'helpers/command-parser';
import FlightBox from 'components/flight-box';
import { InputBox, InputBoxWrapper, TextBoxWrapper, InputRow, Submit} from './text-box.styles';



const TextBox = ({scaleEnabled, setScaleEnabled, data, setData, flights }) => {
  const [userInput, setUserInput] = useState('');
  let commandState = false;
  const [enabled, setEnabled] = useState(false);

  const handleChange = (event) => {
    setUserInput(event.target.value);
    if(event.target.value >= 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }
  const handleInput = () => {
    if(userInput.toLowerCase() === 'scale') {
      setScaleEnabled(scaleEnabled => !scaleEnabled);
    }
    commandState = parseCommand(userInput, flights);
    setData(data => [...data, {type: 'input', input: userInput, status: commandState}]);
    setEnabled(false);
    setUserInput('');
    if(commandState) {
      toast.success('Request successfully entered', {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }  else {
      toast.error('Invalid command entered', {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
}
    return(
      
    <TextBoxWrapper>
        <FlightBox data={data} flights={flights} />
        <InputRow>
        <InputBoxWrapper>
          <InputBox 
          onChange={handleChange}
          value={userInput}
          />
        </InputBoxWrapper>
          <Submit disabled={!enabled} onClick={handleInput}>Submit</Submit>
        </InputRow>
    </TextBoxWrapper>
    )
}

export default TextBox;
