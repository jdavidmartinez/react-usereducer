import React, { useState, useEffect } from "react";

const Authcontext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthcontextProvider = (props) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

   if (storedUserLoggedInInformation === "1") {
      setIsloggedIn(true);
   }
 }, []);

  const logoutHandler = () => {
   localStorage.removeItem("isLoggedIn");
    setIsloggedIn(false);
  };

  const loginHandler = () => {
   localStorage.setItem("isLoggedIn", "1");
    setIsloggedIn(true);
  };
  return (
    <Authcontext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </Authcontext.Provider>
  );
};

export default Authcontext;
