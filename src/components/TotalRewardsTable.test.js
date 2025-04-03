import React from 'react';
import { render, screen } from '@testing-library/react';
import TotalRewardsTable from './TotalRewardsTable';
import '@testing-library/jest-dom';

describe('TotalRewardsTable', () => {
  it('should render without crashing', () => {
    render(<TotalRewardsTable totalRewards={[]} />); 
  });

  it('should render rewards data correctly', () => {
    const rewardsData = [
      { name: 'User One', totalPoints: 150 },
      { name: 'User Two', totalPoints: 200 },
    ];
    render(<TotalRewardsTable totalRewards={rewardsData} />);

    
    expect(screen.getByText(/User One/i)).toBeInTheDocument();
    expect(screen.getByText(/User Two/i)).toBeInTheDocument();

    
    expect(screen.getByText(/Total Reward Points/i)).toBeInTheDocument(); 
    expect(screen.getByText(/150/i)).toBeInTheDocument();
    expect(screen.getByText(/200/i)).toBeInTheDocument();
  });

  it('should render "No rewards data available" if totalRewards is empty', () => {
    render(<TotalRewardsTable totalRewards={[]} />);
    
  });
});