import React from "react";

const DrinkCard = ({ buyer, name, options, id, onDelete }) => {
  const handleDelete = () => {
    onDelete && onDelete(id);
  };

  return (
    <div className="card mb-1" id={id}>
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <button
            className="btn btn-outline-danger mr-3"
            onClick={handleDelete}
          >
            X
          </button>
          <h5 className="card-title m-0 mr-1">{name}</h5>
          <div className="card-text m-0">{options}</div>
        </div>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            <cite>{buyer}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default DrinkCard;
