import { CategoriesInterface } from '../Collection/categoriesInterface';
import { ShopItemInterface } from '../../../../components/ShopItem/shopItemInterface';

export interface HotCollectionsInterface {
  categories: CategoriesInterface[]
  shopItems: ShopItemInterface[]
}
