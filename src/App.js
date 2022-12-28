import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';

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
      </header>
    </div>
  );
}

export default App;
