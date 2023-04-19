import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  
  const { loginWithRedirect } = useAuth0();
  return <button 
  className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  onClick={() => loginWithRedirect()}>
    Iniciar sesión Google
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
      <div>
        <LogoutButton/>
      </div>
     </>
    )
  );
};

