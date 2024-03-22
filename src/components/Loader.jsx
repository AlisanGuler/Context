import React from "react";

const Loader = () => {
  return (
    <div className="d-flex w-100 justify-content-center gap-3">
      <div className="spinner-grow my-5 text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow my-5 text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow my-5 text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
