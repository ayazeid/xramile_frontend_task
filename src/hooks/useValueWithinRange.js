export const useValueWithinRange = () => {
  const valueWithinRange = (value, min, max) => {
    if (value > max) {
      value = min;
      return value;
    } else if (value < min) {
      value = max;
      return value;
    } else {
      return value;
    }
  };

  return { valueWithinRange };
};
