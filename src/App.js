import './App.css';
import {Welcome2} from './welcome';

function App() {
  return (
    <div className="App">
        <Welcome2 children='Welcome 1'/>
        <Welcome2 children='Welcome 2'/>
    </div>
  );
}

export default App;
