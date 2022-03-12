import React, { useState, useContext } from "react";

const UserNameContext = React.createContext();
const UpdateUserNameContext = React.createContext();

export const useUserName = () => {
  return useContext(UserNameContext);
};

export const useUpdateUserName = () => {
  return useContext(UpdateUserNameContext);
};

export const UserProvider = ({ value, children }) => {
  const [userName, setUserName] = useState(value);
  return (
    <UserNameContext.Provider value={userName}>
      <UpdateUserNameContext.Provider value={setUserName}>
        {children}
      </UpdateUserNameContext.Provider>
    </UserNameContext.Provider>
  );
};
// Before You Use Context API
// Note that, Context is mainly used when some data needs to be accessible by many components at different nesting levels and you want to avoid passing props down the tree.
// Context API is very useful, but you should use it carefully because it can sometimes make component reuse difficult.