
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Signup() {
    const [name, setName]= useState()
    const [email, setEmail]= useState()
    const [password, setPassword]= useState()
    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result => {console.log(result)
         navigate('/home')
        })
        .catch(err => console.log(err))
    }

  return (
     <div className='d-flex justify-content-center align-item-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25 h-75 mt-5'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Name</strong>
                </label>
                <input 
                type='text'
                placeholder='Enter Name'
                autoComplete='off'
                name='email'
                onChange={(e)=>setName(e.target.value)}
                className='form-control rounded-0'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input 
                type='email'
                placeholder='Enter email'
                autoComplete='off'
                name='email'
                onChange={(e)=>setEmail(e.target.value)}
                className='form-control rounded-0'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Password</strong>
                </label>
                <input 
                type='password'
                placeholder='Enter Password'
                autoComplete='off'
                name='password'
                onChange={(e)=>setPassword(e.target.value)}
                className='form-control rounded-0'
                />
            </div>
            
            <button type='submit' className='btn btn-success w-100 rounded-0'>
                Register
            </button>
            </form>
            <p>Already have an account?</p>
            <Link to='/login' className='btn btn-default w-100 bg-light rounded-0 text-decoration-none'>
                Login
            </Link>

       
      </div>
    </div>
  )
}

export default Signup
