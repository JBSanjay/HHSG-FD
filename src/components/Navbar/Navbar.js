import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    // <div className='Outer-div'>
    //   <section>Hello Name</section>
    //     <div className='Nav-search'>
    //         <input type='text' placeholder='enter product name'/>
    //     </div>    
    //   </div>
    <nav class="navbar navbar-expand-lg navbar-dark  bg-dark pe-1">
  <div class="container">
    <a class="navbar-brand  font-weight" href="#">SEARCH_LESS</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search_Less" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
</nav>
  )
}

export default Navbar
