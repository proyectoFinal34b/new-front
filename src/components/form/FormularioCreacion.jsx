// // import {useState, useEffect} from 'react'
// // import {useParams} from 'react-router-dom'
// import './Form.css'
// // import Card from '../Home/Cards/Card'
// import {useSelector} from 'react-redux'
// import { useState } from 'react'
// import axios from 'axios'




// export default function CreateForm() {
//     const temperaments = useSelector(store => store.allTemperaments)
//     const [dog, setDog] = useState({
//         name: '',
//         height: [],
//         weight: [],
//         lifetime: [],
//         image: 'https://cdn.icon-icons.com/icons2/2070/PNG/512/dog_icon_125586.png',
//         temperament: []
//     })
//     const [displayTemp, setDisplatTemp] = useState([])
//     const [alertDisplay, setAlertDisplay] = useState(false)
//     const [errors, setErrors] = useState({name:'',weight:'',height:'',lifetime:'',image:''})

//     const dogToPost = {
//         name: dog.name,
//         height: dog.height.join(' - '),
//         weight: dog.weight.join(' - '),
//         lifetime: dog.lifetime.join(' - '),
//         image: dog.image,
//         temperament: dog.temperament
//     }

//     const nameHandler = (name) => {
//         if(name.length >= 30) return
//         setDog({...dog, name: name})
//     }

//     const minWeightHandler = (min) => {
//         if(min.length > 2) return
//         if(Number(min) >= Number(dog.weight[1])) setDog({...dog, weight:[dog.weight[1] - 1,dog.weight[1]] })
//         else setDog({...dog, weight:[min,dog.weight[1]] })
//     }

//     const maxWeightHandler = (max) => {
//         if(max.length > 2) return
//         setDog({...dog, weight:[dog.weight[0],max] })
//         if(Number(dog.weight[0])>= Number(max)) setDog({...dog, weight:[max - 1,max] })
        
//     }

//     const minHeightHandler = (min) => {
//         if(min.length > 3) return
//         if(Number(min) >= Number(dog.height[1])) setDog({...dog, height:[dog.height[1] - 1,dog.height[1]] })
//         else setDog({...dog, height:[min,dog.height[1]] })
//     }

//     const maxHeightHandler = (max) => {
//         if(max.length > 3) return
//         setDog({...dog, height:[dog.height[0],max] })
//         if(Number(dog.height[0])>= Number(max)) setDog({...dog, height:[max - 1,max] })
//     }

//     const minLifetimeHandler = (min) => { 
//         if(min.length > 2) return
//         if(Number(min) >= Number(dog.lifetime[1])) setDog({...dog, lifetime:[dog.lifetime[1] - 1,dog.lifetime[1]] })
//         else setDog({...dog, lifetime:[min,dog.lifetime[1]] })
//     }

//     const maxLifetimeHandler = (max) => {
//         if(max.length > 2) return
//         setDog({...dog, lifetime:[dog.lifetime[0],max] })
//         if(Number(dog.lifetime[0])>= Number(max)) setDog({...dog, lifetime:[max - 1,max] })
//     }

//     const imageHandler = (img) => {
//         setDog({...dog, image:img})
//     }

//     const temperamentsHandler = (id,name) => {
//         if(dog.temperament.includes(id)) return
//         if(dog.temperament.length >= 9) return
//         setDog({...dog, temperament:[...dog.temperament,id]})
//         setDisplatTemp([...displayTemp, name])
//     }

//     const postDog = async () => {
//         const error = {name:'',weight:'',height:'',lifetime:'',image:''}
//         if(dog.name.length < 4) error.name = 'The name must contain at least 4 characters'
//         else if(!/^[a-zA-Z]+$/.test(dog.name)) error.name = 'The name must contain only alphabetic characters'
//         else error.name = ''
//         if(dog.weight[0] < 1 || dog.weight[1] < 1) error.weight = 'The weight can not be 0 or lower'
//         if(!dog.weight[0] || !dog.weight[1]) error.weight = 'The weight can not be 0 or lower'
//         else error.weight = ''
//         if(dog.height[0] < 1 || dog.height[1] < 1) error.height = 'The height can not be 0 or lower'
//         if(!dog.height[0] || !dog.height[1]) error.height = 'The height can not be 0 or lower'
//         else error.height = ''
//         if(dog.lifetime[0] < 1|| dog.lifetime[1] < 1) error.lifetime = 'The lifespan can not be 0 or lower'
//         if(!dog.lifetime[0] || !dog.lifetime[1]) error.lifetime = 'The lifespan can not be 0 or lower'
//         else error.lifetime = ''
//         if(dog.image.length > 255) error.image = 'The image URL length must be max. 255 characters'
//         setErrors(error)
//         setAlertDisplay(true)
//         if(!error.name && !error.weight && !error.height && !error.lifetime){
//             await axios.post('http://localhost:3001/dogs',dogToPost)
//         }
//     }

