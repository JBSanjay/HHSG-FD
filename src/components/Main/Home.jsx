import react, { useState } from 'react';
import Image from '../../img/bookcase-books-bookshelves-270571 (1).jpg';
import { NavLink } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
import { MockData } from '../Mockdata/Mockdata';
import './Home.css';
console.log(MockData);
const Home = () => {
const[Filter,setFilter]=useState(MockData);
  //Mapping of Mock data
  
  let Data =Filter.map((e) => {
    return (
      <div className='card-div'>
        <div className='Img-div'>
          <img src={e.Img} alt="" className="card-image" />
        </div>
        <div className='card-content'>
          <h5>{e.Title}</h5>
          <div className='d-flex justify-content-center '>
         <NavLink to={`/home/${e.id}`}><button className='btn btn-dark w-75'>Show Path</button></NavLink>
          </div>
        </div>
      </div>
    )
  })


  
 //Filtering
 function filteration(da){
 const fil=MockData.filter((e)=>e.Category===da);
 console.log("hello",fil);
 setFilter(fil);
 }



 //searching
 let search=()=>{

  let sdata=document.getElementById('search-input').value;
  sdata=sdata.toLowerCase();
  console.log(sdata);
  let sval=[];
  MockData.map((e)=>{
    var bin=e.Title.toLowerCase();
    console.log(bin);
    let bins=bin.search(sdata);
    if(bins!==-1)
    {
      sval=[...sval,e];
    }
  })
  // console.log(sval);
  setFilter(sval)
 }



  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark  bg-dark pe-1">
  <div class="container">
    <a class="navbar-brand  font-weight" href="#">SEARCH_LESS</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search_Less" placeholder="Search" id="search-input" onKeyUp={search} aria-label="Search" />
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
</nav>
      <div className="buttons d-flex justify-content-center mt-2" id='navbar-outer'>
                    <button className="btn btn-dark me-2 mt-2" onClick={(e)=>setFilter(MockData)}>All</button>
                    <button className="btn btn-dark me-2 mt-2" onClick={(e)=>filteration("comic")}>Comic</button>
                    <button className="btn btn-dark me-2 mt-2" onClick={(e)=>filteration("Science")}>Science</button>
                    <button className="btn btn-dark me-2 mt-2" onClick={(e)=>filteration("DSA")}>DSA</button>
                    <button className="btn btn-dark me-2 mt-2" onClick={(e)=>filteration("Programming")}>Programming</button>
                </div>
      <div className='d-flex' id='outer-div'>
        {Data}
      </div>
    </div>
  )
}

export default Home
