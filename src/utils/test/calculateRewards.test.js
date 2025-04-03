import { calculateRewardPoints } from '../calculateRewards';

describe('calculateRewardPoints', () => {
  it('should return 0 points for a price of $50 or less', () => {
    expect(calculateRewardPoints(50)).toBe(0);
    expect(calculateRewardPoints(30)).toBe(0);
    expect(calculateRewardPoints(0)).toBe(0);
  });

  it('should return correct points for a price between $50 and $100', () => {
    expect(calculateRewardPoints(60)).toBe(10);
    expect(calculateRewardPoints(75)).toBe(25);
    expect(calculateRewardPoints(100)).toBe(50);
  });

  it('should return correct points for a price over $100', () => {
    expect(calculateRewardPoints(101)).toBe(52); 
    expect(calculateRewardPoints(120)).toBe(90); 
    expect(calculateRewardPoints(150)).toBe(150); 
  });

  it('should handle decimal prices correctly (tip 6)', () => {
    expect(calculateRewardPoints(50.2)).toBe(0);
    expect(calculateRewardPoints(75.75)).toBe(25);
    expect(calculateRewardPoints(100.4)).toBe(50);
    expect(calculateRewardPoints(110.99)).toBe(70); 
  });
});