import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { rootServer } from '../../Hooks/CommonLinks';

const UpdateProDet = () => {

    const id = useParams().id;
    const navigate = useNavigate();


    const updateUserPass = e => {
        e.preventDefault();
        const price = e.target.newPrice.value;
        const Type = e.target.proType.value;


        const newPrice = { Price: price }
        const newType = { Type: Type }

        if (price === '' && Type === 'Select Sour or Sweet ?') {
            return window.alert('make some change before update.')
        }
        console.log(newPrice, newType);

        if (price) {
            const url = (`${rootServer}/updatePro/${id}`);
            axios.put(url, newPrice).then(res => {
                if (res.status === 200) {
                    window.alert('price is updated');
                    navigate('/');
                }
            })
        }

        if (Type !== 'Select Sour or Sweet ?') {
            const url = (`${rootServer}/updateProType/${id}`);
            axios.put(url, newType).then(res => {
                if (res.status === 200) {
                    window.alert(`Test is updated to ${Type} `);
                    navigate('/');
                }
            })
        }





    }

    return (
        <div>

            <div class="card  max-w-sm shadow-2xl bg-base-100 w-[600px] mx-auto mt-14 ">
                <h1 class="text-2xl text-center pt-2 w-auto font-bold">Update Details</h1>

                <div className=''>

                    <form onSubmit={updateUserPass}>
                        <div class="card-body">

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">New price</span>
                                </label>
                                <input type="number" name='newPrice' placeholder="New Price" class="input h-9 input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Update Test</span>
                                </label>

                                <select required name='proType' class="select select-bordered w-full ">
                                    <option disabled selected >Select Sour or Sweet ?</option>
                                    <option>Sour</option>
                                    <option>Sweet</option>
                                </select>
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-success"><input className=' p-2' type="submit" value="Update Now!" /></button>

                            </div>
                        </div>

                    </form>
                </div>


            </div>
        </div>
    );
};

export default UpdateProDet;