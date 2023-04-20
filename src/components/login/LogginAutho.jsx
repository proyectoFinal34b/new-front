import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  
  const { loginWithRedirect } = useAuth0();
  return <button 
  type="button" class="text-white bg-[#111827] hover:bg-[#97c0be]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
  onClick={() => loginWithRedirect()}>
    <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 
          116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
          Iniciar sesion con google
    </button>;
};

export const LogoutButton = () => {
  
  const { logout } = useAuth0();
  
  return (
     <button 
     className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
     onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
     >
      Cerrar sesión
    </button>
  );
};

export const ProfileAutho = () => {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
     <>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>Nombre : {user.given_name}</h2>
        <h2>Apellido : {user.family_name}</h2>
        <p>Email : {user.email}</p>
        <h2>Direccion : {user.address}</h2>
        <h2>Telefono : {user.phone_number}</h2>
      </div>
     </>
    )
  );
};


