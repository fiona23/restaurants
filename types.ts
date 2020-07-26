export interface Restaurant {
  geo: {address: Address};
  name: string;
  url: string;
}

export interface Address {
  addressLocality: string;
  postalCode: string;
  streetAddress: string;
}
