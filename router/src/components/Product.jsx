import React, { useEffect, useState } from 'react';
import axios from 'axios';


export function Product() {
  const [post, setPost] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    axios.get('https://avish-test-api.herokuapp.com/watches')
      .then((response) => {
        setPost([...response.data]);
        console.log(post)
      });
  }, []);

  const addToCart = (data) => {
    setCart([...cart, data])
    console.log(cart);
  }

  return (
    <>
      <div className='productDiv'>
        {
          post.map(post =>
            <div key={post.id}>
              <div className='productItemDiv'>
                <p className='productName'>{post.Name}</p>
                <img src={post.urlImg} alt="" className='productImg'></img>
                <div>
                  <button onClick={(() => addToCart)} className="addToCartBtn">Add to cart</button>
                </div>
              </div>
            </div>

          )
        }
      </div>

    </>
  )
}
