import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const [create, setCreate] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [user] = useAuthState(auth)

    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    if (user?.email) {
        navigate(from, { replace: true });
    }

    const [sendPasswordResetEmail,
        // sending,
        // errorReset
    ] = useSendPasswordResetEmail(auth);
    const [
        createUserWithEmailAndPassword,
        // userCreated,
        // loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword,
        // user,
        // loadingLogin,
        // errorLogin,
    ] = useSignInWithEmailAndPassword(auth);

    const [updateProfile,
        // updating, 
        // errorUpdate
    ] = useUpdateProfile(auth);


    const signIn = async e => {
        e.preventDefault();

        await createUserWithEmailAndPassword(e.target.email.value, e.target.password.value);

        await updateProfile({ displayName: e.target.name.value });

        console.log(auth);

    }

    const logIn = async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(e.target.email.value, e.target.password.value);

    }

    const forgetPass = async e => {
        try {
            await sendPasswordResetEmail(email)
        } catch (error) {
            console.log(error);
        }

        if (!email) {
            return window.alert('provide a valid Email');
        }
        window.alert(`Reset Email send in ${email}`);

    }

    return (
        <>

            <div class="hero min-h-screen bg-base-200 mx-auto ">

                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card  max-w-sm shadow-2xl bg-base-100 w-[600px] ">
                        <h1 class="text-2xl text-center pt-2 w-auto font-bold">{create ? 'Create Account' : "Login now!"}</h1>
                        {
                            create ?
                                <div className=''>
                                    <form onSubmit={signIn}>
                                        <div class="card-body">

                                            <div class="form-control">
                                                <label class="label">
                                                    <span class="label-text">Name</span>
                                                </label>
                                                <input type="text" name='name' placeholder="name" class="input h-9 input-bordered" />
                                            </div>

                                            <div class="form-control">
                                                <label class="label">
                                                    <span class="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' placeholder="email" class="input h-9 input-bordered" />
                                            </div>
                                            <div class="form-control">
                                                <label class="label">
                                                    <span class="label-text">Password</span>
                                                </label>
                                                <input type="text" name='password' placeholder="password" class="input h-9 input-bordered" />

                                            </div>

                                            <div class="form-control mt-6">
                                                <button class="btn btn-success"><input className=' p-2' type="submit" value="Sign In" /></button>
                                                <button onClick={() => setCreate(!create)} class="btn btn-primary mt-3">Login Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>


                                :
                                <div>
                                    <form onSubmit={logIn}>
                                        <div class="card-body">
                                            <div class="form-control">
                                                <label class="label">
                                                    <span class="label-text">Email</span>
                                                </label>
                                                <input onBlur={e => setEmail(e.target.value)} type="email" name='email' placeholder="email" class="input input-bordered" />
                                            </div>
                                            <div class="form-control">
                                                <label class="label">
                                                    <span class="label-text">Password</span>
                                                </label>
                                                <input type="password" name='password' placeholder="password" class="input input-bordered" />
                                                <label class="label">
                                                    <button className='hover:underline' type='button' onClick={forgetPass}> Forget Password?</button>
                                                </label>
                                            </div>
                                            <div class="form-control mt-6">
                                                <button class="btn btn-success"><input className='p-2' type="submit" value="Login" /></button>
                                                <button onClick={() => setCreate(!create)} type='button' class="btn btn-primary mt-3">Create Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;