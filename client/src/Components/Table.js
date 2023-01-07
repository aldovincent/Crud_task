import React, { useEffect, useState } from 'react'

import axios from 'axios'


export default function Table() {

    const [first, setfirst] = useState([])

    useEffect(() => {
        axios.get('http://localhost:2000/view/view-info').then((res) => {
            console.log(res.data.data);
            setfirst(res.data.data)
        })

    }, [])

    const del =()=>{

    }



    return (
        <>
            <table>
                <tr>
                    <th>Emp Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Location</th>
                    
                </tr>
                {first.map((obj) => (
                    <tr>
                        <td>{obj?.empName}</td>
                        <td>{obj?.email}</td>
                        <td>{obj?.mobile}</td>
                        <td>{obj?.location}</td>
                        <button className='btn btn-outline-dark' onClick={del}>Delete</button>
                    </tr>
                ))}
            </table>

        </>
    )
}
