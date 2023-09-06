import type { Item, SubItem } from '@/shared/types';

function isSubItem(value: Item | SubItem): value is SubItem {
  return !Object.hasOwn(value, 'subItems');
}

export default isSubItem;
