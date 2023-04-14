import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth'
// import App from '../App';
import { app } from '../firebase/firebase.init';
import { MoonLoader } from 'react-spinners';
const Register = () => {
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(''); 
    const [success , setSuccess] = useState('');
    document.title = 'Register - FireBase'
    const auth = getAuth(app);
    const handelOnSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        if(!/(?=.*[A-Z])/.test(password) && !/(?=.*[!@#$&*])/.test(password) && !/(?=.*[0-9])/.test(password)){
            setError('Your password must be .. one uppercase , one special character and one number') ; 
            setLoading(false)
            return ; 
        }
       else if(!/(?=.*[A-Z])/.test(password) && !/(?=.*[!@#$&*])/.test(password)){
            setError('Your password must be .. one uppercase , one special character') ; 
            setLoading(false)
            return ; 
        }
       else if(!/(?=.*[A-Z])/.test(password)){
            setError('Your password must be .. one uppercase ') ; 
            setLoading(false)
            return ; 
        }
       else if(!/(?=.*[!@#$&*])/.test(password)){
            setError('Your password must be ..one special character ') ; 
            setLoading(false)
            return ; 
        }
       else if(!/(?=.*[0-9])/.test(password)){
            setError('Your password must be .. one number') ; 
            setLoading(false)
            return ; 
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user); 
                verifyEmail(user);
                setSuccess('Registration successfully . Next step is Please VERIFY YOUR EMAIL')
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message, err.code)
                setError(err.code)
                setLoading(false)
            })
    }
    const verifyEmail = (user)=> {
        sendEmailVerification(user)
        .then(result => {
            console.log(result) ; 
        })
        .catch(err => console.log(err))
    } 
    return (
        <div className='relative w-[60%] mx-auto'>
            <h1 className='text-3xl font-bold text-center '>Please Register </h1>
            {error && <p className='text-center my-3 text-2xl text-red-500'>Error :  {error}</p>}
            {success && <p className='text-center my-3 text-2xl text-green-600'>{success}</p>}
            <div className="flex justify-center mb-7 ">
                <form onSubmit={handelOnSubmit}>
                    <input required={true} className='focus:bg-slate-300 text-black border-[3px] rounded-xl border-blue-500 px-2 py-2' placeholder='Please type your name' type="text" name="fullName" />
                    <br />
                    <input className='focus:bg-slate-300 my-4 text-black border-[3px] rounded-xl border-blue-500 px-2 py-2' placeholder='You email' type="email" name="email" />
                    <br />
                    <input className='focus:bg-slate-300 text-black border-[3px] rounded-xl border-blue-500 px-2 py-2' placeholder='Your Password' type="password" name="password" />
                    <br />
                    <input type="submit" value="Register" className='px-4 py-2 mx-auto hover:cursor-pointer bg-blue-500 text-[20px] font-bold rounded-lg text-white mt-4' />
                </form>
            </div>
            {
                loading && <div className="absolute inset-0 z-30 bg-white flex justify-center items-center">
                    <div className="mx-auto">
                        <MoonLoader
                            color="#3B82F6"
                            size={70}
                        />
                    </div>
                </div>
            }

        </div>
    );
};

export default Register;