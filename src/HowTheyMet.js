import { useState, useEffect } from "react";
import './App.css';
import { Typography } from '@mui/material';

function HowTheyMet() {
  const API_ENDPOINT = 'https://this-dude-guy-mentioned-does-not-exist.oztamir.workers.dev/?prompt=';
  const NAMES = ['Gal', 'Yuval', 'Adi', 'Noam', 'Eden', 'Amit', 'Danial', 'Lior', 'Or', 'Netta'];
  const [name, ] = useState(NAMES[Math.floor(Math.random() * NAMES.length)]);
  const [data, setData] = useState("Loading...");
 
  useEffect(() => {
   fetch(API_ENDPOINT + name)
    .then(async (response) => {
        let json = await response.json();
        setData(json.choices[0].text);
    })
    .catch((error) => {
        setData("We can't tell how they met.");
    })
  }, [name]);

  return (
    <Typography variant="h5" component="h5" className="How-They-Met">
      {data}
    </Typography>
  );
}

export default HowTheyMet;
