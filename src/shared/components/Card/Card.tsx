import { Card as CardMui, CardContent } from '@mui/material';

import { Description, Title } from './Card.styled';

const Card = ({ title, description }) => {
  return (
    <CardMui variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
    </CardMui>
  );
};

export default Card;
