import { $, component$, useContext } from "@builder.io/qwik";
import { ShopContext } from "~/root";

const Shop = component$(() => {
  const state = useContext(ShopContext);
  const addToBasket = $((id: number) => {
    const itemIndex = state.cart.findIndex((cartItem) => cartItem === id);

    if (itemIndex === -1) {
      state.cart = [...state.cart, id];
    }
  });

  const removeFromBasket = $((id: number) => {
    state.cart = state.cart.filter((cartItem) => cartItem !== id);
  });
  return (
    <ul className="flex gap-2 flex-wrap justify-evenly">
      {state.availableItems.map((item) => (
        <li className="flex flex-col bg-blue-300 rounded-lg w-[260px] p-2 h-min text-white gap-1">
          <img
            src={item.imgUrl}
            alt={item.title}
            width={250}
            height={180}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-xs opacity-90">{item.description}</p>
          </div>

          {state.cart.some((cartItem) => cartItem === item.id) ? (
            <button
              className="bg-red-300 text-center rounded-lg"
              onClick$={() => removeFromBasket(item.id)}
            >
              Remove from basket
            </button>
          ) : (
            <button
              className="rounded-lg bg-purple-200 text-black px-3 py-2 text-sm hover:bg-purple-300"
              onClick$={() => addToBasket(item.id)}
            >
              ADD TO BASKET
            </button>
          )}
        </li>
      ))}
    </ul>
  );
});

export default Shop;
