import {
  atom,
} from 'recoil';


export const selCatAtom = atom({
  key: 'selectedCat',
  default: ''
})

export const favourite = atom({
  key: 'fav',
  default: []
})

export const cartAtom = atom({
  key: 'cart',
  default: []
})