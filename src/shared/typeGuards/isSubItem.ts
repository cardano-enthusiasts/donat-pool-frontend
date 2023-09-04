import type { SubItem, Item } from '@/shared/types';

function isSubItem(value: Item | SubItem): value is SubItem {
  return (value as SubItem).title !== undefined;
}

export default isSubItem;
