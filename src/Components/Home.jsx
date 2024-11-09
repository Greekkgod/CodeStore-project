import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home(props) {

    const [post, setPost] = useState([]);
    async function getData()
    {
            const d = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(d.data);
            setPost(d.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className='home'>
            <h1>Home</h1>
            <div className=''>
                {
                    post.map(p=>(
                        <>
                            <h1>{p.title}</h1>
                            <p>{p.body}</p>
                        </>
                    ))
                }
            </div>
        </div>
        
    );
}

export default Home;