import React, { useEffect, useState } from 'react';
import { GETALL_ROUTE } from '../utils/constants';

const BookListPage = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(GETALL_ROUTE, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setError(errorData.message || 'Failed to fetch books');
                    return;
                }

                const data = await response.json();

                setBooks(data.data.books || []);
            } catch (error) {
                console.error('Error fetching books:', error);
                setError('An error occurred. Please try again.');
            }
        };

        fetchBooks();
    }, []);

    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Book List</h1>
            {error && <p className="text-red-500">{error}</p>}
            {books.length === 0 ? (
                <p className="text-gray-500">No books available</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {books.map((book) => (
                        <div key={book._id} className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300">
                            <h2 className="font-semibold text-xl mb-2">{book.title}</h2>
                            <p className="text-gray-700 mb-2">by {book.author}</p>
                            <p className="text-green-600">${book.price}</p>
                            <p className="text-gray-500">ID: {book._id}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookListPage;
