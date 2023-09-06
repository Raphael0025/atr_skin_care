import React from 'react'
import { Link } from 'react-router-dom'

const UserRegistration = () => {
    return (
        <main className='backgroundLogin container-fluid d-flex p-5 m-0 vh-100'>
            <section className='container d-flex justify-content-center align-items-center mt-5 px-5'>
                <div className='p-5 text-light rounded-5 background-form col-5 '>
                    <div className='d-flex'>
                        <h3 className='p-2 border-bottom border-3 border-warning'><strong>Register Account</strong></h3>
                    </div>
                    <form>
                        {/* First & Last Name*/}
                        <div role='group' className='d-flex gap-3'>
                            <div className='d-flex flex-column w-50'>
                                <label htmlFor='fName'>User Name</label>
                                <input type='text' className='p-2 rounded-3' id='fName' placeholder='User Name' required />
                            </div>
                            <div className='d-flex flex-column w-50'>
                                <label htmlFor='lName'>Last Name</label>
                                <input type='text' className='p-2 rounded-3' id='lName' placeholder='Last Name' required />
                            </div>
                        </div>
                        {/* Age & Birth Date*/}
                        <div role='group' className='d-flex gap-3 mt-2'>
                            <div className='d-flex flex-column w-50'>
                                <label htmlFor='age'>Age</label>
                                <input type='number' min='12' max='100' className='p-2 rounded-3' id='age' placeholder='Age' required />
                            </div>
                            <div className='d-flex flex-column w-50'>
                                <label htmlFor='bdate'>Birth Date</label>
                                <input type='date' className='p-2 rounded-3' id='bdate' placeholder='Birth Date' required />
                            </div>
                        </div>
                        {/* Gender & Mobile Number*/}
                        <div role='group' className='d-flex gap-3 mt-2'>
                            <div className='d-flex flex-column w-50 justify-content-end'>
                                <select defaultValue='' className='p-2 dropdown rounded-3 border-warning' name="gender" id="gender">
                                    <option value='' disabled>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className='d-flex flex-column w-50'>
                                <label htmlFor='phone'>Mobile Phone</label>
                                <input type='tel' pattern="[0-9]{10}" className='p-2 rounded-3' id='phone' placeholder='Mobile Phone' required />
                            </div>
                        </div>
                        {/* Email & Password*/}
                        <div role='group' className='d-flex gap-3 mt-2'>
                            <div className='d-flex flex-column w-50'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' className='p-2 rounded-3' id='email' placeholder='Email' required />
                            </div>
                            <div className='d-flex flex-column w-50'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' className='p-2 rounded-3' id='password' placeholder='Password' required />
                            </div>
                        </div>

                        <div className='d-flex justify-content-end p-0 pt-2 mt-2 container'>
                            <button className='btn btn-outline-warning px-4'><strong>Create Account</strong></button>
                        </div>
                        <div className='d-flex align-items-center justify-content-start p-0 container'>
                            <span className='txt'>Already have an account?</span>
                            <Link to='/auth/user-login' className='text-warning text-decoration-none'><span className='txt ms-2 lnk'>Sign In here</span></Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default UserRegistration