import { useState, useCallback } from 'react';

interface Props<T> {
  items: T[];
}

function useDragDropList<T>({ items: initItems = [] }: Props<T>) {
  const [items, setItems] = useState<T[]>(initItems);

  const moveItem = useCallback(
    (targetIndex: number, sourceIndex: number) => {
      const newList = [...items];
      const itemDragged = newList.splice(sourceIndex, 1)[0];
      newList.splice(targetIndex, 0, itemDragged);

      setItems(newList);
    },
    [items],
  );

  return { items, moveItem };
}

export default useDragDropList;
