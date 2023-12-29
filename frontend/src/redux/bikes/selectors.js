export const getAll = (state) => state.bikes.items;

export const getTotalLength = (state) => state.bikes.items.length;

export const getAllAvailable = (state) => {
  const filtered = state.bikes.items.filter(
    (bike) => bike.status === "Available"
  );
  return filtered.length;
};

export const getAllBooked = (state) => {
  const filtered = state.bikes.items.filter((bike) => bike.status === "Busy");
  return filtered.length;
};

export const getAveragePrice = (state) => {
  const prices = state.bikes.items.map(({ price }) => price);
  const totalPrice = prices.reduce((acc, number) => acc + number, 0);
  const totalLength = prices.length;

  return Math.round(totalPrice / totalLength);
};
