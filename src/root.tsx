import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { faker } from "@faker-js/faker";
import { RouterHead } from "./components/RouterHead";

import globalStyles from "./global.css?inline";
export interface Item {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

export interface ShopState {
  availableItems: readonly Item[];
  cart: number[];
}

export const ShopContext = createContext<ShopState>("shop-context");

export default component$(() => {
  useStyles$(globalStyles);
  const availableItems = Array.from({ length: 5 }, () => ({
    id: faker.datatype.number(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.datatype.number({ min: 1, max: 100 }),
    imgUrl: faker.image.business(250, 180),
  }));
  const store = useStore<ShopState>({ availableItems, cart: [] });
  useContextProvider(ShopContext, store);

  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
