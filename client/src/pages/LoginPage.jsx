import React, { useState } from 'react';
import { LOGIN_ROUTE } from "../utils/constants";
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
    };

    const navigateToSignup = () => {
        navigate('/signup');
    };

    const handleLogin = async () => {
        if (!username || !password) {
            alert('Please fill in both fields');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(LOGIN_ROUTE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || 'Login failed');
                setLoading(false);
                return;
            }

            const data = await response.json();
            if (response.status === 200) {
                localStorage.setItem('authToken', data.token);
                setIsAuthenticated(true);
                navigateToProfile();
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                    onClick={handleLogin}
                    className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <button
                    onClick={navigateToSignup}
                    className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600 mt-4"
                >
                    Go to Signup page
                </button>
            </div>
        </div>
    );
};

export default LoginPage;