import React from 'react';
import { ListItem } from './ListItem';

export function List({ items, onRemove, onComplete }) {
  if (!items) {
    return null;
  }

  return items.map(item =>
    <ListItem
      key={item.id}
      item={item}
      onRemove={onRemove}
      onComplete={onComplete}
    />
  );
}