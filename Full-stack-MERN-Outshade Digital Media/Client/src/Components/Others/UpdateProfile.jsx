import React, { useState } from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
    const [pass, setPass] = useState(false);
    const navigate = useNavigate();

    const updateUserProfile = async e => {
        e.preventDefault();
        console.log();
        await updateProfile({ displayName: e.target.name.value })

        const reload = window.confirm('reload to see newName');
        if (reload) {
            navigate('/');
            window.location.reload(true);
        } else {
            navigate('/');

        }
        console.log(errorUpdate);
    }
    const [updatePassword, updatingPass, error] = useUpdatePassword(auth);


    const updateUserPass = async e => {
        e.preventDefault();
        const pass = {
            old: e.target.password.value,
            new: e.target.NewPassword.value
        }

        if (pass.old === pass.new) {
            return window.alert('old and new pass are the same.')
        } else {
            await updatePassword(pass.new);
            console.log(error);
        }
        console.log(pass.old, pass.new);
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200 mx-auto ">

                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card  max-w-sm shadow-2xl bg-base-100 w-[600px] ">
                        <h1 class="text-2xl text-center pt-2 w-auto font-bold">Update Your {pass ? <button className='text-info btn border-[1px] border-cyan-600' onClick={() => setPass(!pass)} type='button' > Password </button> : <button className='text-info btn border-[1px] border-cyan-600' onClick={() => setPass(!pass)} type='button' > Name </button>} </h1>

                        <div className=''>
                            {!pass ? <form onSubmit={updateUserProfile}>
                                <div class="card-body">

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Name</span>
                                        </label>
                                        <input required type="text" name='name' placeholder="name" class="input h-9 input-bordered" />
                                    </div>

                                    <div class="form-control mt-6">
                                        <button disabled={updating} class="btn btn-success"><input className=' p-2' type="submit" value="Update Now!" /></button>

                                    </div>
                                </div>
                            </form>
                                :
                                <form onSubmit={updateUserPass}>
                                    <div class="card-body">

                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">Old Password</span>
                                            </label>
                                            <input required type="password" name='password' placeholder="Password" class="input h-9 input-bordered" />
                                        </div>

                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">New Password</span>
                                            </label>
                                            <input required type="password" name='NewPassword' placeholder="Password" class="input h-9 input-bordered" />
                                        </div>

                                        <div class="form-control mt-6">
                                            <button disabled={updatingPass} class="btn btn-success"><input className=' p-2' type="submit" value="Update Now!" /></button>

                                        </div>
                                    </div>
                                </form>}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;