import React, { useState } from "react";

function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("Adopciones");

//   function sendEmail(e) {
//     e.preventDefault();
//     const emailBody = `Nombre: ${name}%0D%0AEmail: ${email}%0D%0AAsunto: ${subject}%0D%0AMensaje: ${message}`;
//     const emailUrl = `mailto:bastet@bastet.com?subject=Nuevo mensaje de contacto&body=${emailBody}`;

//     try {
//       window.open(emailUrl);
//       alert('¡El mensaje se envió correctamente!');
//     } catch (error) {
//       alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
//     }
//   }

  return (
    <div className="p-4 shadow-lg text-gray-700 bg-gray-200 max-w-fit m-auto min-h-fit dark:text-gray-100 dark:bg-gray-900 ">
      <h2 className="text-3xl dark:text-teal-400 font-bold mb-3">Contactate con nosotros</h2>
    <form action="https://formsubmit.co/bastet1872@gmail.com" method="POST">
        <div className="flex flex-col">
      <label className="mb-2 font-bold dark:text-gray-100"
      htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-400 bg-white h-10 px-5 pr-16  rounded-sm text-sm focus:outline-none"
      />
      </div>
      <div className="flex flex-col">
      <label className="mb-2 font-bold dark:text-gray-100"
      htmlFor="email">Correo electrónico</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-400 bg-white h-10 px-5 pr-16  rounded-sm text-sm focus:outline-none"
      />
      </div>
      <div className="flex flex-col">
      <label className="mb-2 font-bold dark:text-gray-100"
      htmlFor="subject">Asunto</label>
      <select
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="mb-2"
      >
        <option value="Adopciones">Adopciones</option>
        <option value="Apadrinamiento">Apadrinamiento</option>
        <option value="Compras">Compras</option>
        <option value="Donaciones">Donaciones</option>
        <option value="Otros">Otros</option>
      </select>
      </div>
      <div className="flex flex-col">
      <label className="mb-2 font-bold dark:text-gray-100"
      htmlFor="message">Mensaje</label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-gray-400 bg-white h-40 px-5 pr-16 rounded-sm text-sm focus:outline-none"

      ></textarea>
      </div>
      <input type="hidden" name="_captcha" value="false"></input>
      <button className="ml-2 px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 "
      type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default Contacto;
