import React from "react";
import {loadStripe,} from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from "axios";

const stripePromise = loadStripe("pk_test_51Mw8EZKXctGo6PdRordVcWqK5Eb4jPlAgImQ2oQijGbhgqRuTLFipWxQNKEJ5cOpEW6OpjQzsMKbcOLLE4rkaRBc00NRHlsSSD") //conectar con stripe



const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
    e.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',       //tipo de pago que estamos registrando
        card: elements.getElement(CardElement)  //es como un documentGetById
    });

    if (!error){ //si no existe un error
        // console.log(paymentMethod)
        const {id} = paymentMethod; //le paso a la base de datos lo que tiene que guardar

        const {data} = await axios.post("https://proyectofinal-gg57.onrender.com/api/checkout",{
            id,
            // amount: valorFinal * 100,
        })

        console.log(data)

        elements.getElement(CardElement).clear(); //limpia la tarjeta
    }
};


    return (
        <form onSubmit={handleSubmit}>
        {/* producto de la compra */}
        <h3>Precio:</h3>
        <CardElement/>
        <button>
            Comprar
        </button>
    </form>
    )
}


export default function PasarelaDePagos(){
    return(
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
    )
}