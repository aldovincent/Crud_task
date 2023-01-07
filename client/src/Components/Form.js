import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Form() {

    const [menu, setMenu] = useState({})

    let navigate = useNavigate();

    const change = (event) => {
        var name = event.target.name
        var value = event.target.value
        setMenu({ ...menu, [name]: value })
    }
    console.log(menu)

    const sub = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2000/add/add-info', menu).then((res) => {
            console.log(res)
            navigate('/out')
        })
    }
    return (
        <>
            <form onSubmit={sub}>
                    <label for="empName">Emp Name:</label><br />
                    <input type="text" id="empName" name="empName" onChange={change} /><br />
                    <label for="email">Email:</label><br />
                    <input type="email" id="email" name="email" onChange={change} /><br />
                    <label for="mobile">Mobile:</label><br />
                    <input type="number" id="mobile" name="mobile" onChange={change} /><br />
                    <label for="location">Location:</label><br />
                    <input type="text" id="location" name="location" onChange={change} /><br />
                    <input type="submit" value="Submit" />
            </form>


             {/* <section className="h-100 h-custom" style={{ backgroundColor: '#8fc4b7' }}>
                <div className="container py-1 h-90">
                    <div className="row d-flex justify-content-center align-items-center h-70">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp" className="w-100" style={{ borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }} alt="Sample photo" />
                                <div className="card-body p-2 p-md-4">
                                    <h3 className="mb-2 pb-2 pb-md-0 mb-md-5 px-md-2">Employee Registration Form</h3>
                                    <form className="px-md-2" onSubmit={sub}   >
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example1q"  name="empName" onChange={change} className="form-control" />
                                            <label className="form-label" htmlFor="form3Example1q">Employee Name</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline datepicker">
                                                    <input type="text" className="form-control" name="email" onChange={change} id="exampleDatepicker1" />
                                                    <label htmlFor="exampleDatepicker1" className="form-label">E-mail</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <select className="select">
                                                    <option selected>Location</option>
                                                    <option value="chennai" name="location" onChange={change} >Chennai</option>
                                                    <option value="Bangalore" name="location"  onChange={change}>Bangalore</option>
                                                    <option value="Kochi" name="location" onChange={change}>Kochi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1w" name="mobile" onChange={change} className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example1w">Mobile number</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



         





        </>
    )
}
