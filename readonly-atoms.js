import {
  atom,
} from 'recoil';
import { cats, products } from './data';

export const allProductsAtom = atom({
  key: 'products',
  default: products
})


export const allCategoriesAtom = atom({
  key: 'categories',
  default: cats
})

export const userAtom = atom({
  key: 'user',
  default: 'null'
})