import React, { useEffect, useState } from "react";
import { fetchTransactions } from "./api";
import { calculateRewardPoints } from "./utils/calculateRewards";
import TransactionTable from "./components/TransactionTable";
import UserRewardsTable from "./components/UserRewardsTable";
import TotalRewardsTable from "./components/TotalRewardsTable";
import "./style.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [userRewards, setUserRewards] = useState([]);
  const [totalRewards, setTotalRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTransactions = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTransactions();
        // Sort transactions by year, then month, then date
        const sortedTransactions = data.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getFullYear() - dateB.getFullYear() ||
                 dateA.getMonth() - dateB.getMonth() ||
                 dateA.getDate() - dateB.getDate();
        });

        const transactionsWithPoints = sortedTransactions.map((transaction) => ({
          ...transaction,
          rewardPoints: calculateRewardPoints(transaction.price),
        }));
        setTransactions(transactionsWithPoints);
        calculateUserRewards(transactionsWithPoints);
      } catch (err) {
        setError(err.message || "Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    getTransactions();
  }, []);

  const calculateUserRewards = (transactions) => {
    const rewards = transactions.reduce((acc, transaction) => {
      const month = new Date(transaction.date).getMonth() + 1;
      const year = new Date(transaction.date).getFullYear();

      const existingUserIndex = acc.findIndex(
        (user) =>
          user.customerId === transaction.customerId &&
          user.month === month &&
          user.year === year
      );

      if (existingUserIndex > -1) {
        acc[existingUserIndex].totalPoints += transaction.rewardPoints;
      } else {
        acc.push({
          customerId: transaction.customerId,
          name: transaction.name,
          month,
          year,
          totalPoints: transaction.rewardPoints,
        });
      }

      return acc;
    }, []);

    setUserRewards(rewards);

    const totalRewardPoints = rewards.reduce((acc, reward) => {
      const existingUserIndex = acc.findIndex((user) => user.name === reward.name);
      if (existingUserIndex > -1) {
        acc[existingUserIndex].totalPoints += reward.totalPoints;
      } else {
        acc.push({
          name: reward.name,
          totalPoints: reward.totalPoints,
        });
      }
      return acc;
    }, []);

    setTotalRewards(totalRewardPoints);
  };

  if (loading) {
    return <div>Loading transactions...</div>;
  }

  if (error) {
    return <div>Error loading transactions: {error}</div>;
  }

  return (
    <div>
      <h1>Retailer Reward Program</h1>
      <h2>Transactions</h2>
      <TransactionTable transactions={transactions} />
      <br />
      <h2>User Rewards (by Month)</h2>
      <UserRewardsTable userRewards={userRewards} />
      <br />
      <h2>Total Rewards</h2>
      <TotalRewardsTable totalRewards={totalRewards} />
    </div>
  );
};

export default App;