import React from 'react';
import { Link } from "react-router-dom";

const SingleProducts = ({ Name, Img, Price, Type, Des, id, HandleDelete, HandleDeleteAll }) => {
    console.log();
    return (
        <div class={`${!Name && 'hidden'} card w-96 bg-base-100 shadow-xl border border-gray-600`}>
            <figure><img src={Img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    <span className='text-base' > Name: {Name}</span>
                    <div class={`badge max-w-[160px] ${Type === 'Sour' ? 'badge-success' : 'badge-secondary'}`}>Test {Type} </div>
                </h2>
                <div className='' >Price: {Price}$ Per KG </div>
                <p>{Des}</p>
                <div class="card-actions flex-row">

                    <button className='btn btn-error text-xs py-2 p-2 ' onClick={() => HandleDeleteAll(Type)} >Delete Category </button>
                    <button className='btn btn-warning text-xs py-2 p-2 ' onClick={() => HandleDelete(id)} >Delete </button>
                    <Link to={`/updatePro/${id}`} class=" btn text-xs py-2 p-2 ">Update Fruit</Link>

                </div>
            </div>
        </div>
    );
};

export default SingleProducts;