import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GETALL_ROUTE } from '../utils/constants';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [bookId, setBookId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`${GETALL_ROUTE}/${bookId}/delete`, {
        method: 'DELETE',
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert('Error deleting the book');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Profile Page</h1>
      <p className="text-lg mb-6">Welcome to your profile!</p>
      <div className="space-y-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => navigate('/books')}
        >
          List All Books
        </button>
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Enter Book ID" 
            value={bookId} 
            onChange={(e) => setBookId(e.target.value)} 
            className="px-4 py-2 border rounded"
          />
          <button 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            onClick={() => navigate(`/books/${bookId}`)}
          >
            Get One Book
          </button>
        </div>
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Enter Book ID" 
            value={bookId} 
            onChange={(e) => setBookId(e.target.value)} 
            className="px-4 py-2 border rounded"
          />
          <button 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={handleDelete}
          >
            Delete Book
          </button>
        </div>
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Enter Book ID" 
            value={bookId} 
            onChange={(e) => setBookId(e.target.value)} 
            className="px-4 py-2 border rounded"
          />
          <button 
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
            onClick={() => navigate(`/books/${bookId}/update`)}
          >
            Update Book
          </button>
        </div>
        <button 
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
          onClick={() => navigate('/add-book')}
        >
          Add Book
        </button>
        <div className="mt-4">
          <button 
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;