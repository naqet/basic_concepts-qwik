import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Shop from "~/components/Shop";

export default component$(() => {
  return (
    <>
      <Shop />
    </>
  );
});

export const head: DocumentHead = {
  title: "Basic concepts of Qwik",
};
