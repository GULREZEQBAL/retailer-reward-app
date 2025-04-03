export const fetchTransactions = () => {
  return Promise.resolve([
    {
      transactionId: 1,
      customerId: 101,
      name: "John Doe",
      date: "2024-01-15",
      product: "Laptop",
      price: 120,
    },
    {
      transactionId: 2,
      customerId: 101,
      name: "John Doe",
      date: "2024-02-10",
      product: "Phone",
      price: 80,
    },
    {
      transactionId: 3,
      customerId: 102,
      name: "Jane Smith",
      date: "2024-03-05",
      product: "Headphones",
      price: 60,
    },
    {
      transactionId: 4,
      customerId: 103,
      name: "Alice Brown",
      date: "2024-01-20",
      product: "TV",
      price: 200,
    },
  ]);
};