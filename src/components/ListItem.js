import React from 'react';

export function ListItem({ item, onRemove, onComplete }) {
  return (
    <div className="card mt-3">
      <div className="card-header">{item.title}</div>
      <div className="card-body">
        <p className="card-text">{item.description}</p>
        {!item.completed && (
          <a
            href="/"
            className="btn btn-outline-success mr-3"
            onClick={e => {
              onComplete(item.id);
              e.preventDefault();
            }}
          >
            Complete
          </a>
        )}

        <a
          href="/"
          className="btn btn-outline-danger"
          onClick={e => {
            onRemove(item.id);
            e.preventDefault();
          }}
        >
          Remove
        </a>
      </div>
    </div>
  );
}