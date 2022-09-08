import { createContext, useEffect, useState, useContext } from "react";
import { Auth } from "aws-amplify";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
  }, []);

  //   console.log(authUser);

  const sub = authUser?.attributes?.sub;

  return (
    <AuthContext.Provider value={{ authUser, dbUser, sub }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
