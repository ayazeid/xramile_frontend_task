export const useSum = () => {
  const sumFunction = (productList) => {
    let sum = 0;
    for (const product of productList) {
      sum += parseInt(product.price);
    }
    return sum;
  };
  return { sumFunction };
};
