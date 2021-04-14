import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { starRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispath = useDispatch();
  const {msgError} = useSelector(state => state.ui);
  console.log(msgError);

  const [formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    confirm: '',

  })

  const {name, email, password, confirm} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if(isFormValid()){
      dispath(starRegisterWithEmailPasswordName(email, password, name))
    }
  }

  const isFormValid = () => {
    if(name.trim().length === 0){
      dispath(setError('El nombre es necesario'))
      return false;
    }else if(!validator.isEmail(email)){
      dispath(setError('El email no es válido'))
      return false;
    }else if(password !== confirm || password.length < 6 ){
      dispath(setError('La contraseña no coincide con la confirmación o tiene menos de 6 caracteres'));
      return false;
    }
    dispath(removeError());
    return true;
    
  }

  return (
    <Fragment>
      <h3 className='auth__title mb-4'>Register</h3>
      <form
        onSubmit={handleRegister}
      >
        { msgError &&
          <div className='auth__alert-error'>{msgError}</div>
        }
        <input
          className='auth__input'
          type='text'
          placeholder='name'
          name='name'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
          ></input>
        <input
          className='auth__input'
          type='email'
          placeholder='email'
          name='email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
          ></input>
        <input
          className='auth__input'
          type='password'
          placeholder='Password'
          name='password'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
          ></input>
        <input
          className='auth__input'
          type='password'
          placeholder='Confirm password'
          name='confirm'
          autoComplete='off'
          value={confirm}
          onChange={handleInputChange}
          ></input>

        <button
          type='submit'
          className='btn btn-primary btn-block mb-4 mt-4'
          //disabled={true}
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
