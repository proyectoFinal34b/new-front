const express = require('express')
const Stripe = require('stripe')

const app = express()

app.use(express.json())

const stripe = new stripe("sk_test_51Mw8EZKXctGo6PdRT0FtzwVMJ6uTisOodOgzqE6ePiJQwK9uEYzmul2a8nC1J7VrjasnsHwxNUOhAMJioHG2sgGz00oMZS2UgG")    //pasar a variable de entorno


app.post('/api/checkout', async (req, res) =>{

    try{
        const {id, amount} = req.body
    
    const payment = await stripe.paymentIntents.create({ //actualiza el estado para poder confirmarlo
        amount,
        currency: "USD",  //la moneda que lo recibimos
        description: "", //colocar el id del producto que este en la base de datos
        payment_method: id,
        confirm: true //esto confirma el pago automaticamente
    });      //registrar el pago


    console.log(payment);


    res.send({message: 'Pago realizado'});
    }catch (error) {
        console.log(error);
        res.json({message: error.raw.message}); //agregar algo dependiendo del interfaz
    }
})