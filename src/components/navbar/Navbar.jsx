import React from 'react'

const Navbar = () => {
    return(
        <div className='w-full h-[90px] bg-black'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between'>
                <div>
                    <h1 className='text-[#00d8ff]'>TITULO</h1>
                </div>
                <div>
                    <ul>
                        <li>COSA 1</li>
                        <li>COSA 2</li>
                        <li>COSA 3</li>
                        <li>COSA 4</li>
                    </ul>
                </div>
                <button>Login</button>
            </div>

        </div>
    )
}

export default Navbar;