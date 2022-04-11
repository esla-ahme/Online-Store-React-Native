import { selector } from "recoil";
import { cartAtom, selCatAtom } from "./atoms";
import { allProductsAtom } from "./readonly-atoms";

export const cateProducts = selector({
  key: 'catProducts', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const prods = get(allProductsAtom)
    const selectedCate = get(selCatAtom)
    if (selectedCate == '') {
      return prods
    }
    return prods.filter(({ category }) => category == selectedCate);
  },
});


export const totalPrice = selector({
  key: 'totalPrice', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const cart = get(cartAtom)
    let overAllPrice = 0;
    cart.forEach(p => {
      overAllPrice = overAllPrice + Number((p.price * p.count))
    })

    return overAllPrice.toFixed(2)
  },
});