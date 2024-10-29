import React from 'react';
import { GETALL_ROUTE } from '../utils/constants';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BookDetailPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`${GETALL_ROUTE}/${id}`, {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBook(data.data.book);
            } catch (error) {
                console.error('Error fetching the book details:', error);
                setError('The book you are trying to delete does not exist.');
            }
        };

        fetchBook();
    }, [id]);

    if (error) {
        return <div className="text-center text-[40px]">{error}</div>;
    }

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
            <h2 className=" text-xl text-gray-700">by {book.author}</h2>
            <p className="text-gray-500">Published Year: {book.publishYear}</p>
            <p className=" text-gray-500">Price: ${book.price}</p>
            <p className=" text-gray-500">Genre: {book.genre}</p>
            <p className=" text-gray-400">Created At: {new Date(book.createdAt).toLocaleString()}</p>
            <p className=" text-gray-400">Updated At: {new Date(book.updatedAt).toLocaleString()}</p>
        </div>
    );
};

export default BookDetailPage;