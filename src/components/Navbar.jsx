import React from 'react';

const Navbar = (props) => {
  const modoOver = () => {
    props.setOver(true);
    props.setContent(false);
    props.setCreate(false);
  };

  const modoContent = () => {
    props.setOver(false);
    props.setContent(true);
    props.setCreate(false);
  };

  const modoCreate = () => {
    props.setOver(false);
    props.setContent(false);
    props.setCreate(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="btn btn-primary" onClick={modoOver}>
          Overview
        </button>
        <button className="btn btn-primary" onClick={modoContent}>
          Content
        </button>
        <button className="btn btn-primary" onClick={modoCreate}>
          Create
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
