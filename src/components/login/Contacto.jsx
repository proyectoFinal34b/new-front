import React, { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import { currentLocation } from "../navbar/Navbar";
import imagen from '../about/logardo.png';

function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      Swal.fire({
        title: "Error",
        text: "Por favor complete todos los campos antes de enviar el formulario.",
        icon: "error",
        confirmButtonText: 'OK',
        timer: "5000",
        timerProgressBar: true,
        position: "top",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
      return;
    }
    axios.post('https://formsubmit.co/ajax/bastet1872@gmail.com', {
      name: name,
      email: email,
      subject: subject,
      message: message
    })
    .then(() => {
      Swal.fire({
        title: "Mensaje enviado",
        text: "Gracias por contactarte con nosotros",
        icon: "success",
        confirmButtonText: 'OK',
        timer: "5000",
        timerProgressBar: true,
        position: "top",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
      window.location.href = currentLocation;
    })
    .catch((error) => {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.",
        icon: "error",
        timer: "5000",
        timerProgressBar: true,
        position: "top",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
      console.log(error);
    });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
    <div className="p-10 shadow-lg text-gray-700 bg-gray-200 max-w-fit m-auto min-h-fit dark:text-gray-500 dark:bg-gray-900">
    <div className="flex justify-center">
  <img src={imagen} alt="Descripción de la imagen" className="w-16 h-14 mx-auto block" />
</div>
      <h2 className="text-2xl font-bold mb-4">Contactate con nosotros</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block font-medium">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 px-4 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 px-4 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-medium">
            Asunto
          </label>
          <select
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full py-2 px-4 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          >
            <option value="">Elija una opcion</option>
            <option value="Adopciones">Adopciones</option>
            <option value="Apadrinamiento">Apadrinamiento</option>
            <option value="Compras">Compras</option>
            <option value="Donaciones">Donaciones</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block font-medium">
            Mensaje
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full py-6 px-8 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ></textarea>
        </div>
        <input type="hidden" name="_captcha" value="false" />
        <button
          className="bg-teal-400 hover:bg-teal-500 text-gray-100 font-medium py-2 px-4 rounded-md"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
  );
}

export default Contacto;





// function Contacto() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [subject, setSubject] = useState("Adopciones");

// //   function sendEmail(e) {
// //     e.preventDefault();
// //     const emailBody = `Nombre: ${name}%0D%0AEmail: ${email}%0D%0AAsunto: ${subject}%0D%0AMensaje: ${message}`;
// //     const emailUrl = `mailto:bastet@bastet.com?subject=Nuevo mensaje de contacto&body=${emailBody}`;

// //     try {
// //       window.open(emailUrl);
// //       alert('¡El mensaje se envió correctamente!');
// //     } catch (error) {
// //       alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
// //     }
// //   }

//   return (
//     <div className="p-4 shadow-lg text-gray-700 bg-gray-200 max-w-fit m-auto min-h-fit dark:text-gray-100 dark:bg-gray-900 ">
//       <h2 className="text-3xl dark:text-teal-400 font-bold mb-3">Contactate con nosotros</h2>
//     <form action="https://formsubmit.co/bastet1872@gmail.com" method="POST">
//         <div className="flex flex-col">
//       <label className="mb-2 font-bold dark:text-gray-100"
//       htmlFor="name">Nombre</label>
//       <input
//         type="text"
//         name="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="border border-gray-400 bg-white h-10 px-5 pr-16  rounded-sm text-sm focus:outline-none"
//       />
//       </div>
//       <div className="flex flex-col">
//       <label className="mb-2 font-bold dark:text-gray-100"
//       htmlFor="email">Correo electrónico</label>
//       <input
//         type="email"
//         name="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="border border-gray-400 bg-white h-10 px-5 pr-16  rounded-sm text-sm focus:outline-none"
//       />
//       </div>
//       <div className="flex flex-col">
//       <label className="mb-2 font-bold dark:text-gray-100"
//       htmlFor="subject">Asunto</label>
//       <select
//         name="subject"
//         value={subject}
//         onChange={(e) => setSubject(e.target.value)}
//         className="mb-2"
//       >
//         <option value="Adopciones">Adopciones</option>
//         <option value="Apadrinamiento">Apadrinamiento</option>
//         <option value="Compras">Compras</option>
//         <option value="Donaciones">Donaciones</option>
//         <option value="Otros">Otros</option>
//       </select>
//       </div>
//       <div className="flex flex-col">
//       <label className="mb-2 font-bold dark:text-gray-100"
//       htmlFor="message">Mensaje</label>
//       <textarea
//         name="message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="border border-gray-400 bg-white h-40 px-5 pr-16 rounded-sm text-sm focus:outline-none"

//       ></textarea>
//       </div>
//       <input type="hidden" name="_captcha" value="false"></input>
//       <button className="ml-2 px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 "
//       type="submit">Enviar</button>
//     </form>
//     </div>
//   );
// }

// export default Contacto;

