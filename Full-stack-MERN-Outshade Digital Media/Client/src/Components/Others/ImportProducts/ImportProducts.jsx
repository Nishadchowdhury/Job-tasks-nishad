import React from 'react';
import { rootServer } from '../../Hooks/CommonLinks';

const ImportProducts = () => {

    const importPro = async e => {
        e.preventDefault();
        const url = `${rootServer}/addPro`

        const newPro = {
            Name: e.target.proName.value,
            Img: e.target.proImg.value || "https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=996&t=st=1658413589~exp=1658414189~hmac=345c185e687d2204d1e156594d764d549e6db3b8f71eca632b045b3b1ff01170",
            Price: e.target.proPrice.value,
            Type: e.target.proType.value,
            Des: e.target.proDes.value,
        }

        await fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPro)
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                window.alert(`import has been completed ${newPro.Name}`)
                e.target.reset();
            })

    }

    return (
        <div className='w-[60%] mx-auto border border-stone-500 mt-5 rounded-xl '>
            <form onSubmit={importPro}>
                <div class="card-body">

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Fruit Name</span>
                        </label>
                        <input required type="text" name='proName' placeholder="Name" class="input h-9 input-bordered" />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Picture Link</span>
                        </label>
                        <input type="url" name='proImg' placeholder="Image Link" class="input h-9 input-bordered" />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Price Per KG</span>
                        </label>
                        <input required type="Number" name='proPrice' placeholder="Price" class="input h-9 input-bordered" />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Select the taste</span>
                        </label>

                        <select required name='proType' class="select select-bordered w-full ">
                            <option disabled selected>Select Sour or Sweet ?</option>
                            <option>Sour</option>
                            <option>Sweet</option>
                        </select>
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">fruit Description</span>
                        </label>
                        <textarea required name="proDes" class="textarea textarea-bordered max-h-52" placeholder="Type about the fruit."></textarea>

                    </div>

                    <div class="form-control mt-6">
                        <button class="btn btn-success"><input className=' p-2' type="submit" value="Import" /></button>

                    </div>
                </div>
            </form>
        </div>

    );
};

export default ImportProducts;