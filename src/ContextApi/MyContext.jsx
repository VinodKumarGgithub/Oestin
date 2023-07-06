import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [availble, setAvailble] = useState('');

  const handleLoginClose = (status) => {
    setLoginPopup(status);
  };
  const handleAvailibity = (data) => {
    setAvailble(data);
  };

  return (
    <MyContext.Provider value={{ loginPopup, handleLoginClose,availble , handleAvailibity }}>
      {children}
    </MyContext.Provider>
  );
};
