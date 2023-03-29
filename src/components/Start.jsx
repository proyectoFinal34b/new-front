import {Link} from 'react-router-dom'
import video from '../image/Video.mp4'
import img from '../image/Logo.png'
import './Start.css'


export default function Start() {
    return (
        <div className='wrapper'>
            <div className='div_logo'>
                <img src={img} className='img'/>
            </div>
            <p className='text'>Bienvenido a Bastet tu lugar en la red!</p>
            <Link to='/home'><button className='custom-btn btn-2'>HOME</button></Link>

            <video muted autoPlay loop ><source src={video} type='Video/mp4'/></video>
            <div className='overlay'></div>
        </div>
    )
}