export interface ProductProps {
  id: number;
  images: string[];
  name: string;
  price: number;
  categories: string[];
  sizes: string[];
  discount: number;
  captions: string;
}

export interface ProductCart {
  id: number;
  image: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
}

export interface AddressInfo {
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  phone: string;
}
