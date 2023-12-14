import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>LogIn</h2>
                <span>Login and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <button className='btn'><Link to='/'></Link>LogIn</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
export default Form;