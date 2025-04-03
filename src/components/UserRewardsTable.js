import React from "react";
import PropTypes from 'prop-types';

const UserRewardsTable = ({ userRewards }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Name</th>
          <th>Month</th>
          <th>Year</th>
          <th>Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {userRewards.map((userReward, index) => (
          <tr key={index}>
            <td>{userReward.customerId}</td>
            <td>{userReward.name}</td>
            <td>{userReward.month}</td>
            <td>{userReward.year}</td>
            <td>{userReward.totalPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

UserRewardsTable.propTypes = {
  userRewards: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      month: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      totalPoints: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default UserRewardsTable;