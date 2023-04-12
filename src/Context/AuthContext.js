import React, { createContext, useEffect, useState } from "react";
import { AuthApi } from "../_api_/AuthApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(() => {
		const checkLoggedIn = async () => {
			let cuser = await AuthApi.isAuthenticated();
			if (cuser === null) {
				localStorage.setItem('Truimp-UserData', '');
				cuser = '';
			}
         
			setCurrentUser(cuser);
		};

		checkLoggedIn();
	}, []);

	console.log('usercontext', currentUser);


  return (
    <AuthContext.Provider
    value={[currentUser, setCurrentUser]}
    >
      {children}
    </AuthContext.Provider>
  );
};
