import React, { createContext, useState, useEffect } from "react";

export const FormContext = createContext({ url });

const FormContextProvider = ({ children, url }) => {
  return (
    <FormContext.Provider
      value={{
        url,
      }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
