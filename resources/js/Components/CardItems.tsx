import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type CardType = {
    image: string
    judul: string
}

export default function ActionAreaCard( { image, judul }: CardType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       <img src={image} className="w-full h-40" alt="buku" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {judul}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi alias at beatae, ullam, consequatur est mollitia nemo, assumenda temporibus similique sequi corporis. Necessitatibus voluptas dicta illo repellat consectetur, provident quae.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
