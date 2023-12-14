import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';
import '../assets/Navbar.css'
function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name")} placeholder='Name' />
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("emailId")} placeholder='EmailId' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    
                    <button className='btn'><Link to='/login'></Link>Sign In</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
export default Register;