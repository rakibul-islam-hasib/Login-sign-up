import React from 'react';
import { app } from '../firebase/firebase.init';
import {getAuth} from 'firebase/auth'
const Login = () => {
    document.title = 'Login - FireBase'
    const auth = getAuth(app)
    const handelSubmit = e =>{
        e.preventDefault(); 
        const email = e.target.email.value ; 
        const password = e.target.password.value ; 
        // console.log('Email' , email , 'Password' , password )
        
    }
    return (
        <section>
            <form onSubmit={handelSubmit} className="max-w-md mx-auto mt-4 p-4 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email </label>
                    <input type="email" name="email"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Login;