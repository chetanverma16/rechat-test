import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-gray-50 w-full max-w-lg h-screen flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
