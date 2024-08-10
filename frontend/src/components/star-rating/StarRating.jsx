import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Importing the half-filled star icon

const StarRating = ({ rating }) => {
  const stars = [];

  // Loop through and add fully filled stars
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars.push(<FaStar key={i} color="gold" />);
  }

  // Add a half star if there's a decimal part
  if (rating % 1 !== 0) {
    stars.push(<FaStarHalfAlt key="half" color="gold" />);
  }

  // Add empty stars to fill out to 5 stars (if needed)
  const totalStars = 5;
  while (stars.length < totalStars) {
    stars.push(<FaStar key={stars.length + 1} color="lightgray" />);
  }

  return <div>{stars}</div>;
};

export default StarRating;
