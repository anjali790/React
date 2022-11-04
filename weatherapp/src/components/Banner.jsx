// import React,{ } from "react";
// // import Banner1 from './../../banner1.png';
// // import Banner2 from './../../banner2.png';
// // import Banner3 from './../../banner3.png';

// function Banner()
// {
  
//  return(
//   <React.Fragment>
  
//    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-inner">   
  
//     <div className="carousel-item active">
//       <img src='https://image.shutterstock.com/image-photo/autumn-forest-nature-vivid-morning-260nw-766886038.jpg' className="d-block w-100" alt='...'/>
//     </div>
    
//       <div className="carousel-item ">
//       <img src='https://i.pinimg.com/originals/bf/12/48/bf1248eb021551b0098892d872cfd8a9.jpg' className="d-block w-100" alt='...'/>
//     </div>
    
//     <div className="carousel-item ">
//       <img src='https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg' className="d-block w-100" alt='...'/>
//     </div>
   
    
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//   </React.Fragment>

//  );
// }
// export default Banner;



import React , {useState }from 'react'
import "../../App.css"

function Comments() {

    
    const  [ comments, setComments] = useState([]);
    const [ comment , setComment] = useState("");
      const [ count , setCount] = useState(0);

    const addItem = () => {
        setComments([...comments , comment]);
        setComment("")
    }

    return (
        <>
        <div className='button'>
        <div>
         <button className='likebtn' onClick={() => setCount((prev) => prev+1)}><i class="fa-regular fa-thumbs-up"></i>Like {count}</button>
         </div>
         <div>
         <button className='commentBtn' ><i class="fa-regular fa-comment"></i></button>
        <input type="text" placeholder='write here'  value={comment} onChange={(e) => setComment(e.target.value)} /> 
        <button className='sendbtn' onClick={addItem}>Send</button>
         </div>
        </div>
        {comments.map((item)=> (
            <div>
            <span>{item}</span>
            <button onClick={()=> {
                let filteredarray = comments.filter((value) => value !== item);
                setComments([...filteredarray]) 
            }}
            >delete</button>
            </div>
        ))}
        </>
    )
}

export default Comments