import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'beloved', id: 1},
        {title: 'dracula', id: 2},
        {title: 'frankenstein', id: 3}   
    ]);
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}


export default BookContextProvider;