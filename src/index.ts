import { sum } from "@/sum";

const root = document.querySelector("#app");

if (root) {
  root.innerHTML = `${sum(1, 2)}`;
}