//     const deleteTemp = () => {
//         setDog({...dog, temperament:[]})
//         setDisplatTemp([])
//     }

//     const onClose = () => {
//         setAlertDisplay(false)
//     }

//     return (
//         <div className='background'>
//             <div className='form_containter'>
//                 <div>
//                     <div className='form_divs'>
//                         <p className='form_titles'>Name:</p>
//                         <input onChange={(e) => nameHandler(e.target.value)} value={dog.name} className='form_input' placeholder='Enter the dog name'/>
//                     </div>
//                     <div className='form_divs'>
//                         <p className='form_titles'>Weight:</p>
//                         <p className='form_minmax'>Min:</p><p className='form_minmax'>Max:</p> <br/>
//                         <input className='form_number' type='number' onChange={(e) => minWeightHandler(e.target.value)} value={dog.weight[0]} placeholder='Kg.'/>
//                         <input className='form_number' type='number' onChange={(e) => maxWeightHandler(e.target.value)} value={dog.weight[1]} placeholder='Kg.'/>
//                     </div>
//                     <div className='form_divs'>
//                         <p className='form_titles'>Height:</p>
//                         <p className='form_minmax'>Min:</p><p className='form_minmax'>Max:</p> <br/>
//                         <input className='form_number' type='number' onChange={(e) => minHeightHandler(e.target.value)} value={dog.height[0]} placeholder='Cm.'/>
//                         <input className='form_number' type='number' onChange={(e) => maxHeightHandler(e.target.value)} value={dog.height[1]} placeholder='Cm.'/>
//                     </div>
//                     <div className='form_divs'>
//                         <p className='form_titles'>Lifespan:</p>
//                         <p className='form_minmax'>Min:</p><p className='form_minmax'>Max:</p> <br/>
//                         <input className='form_number' type='number' onChange={(e) => minLifetimeHandler(e.target.value)} value={dog.lifetime[0]} />
//                         <input className='form_number' type='number' onChange={(e) => maxLifetimeHandler(e.target.value)} value={dog.lifetime[1]} />
//                     </div>
//                     <div className='form_divs'>
//                         <p>Image:</p>
//                         <input onChange={(e) => imageHandler(e.target.value)} className='form_input' placeholder='Enter the dog URL image'/>
//                     </div>
                    
//                 </div>
//                     <div>
                        
//                         <div className='temperaments_div'>
//                             <p className='form_titles'>Temperament:</p>
//                             {temperaments.map(t => <button className='temperament_e' onClick={() => temperamentsHandler(t.id,t.name)}>
//                                 {t.name}
//                             </button>   
//                             )}
//                         </div>
//                     </div>
//                     <div>
//                     <Card
//                         name={dog.name}
//                         image={dog.image}
//                         temperament={displayTemp}
//                         weight={dog.weight}
//                         /> 
//                         <div className='temperament_deleter'>
//                             <div className='deleter_container'>
//                                 {displayTemp.map((t) => {
//                                     return <span className='temperament_e'>{t}</span>
//                                 })}
//                             </div>
//                             <button onClick={() => deleteTemp()} className='delete_button'>Delete all temperaments</button>
//                         </div>
//                         <button onClick={() => postDog()} className='post_button'>Post Dog</button>
//                     </div>
//                     <div className={alertDisplay ? 'alert' : 'alert_inactive'} >
//                         <button onClick={() => onClose()} className='close_btn'>X</button>
//                         {errors.name ? <p className='error_alert'>{errors.name}</p> : null}
//                         {errors.weight ? <p className='error_alert'>{errors.weight}</p> : null}
//                         {errors.height ? <p className='error_alert'>{errors.height}</p> : null}
//                         {errors.lifetime ? <p className='error_alert'>{errors.lifetime}</p> : null}
//                         {errors.image ? <p className='error_alert'>{errors.image}</p> : null}
//                         {!errors.name && !errors.weight && !errors.height && !errors.lifetime && !errors.image ? <p className='post_alert'>The dog has been posted succesfully!</p>: null}
//                     </div>
//                     <div className={alertDisplay ? 'filtro' : 'alert_inactive'}></div>
//             </div>
//         </div>
//     )
// }