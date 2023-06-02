import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Chat</span>
            <div className='user'>
                <img src='https://images.pexels.com/photos/16756606/pexels-photo-16756606/free-photo-of-man-and-woman-together-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
                <span>Jon</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar