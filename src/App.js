import './App.css';
import { Typography } from '@mui/material';
import HowTheyMet from './HowTheyMet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2" component="h2">
          This is the person that Guy mentioned.
        </Typography>
        <Typography variant="h4" component="h2">
          They do not exist.
        </Typography>
        <img src="https://thispersondoesnotexist.com/image" className="App-logo" alt="logo" />
        <HowTheyMet />
      </header>
    </div>
  );
}

export default App;
