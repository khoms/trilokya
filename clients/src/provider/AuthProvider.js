import React from "react";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async (req, res) => {
    setLoading(true);
    const token = localStorage.getItem("ACCESS_TOKEN_NAME");
    // const token = getCookie("token");
    // let token;
    // if (tokenKey) {
    //   token = tokenKey;
    // } else {
    //   token = null;
    // }
    setUserToken(token);
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        userToken,
        getToken,
        setUserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
