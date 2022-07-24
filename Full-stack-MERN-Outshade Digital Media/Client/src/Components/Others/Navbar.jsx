import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div class="navbar bg-base-100 border-b-2 border-blue-50">
            <div class="flex-1">
                <Link class="btn btn-ghost normal-case border-[1px] dark:border-slate-500 border-slate-200 text-xl" to='/' >Outshade Digital Media Inventory</Link>
            </div>

            <NavLink to={'import'} className={'btn btn-primary border border-primary mr-3'} > Import Products </NavLink>
            <span className='mr-2'>{user?.displayName}</span>
            <div class="flex-none">

                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full border-[1px] border-spacing-1 border-slate-400">
                            <img className={user?.auth.photoURL ? '' : 'scale-75'} src={user?.auth.photoURL ? user?.auth.photoURL : 'https://i.ibb.co/NZGnqZK/user-not-found.webp'} alt='user Auth' />
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {user && <li><Link to="/update">Update Profile</Link></li>}
                        <li>{user ? <button onClick={() => signOut(auth)} >Logout</button> : <Link to="/login" > Log in </Link>}</li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;