import { DragEvent, useCallback } from 'react';

function useHandleDrag() {
  const onDragStart = useCallback((event: DragEvent<HTMLLIElement>, idx: number) => {
    event.dataTransfer.setData('draggedItemIndex', idx.toString());
  }, []);

  const onDragOver = useCallback((event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback(
    (
      event: DragEvent<HTMLLIElement>,
      dropIndex: number,
      moveItem: (targetIndex: number, sourceIndex: number) => void,
    ) => {
      const draggedItemIndex = parseInt(event.dataTransfer.getData('draggedItemIndex'));
      if (draggedItemIndex === dropIndex) return;
      moveItem(draggedItemIndex, dropIndex);
    },
    [],
  );

  return { onDragStart, onDragOver, onDrop };
}

export default useHandleDrag;
