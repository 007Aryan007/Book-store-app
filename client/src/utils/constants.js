export const HOST = import.meta.env.VITE_SERVER_URL;

export const AUTH_ROUTES = "/api/auth";
export const SIGNUP_ROUTE = `${HOST}${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${HOST}${AUTH_ROUTES}/login`;

export const BOOK_ROUTES = "/api/books";
export const GETALL_ROUTE = `${HOST}${BOOK_ROUTES}/books`;
export const DELONE_ROUTE = `${HOST}${BOOK_ROUTES}/books/:id/delete`;
export const UPONE_ROUTE = `${HOST}${BOOK_ROUTES}/books/:id/update`;
export const ADDONE_ROUTE = `${HOST}${BOOK_ROUTES}/add-book`;