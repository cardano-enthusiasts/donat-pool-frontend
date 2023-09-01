import { type Item, type SubItem } from '@/shared/types';

function isSubItem(item: SubItem | Item): item is SubItem {
  return (item as SubItem).title !== undefined;
}

export default isSubItem;
