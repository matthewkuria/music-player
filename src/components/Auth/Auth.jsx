import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
const Auth = () => {
  const provider = new GoogleAuthProvider();
  const { user, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      login(result.user);
      console.log('You are successfully LoggedIn');
    } catch (error) {
      setLoginError('Email or password is incorrect');
      console.error('Email login error:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      login(result.user);
      console.log('Google login successful');
    } catch (error) {
      setLoginError('Google login failed');
      console.error('Google login error:', error.message);
    }
  };

  if (user) {
    const userId = user.uid;
    const redirectUrl = `/${userId}/player`;
    return <Navigate to={redirectUrl} />;
  }

  return (
    <main className=" h-full">
      <div className='login-container bg-white max-w-[400px] p-4 mx-auto shadow-slate-500 rounded-lg'>
        <h2 className='text-center text-gray mb-2 font-semibold'>Login</h2>
        {loginError && <p className="error-message text-red-600">{loginError}</p>}
        <form className='flex flex-col' onSubmit={handleEmailLogin}>
          <input className='w-full p-2 mb-4 border-2 outline-slate-400 ' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className='w-full p-2 mb-4 border-2 outline-slate-400 ' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className='bg-[#1da1f2] text-white p-2 rounded-lg hover:bg-[#0c89db]' type="submit">Login with Email</button>
        </form>

        <div className="mt-2 justify-center">
          <button className='bg-[#1da1f2] rounded-lg text-white p-1'  onClick={handleGoogleLogin}>Login with Google</button>
        </div>

        <p className='mt-4 text-center'>
          Don't have an account? <Link to="/signup" className='text-[#1da1f2] hover:underline'>Sign up here</Link>
        </p>
        <p className='mt-4 text-center'>
          <Link to="/forgotpassword" className='text-[#1da1f2] hover:underline'>Forgot your password? </Link>
        </p>
      </div>
    </main>
  );
};

export default Auth;