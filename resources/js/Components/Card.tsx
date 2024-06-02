import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type CardType = {
    books: any
}

export default function ActionAreaCard({books}: CardType) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {books.judul}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {books.tgl_terbit}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {books.nama_penulis}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
