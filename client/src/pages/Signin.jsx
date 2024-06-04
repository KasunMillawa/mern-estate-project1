import { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom';

export default function SignIn() {
  const [formData , setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChance = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,

    });

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      setLoading( true);
    const res = await fetch('/api/auth/signin', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
      },
      body: JSON.stringify(formData),
    }

    );
    const data = await res.json();
    console.log(data);
    if(data.success === false) {
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/');

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
    
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign in</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
     
      <input type="emai" placeholder='email'
       className='border p-3 rounded-lg' id='email'onChange={handleChance} />

      <input type="password" placeholder='password'
       className='border p-3 rounded-lg' id='password' onChange={handleChance}/>

      <button disabled = {loading} className='bg bg-slate-700 text-white p-3 rounded-lg
       uppercase hover:opacity-95 disabled:opacity-70'>
        {loading ? 'Loading...' : 'sign in'}
       </button>

      </form>

      <div className='flex gap-1 mt-3'>
        <p>If dont have an account ?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>sign up </span>
        
        </Link>
      </div>
        {error && <p className='text-red-400 mt-5'>{error}</p>}
    </div>
  );
}
