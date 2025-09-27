export type ApiPrices = {
  items: {
    name: string;
    prices: { [shop: string]: number };
    normalPrice: number;
  }[];
  shops: string[];
};
