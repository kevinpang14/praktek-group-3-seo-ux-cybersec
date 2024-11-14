import React from "react";

const Header = ({ breadcrumb }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-72 bg-primary">
        <h1 className="text-accent text-5xl py-1 font-bold">{breadcrumb}</h1>
        <p className="text-white text-2xl py-1">Home / {breadcrumb}</p>
      </div>
    </>
  );
};

export default Header;
