import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <Fragment>
      <h3 className='auth__title mb-4'>Register</h3>
      <form>
        <input
          className='auth__input'
          type='text'
          placeholder='name'
          name='name'
          autoComplete='off'
        ></input>
        <input
          className='auth__input'
          type='text'
          placeholder='email'
          name='email'
          autoComplete='off'
        ></input>
        <input
          className='auth__input'
          type='password'
          placeholder='Password'
          name='password'
          autoComplete='off'
        ></input>
        <input
          className='auth__input'
          type='confirm'
          placeholder='Confirm password'
          name='confirm'
          autoComplete='off'
        ></input>

        <button
          type='submit'
          className='btn btn-primary btn-block mb-4 mt-4'
          disabled={true}
        >Register</button>
      
        <Link 
          to='/auth/login' 
          className='link'
        >Already Registered?
        </Link>
      </form>
    </Fragment>
  )
}
