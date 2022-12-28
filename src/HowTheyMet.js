import useAxios from 'axios-hooks';
import './App.css';
import { Typography } from '@mui/material';

function HowTheyMet() {
  const API_ENDPOINT = 'https://this-dude-guy-mentioned-does-not-exist.oztamir.workers.dev/?prompt=';
  const NAMES = ['Gal', 'Yuval', 'Adi', 'Noam', 'Eden', 'Amit'];
  const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];

  const [{ data, loading, error }, refetch] = useAxios(
    API_ENDPOINT + randomName
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>We can't tell how they met.</p>

  return (
    <Typography variant="h2" component="h2">
      {data.choices[0].text}
    </Typography>
  );
}

export default HowTheyMet;
