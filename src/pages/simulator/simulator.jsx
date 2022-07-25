import { useEffect, useState } from 'react';
import Map from 'components/map';
import { spawnPlane } from 'helpers/aircraft-spawn';
import { Background, UIBox, MapWrapper, ToastWrapper, SimulatorWrapper } from './simulator.styles';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Textbox from 'components/text-box';

const Simulator = () => {
  const [scaleEnabled, setScaleEnabled] = useState (false);
  const [data, setData] = useState([])
  const [flights, setFlight] = useState([]);

  useEffect(() => {
  const interval = setInterval(() => {
    let newPlane = spawnPlane();
    setFlight(flights => [...flights, newPlane]);
    }, 10000);
    return() => clearInterval(interval);
  }, []);

    return (
        <SimulatorWrapper>
        <Background>
          <MapWrapper>
            <Map scaleEnabled={scaleEnabled} flights={flights} setFlight={setFlight} />
          </MapWrapper>
            <UIBox>
            <Textbox scaleEnable={scaleEnabled} setScaleEnabled={setScaleEnabled} data={data} setData={setData} flights={flights} />
            </UIBox>
        </Background>
        <ToastWrapper>
          <ToastContainer />
        </ToastWrapper>
        </SimulatorWrapper>
    );
}

export default Simulator;