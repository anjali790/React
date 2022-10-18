import React, { useEffect, useState } from 'react';
import './Books.css';
import axios from 'axios';

export function BookList(props) {
  // const [books, setBooks] = useState([]);
  const [filterBooks, setFilterBooks] = useState([]);
  // const [search, setSearch] = useState("");
// console.log(props.search)
  useEffect(() => {
    // console.log(props.search)
    axios.get('https://example-data.draftbit.com/books?_limit=50').then(resp => {
      console.log(resp.data);
      // setBooks(resp.data);
      let filteredBook = resp.data;
      if (props.search) {
        filteredBook = resp.data.filter((datas) => {
          if (datas.title) {
            return datas.title.includes(props.search.toLowerCase());
          }
        });
      }

      setFilterBooks(filteredBook);
    }).catch(error => console.log(error));
  }, [props.search]);

  // useEffect(() => {
  //   const filteredBook = books.filter((datas) => {
  //     if (datas.title) {
  //       return datas.title.toLowerCase().includes(search.toLowerCase());
  //     }
  //   });
  //   setFilterBooks(filteredBook);
  //   console.log(filteredBook);
  // }, [search]);

  return (
    <>
      {/* <input className='inputBox' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="enter book here"></input> */}
      <div className='bookList'>
        {filterBooks.map((book) => (
          <div key={book.id} className='bookDiv'>
            <div><h2>{book.title}</h2></div>
            <div><img src={book.image_url} alt="" /></div>
            <div><button>Add to Favourites</button></div>
          </div>
        ))}
      </div>
    </>
  )
}
