import PropTypes from 'prop-types';

export const calculateRewardPoints = (price) => {
  let points = 0;
  const wholePrice = Math.floor(price);

  if (wholePrice > 100) {
    points += (wholePrice - 100) * 2;
    points += 50;
  } else if (wholePrice > 50) {
    points += (wholePrice - 50) * 1;
  }

  return points;
};

calculateRewardPoints.propTypes = {
  price: PropTypes.number.isRequired,
};