import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
console.log(user);


return <button
  className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  onClick={() => loginWithRedirect()}
>
Ingresar con Google
</button>


};

