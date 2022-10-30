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
      <div className='product_div'>
        {
          post.map(post =>
            <div key={post.id}>
              <div className='product_item_div'>
                <p className='product_name'>{post.Name}</p>
                <img src={post.urlImg} alt="" className='product_img'></img>
                <div>
                  <button onClick={(() => addToCart)} className="add_to_cart_btn">Add to cart</button>
                </div>
              </div>
            </div>

          )
        }
      </div>

    </>
  )
}