import { useMemo } from 'react';

const useFormattedPrice = () => {
  const formatPrice = useMemo(() => {
    return (price: number) => {
      return price.toLocaleString('en') + '원';
    };
  }, []);
  return formatPrice;
};

export default useFormattedPrice;
