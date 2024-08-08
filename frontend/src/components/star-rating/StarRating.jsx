import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {

  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} filled="true" color="gold" />);
  }

  return <div>{stars}</div>;
};

export default StarRating;
