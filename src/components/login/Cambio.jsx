import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChangePasswordForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('La contraseña y su confirmación no coinciden');
      return;
    }
    try {
      await axios.put("https://proyectofinal-gg57.onrender.com/user/reset", { email, password });
      alert('La contraseña se ha cambiado con éxito');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/login');
    } catch (error) {
      alert('Ha ocurrido un error al cambiar la contraseña');
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 dark:bg-gray-900 rounded-md w-full max-w-md">
        <h5 className="text-3xl dark:text-teal-400 font-bold mb-3 mt-8 text-center">Cambio de contraseña</h5>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <label className="block mb-2 font-bold text-gray-500">
            Email:
          </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="form-input border-2 border-gray-500 rounded-md w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="Introduce tu correo electrónico..."
            required
          />
          <label className="block mb-2 font-bold text-gray-500">
            Contraseña:
          </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="form-input border-2 border-gray-500 rounded-md w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="Introduce tu nueva contraseña..."
            required
          />
          <label className="block mb-2 font-bold text-gray-500">
            Confirmar contraseña:
          </label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="form-input border-2 border-gray-500 rounded-md w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="Confirma tu nueva contraseña..."
            required
          />
          <div className="flex justify-center mt-8">
            <button 
              className="px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600"
              type="submit">
              Cambiar contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordForm;








// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function ChangePasswordForm() {
//   const navigate = useNavigate();
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('La contraseña y su confirmación no coinciden');
//       return;
//     }
//     try {
//       const response = await axios.post('', { password });
//       console.log(response);
//       alert('La contraseña se ha cambiado con éxito');
//       setPassword('');
//       setConfirmPassword('');
//       navigate('/login');
//     } catch (error) {
//       alert('Ha ocurrido un error al cambiar la contraseña');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="p-4 dark:bg-gray-900 rounded-md w-full max-w-md">
//         <h5 className="text-3xl dark:text-teal-400 font-bold mb-3 mt-8 text-center">Cambio de contraseña</h5>
//         <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
//           <label className="block mb-2 font-bold text-gray-500">
//             Contraseña:
//           </label>
//           <input 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             className="form-input border-2 border-gray-500 rounded-md w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
//             placeholder="Introduce tu nueva contraseña..."
//           />
//           <label className="block mb-2 font-bold text-gray-500">
//             Confirmar contraseña:
//           </label>
//           <input 
//             type="password" 
//             value={confirmPassword} 
//             onChange={(e) => setConfirmPassword(e.target.value)} 
//             className="form-input border-2 border-gray-500 rounded-md w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
//             placeholder="Confirma tu nueva contraseña..."
//           />
//           <div className="flex justify-center mt-8">
//             <button 
//               className="px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600"
//               type="submit">
//               Cambiar contraseña
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ChangePasswordForm;


