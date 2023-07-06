export interface ItemProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItemProps {
  id: number;
  name: string;
  count: number;
  image: string;
  price: number;
}
