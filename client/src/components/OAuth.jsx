import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import {useDispatch} from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hanndleGooleClick = async () => {

        try {

            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth , provider);
            
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name:result.user.displayName, email: result.user.email,
                    photo: result.user.photoURL}),

            }); 
            const data = await res.json();   
            dispatch(signInSuccess(app));  
            navigate('/');
             
        } catch (error) {
            console.log ('could not singin with google',error);
            
        }
    }; 
  return (
    
   <button onClick={hanndleGooleClick} type='button' className='bg-red-700  text-white p-3 rounded-lg
   uppercase hover:opacity-80 ' >Countinue With Google</button>

  )
};
