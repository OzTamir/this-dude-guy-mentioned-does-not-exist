import { useState, useEffect } from "react";
import './App.css';
import { Typography } from '@mui/material';

function HowTheyMet() {
  const API_ENDPOINT = 'https://this-dude-guy-mentioned-does-not-exist.oztamir.workers.dev/';
  const [data, setData] = useState("Loading...");
 
  useEffect(() => {
   fetch(API_ENDPOINT)
    .then(async (response) => {
        let json = await response.json();
        let text = json.choices[0].text.trim();
        console.log(text);
        if (text.startsWith('"'))
        {
            text = text.substring(1);
        }
        if (text.endsWith('"'))
        {
            text = text.substring(0, text.length - 1);
        }
        setData(text);
    })
    .catch((error) => {
        setData("We can't tell how they met.");
    })
  }, []);

  return (
    <Typography variant="h5" component="h5" className="How-They-Met">
      {data}
    </Typography>
  );
}

export default HowTheyMet;
