import React from 'react'
import Image from '../../img/bookcase-books-bookshelves-270571 (1).jpg';
const Home = () => {
  return (
    <div className='container d-flex '>
      <div className="card w-50 mx-3 mt-5 col-md-3 flex-wrap" >
        <img src={Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a className="btn btn-secondary d-flex justify-content-center"  >Go somewhere</a>
        </div>
      </div>
      <div className="card w-50 mx-3 mt-5 col-md-3 flex wrap" >
        <img src={Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a className="btn btn-secondary d-flex justify-content-center"  >Go somewhere</a>
        </div>
      </div>
      <div className="card w-50 mx-3 mt-5 col-md-3 flex-wrap" >
        <img src={Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a className="btn btn-secondary d-flex justify-content-center"  >Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default Home
