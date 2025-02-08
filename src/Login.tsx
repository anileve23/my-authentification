import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import HeroImage from './assets/hero.webp';
import background from './assets/banner-bg.png';

const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signInWithGoogle = async () => {
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setAuthing(false);
            });
    };

    const signInWithEmail = async () => {
        setAuthing(true);
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setAuthing(false);
            });
    };

    return (
        <div className='w-full h-screen flex flex-col md:flex-row'>
            <div 
                className='w-full md:w-1/2 h-[250px] md:h-full flex items-center justify-center bg-cover bg-center' 
                style={{ backgroundImage: `url(${background})` }}
            >
                <img src={HeroImage} alt="Login Visual" className='w-3/4 max-w-[250px] md:w-1/2 md:max-w-none object-contain' />
            </div>
            <div className='w-full md:w-1/2 flex flex-col p-6 md:p-14 bg-[#1a1a1a] text-white justify-center'>
                <div className='w-full max-w-[400px] mx-auto'>
                    <h3 className='text-2xl md:text-4xl font-bold mb-3 text-center md:text-left'>Login</h3>
                    <p className='text-sm md:text-lg mb-6 text-center md:text-left'>Welcome Back! Please enter your details.</p>

                    <div className='flex flex-col gap-4'>
                        <input
                            type='email'
                            placeholder='Email'
                            className='w-full py-3 px-4 bg-transparent border border-gray-500 focus:outline-none focus:border-white rounded-md'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            className='w-full py-3 px-4 bg-transparent border border-gray-500 focus:outline-none focus:border-white rounded-md'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <div className='text-red-500 mt-3'>{error}</div>}

                    <button
                        className='w-full mt-5 py-3 bg-white text-black font-semibold rounded-md text-center flex items-center justify-center cursor-pointer'
                        onClick={signInWithEmail}
                        disabled={authing}
                    >
                        Log In With Email
                    </button>

                    <div className='flex items-center justify-center my-5'>
                        <div className='w-full h-[1px] bg-gray-500'></div>
                        <p className='px-3 text-gray-400 text-sm'>OR</p>
                        <div className='w-full h-[1px] bg-gray-500'></div>
                    </div>

                    <button
                        className='w-full py-3 bg-gray-700 text-white font-semibold rounded-md text-center flex items-center justify-center cursor-pointer'
                        onClick={signInWithGoogle}
                        disabled={authing}
                    >
                        Log In With Google
                    </button>

                    <p className='text-center text-gray-400 text-sm mt-6'>
                        Don't have an account? 
                        <a href='/my-authentification/#/signup' className='text-white font-semibold underline ml-1'>Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;