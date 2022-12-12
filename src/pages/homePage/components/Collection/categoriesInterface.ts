import { ShopItemInterface } from '../../../../components/ShopItem/shopItemInterface';

export interface CategoriesInterface {
  _id: string
  name: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
}

export interface CollectionInterface extends CategoriesInterface {
  shopItems: ShopItemInterface[]
}
