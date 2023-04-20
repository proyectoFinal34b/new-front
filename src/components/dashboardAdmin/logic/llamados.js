import axios from "axios"

const users = async (setInfo)=>{
    const response = await axios.get("/user")
    setInfo(prevState=>({...prevState, users: response.data}))
  }
  const cats = async (setInfo) => {
    const response = await axios.get("/cat/")
    setInfo(prevState => ({...prevState, cats: response.data}))
  }
  const orders = async (setInfo) => {
    const response = await axios.get("/order/")
    setInfo(prevState => ({...prevState, orders: response.data}))
  }
  const products = async (setInfo) => {
    const response = await axios.get("/product")
    setInfo(prevState => ({...prevState, products:response.data}))  
  }

export default function llamados(setInfo){
    users(setInfo)
    cats(setInfo)
    orders(setInfo)
    products(setInfo)
}