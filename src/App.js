import { BrowserRouter as Router } from "react-router-dom";
import Simulator from './pages/simulator';

function App() {
  return (
    <div className="App">
      <Router data-testid="router">
        <Simulator data-testid="simulator" />
      </Router>
    </div>
  );
}

export default App;
