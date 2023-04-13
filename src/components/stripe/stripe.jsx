import React, { useState } from "react";
import {loadStripe,} from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from "axios";

const stripePromise = loadStripe("pk_test_51Mw8EZKXctGo6PdRordVcWqK5Eb4jPlAgImQ2oQijGbhgqRuTLFipWxQNKEJ5cOpEW6OpjQzsMKbcOLLE4rkaRBc00NRHlsSSD") //conectar con stripe



const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',       //tipo de pago que estamos registrando
        card: elements.getElement(CardElement)  //es como un documentGetById
    });
    setLoading(true)

    if (!error){ //si no existe un error
        // console.log(paymentMethod)
        const {id} = paymentMethod; //le paso a la base de datos lo que tiene que guardar

        try {
            const {data} = await axios.post("https://proyectofinal-gg57.onrender.com/api/checkout",{
            id,
            // amount: valorFinal * 100,
        })

            console.log(data)

            elements.getElement(CardElement).clear(); //limpia la tarjeta
        } catch (error) {
            console.log(error);
        }

        setLoading(false)
    }
};


    return (
        <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
            <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
            <div class="w-full pt-1 pb-5">
            <div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <i class="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
        </div>
        <div class="mb-10">
            <h1 class="text-3xl font-extrabold text-gray-900 sm:text-2xl">Metodos de pago</h1>
        </div>
        <div class="mb-3 flex -mx-2">
        <div class="px-2">
            <label for="type1" class="flex items-center cursor-pointer">
                <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked/>
                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3" />
            </label>
            </div>
        </div>
        <div class="mb-3">
            <label class="font-bold sm:text-xl mb-2 ml-1">Nombre</label>
            <div>
                <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
        {/* producto de la compra */}
        <div class="mb-3">
        <label class="font-bold sm:text-xl mb-2 ml-1">Tarjeta</label>
        <CardElement className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"/>
        </div>
        <h3 className="font-bold sm:text-xl mb-2 ml-1 p-3">Precio:</h3>
        <button disabled={!stripe} className="bg-teal-500/80 hover:bg-teal-500/90 px-6 py-2 rounded-md text-white font-medium tracking-winder transition">
        {loading ? (
            <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
            </div>
        ) : (
          "Comprar"
        )}
        </button>
    </form>
    </div>
    </div>
    )
}


export default function PasarelaDePagos(){
    return(
        <Elements stripe={stripePromise}>
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div className="w-full md:w-1/2 lg:w-1/3">
        <CheckoutForm />
        </div>
        </div>
        </Elements>
    )
}
