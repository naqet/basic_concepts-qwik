import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ShopContext } from "~/root";

const Header = component$(() => {
  const state = useContext(ShopContext);

  return (
    <header class="flex justify-between content-center rounded-lg bg-blue-400 px-4 py-2 text-white m-1">
      <img src="favicon.svg" alt="Qwik" class="h-10" />

      <Link
        href="/cart"
        data-count={state.cart.length}
        className={`grid items-center p-2 rounded-full bg-white after:content-[attr(data-count)] after:grid after:min-w-[1.25rem] after:h-5 after:absolute after:z-10 after:bg-purple-200 after:text-black after:-bottom-1 after:-left-1 after:rounded-full relative after:place-items-center after:text-sm`}
      >
        <img src="icons/cart.svg" alt="Cart" class="h-6" />
      </Link>
    </header>
  );
});

export default Header;
