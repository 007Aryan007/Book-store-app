import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
            <p className="text-lg mb-8">This is the home page of our application.</p>
            <div className="space-x-4">
                <button 
                    onClick={navigateToLogin} 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                    Login
                </button>
                <button 
                    onClick={navigateToSignup} 
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
                >
                    Signup
                </button>
            </div>
        </div>
    );
};

export default HomePage;