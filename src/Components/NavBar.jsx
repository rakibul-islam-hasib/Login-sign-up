import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='py-6'>
            <ul className='flex gap-5 justify-center'>
                <li className='text-2xl  font-bold'>
                    <NavLink className={({isActive}) => isActive ? 'text-green-600' : 'text-purple-500'} to='/'>
                        Home
                    </NavLink>
                </li>
                <li className='text-2xl  font-bold'>
                    <NavLink className={({isActive}) => isActive ? 'text-green-600' : 'text-purple-500'} to='/login'>
                        Login
                    </NavLink>
                </li>
                <li className='text-2xl  font-bold'>
                    <NavLink className={({isActive}) => isActive ? 'text-green-600' : 'text-purple-500'} to='/register'>
                        Register
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;