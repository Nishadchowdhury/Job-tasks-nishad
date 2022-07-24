import React, { useEffect, useState } from 'react';
import { rootServer } from '../Hooks/CommonLinks';
import SingleProducts from './SingleProducts';


const Home = () => {
    const [allPros, setAllPros] = useState([]);

    const [categoryPro, setCategoryPro] = useState('');

    useEffect(() => {
        if (categoryPro === 'Sour') {
            const url = `${rootServer}/allData/Sour`
            fetch(url).then(res => res.json()).then(data => setAllPros(data))

        } else if (categoryPro === 'Sweet') {
            const url = `${rootServer}/allData/Sweet`
            fetch(url).then(res => res.json()).then(data => setAllPros(data))

        } else {
            const url = `${rootServer}/allData`
            fetch(url).then(res => res.json()).then(data => setAllPros(data))
        }
    }, [categoryPro]);

    console.log(allPros);

    const HandleDelete = e => {
        console.log(e);
        const url = (`${rootServer}/deletePro/${e}`)
        const proceed = window.confirm("are you sure ?");

        if (proceed) {
            fetch(url, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }

    const HandleDeleteAll = e => {
        console.log(e);


        const url = (`${rootServer}/deleteProAll/${e}`)
        const proceed = window.confirm(`Delete All ${e} category?`);

        if (proceed) {
            fetch(url, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }

    return (
        <>
            <div className=' mt-6'>
                <h1 className="text-center my-4">Types of category.</h1>
                <div className='flex gap-3 justify-center'>

                    <button disabled={categoryPro === 'Sweet'} onClick={() => setCategoryPro('Sweet')} className='btn btn-secondary '>Sweet</button>
                    <button disabled={categoryPro === 'Sour'} onClick={() => setCategoryPro('Sour')} className='btn btn-success'>Sour</button>
                    <button disabled={categoryPro === ''} onClick={() => setCategoryPro('')} className='btn btn-circle outline outline-red-500'> X </button>
                </div>
            </div>
            <div className='grid grid-cols-3  px-16 justify-between mx-auto mt-10 w-[90%]' >

                {
                    allPros?.map((data) =>
                        <SingleProducts key={data._id}
                            Name={data.Name} Img={data.Img} Price={data.Price} Type={data.Type} Des={data.Des} id={data._id}
                            HandleDelete={HandleDelete} HandleDeleteAll={HandleDeleteAll}
                        >
                        </SingleProducts>)
                }
            </div>

        </>
    );
};

export default Home;