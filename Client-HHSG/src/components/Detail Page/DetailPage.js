import React from 'react';
import { MockData } from '../Mockdata/Mockdata';
import { useParams } from 'react-router'
const DetailPage = () => {
    const { id } = useParams();
    console.log(id, "hello");
    console.log(MockData);
    // console.log("jj");
    let DetailData = MockData.map((e) => {
        console.log("jj");
        if (e.id == id) {
            return (

                <div className='det-outer-div'>

                    <div className='det-img'>
                        <img src={e.Img} alt={e.Title} width="450" height="600" />
                    </div>
                    <div>Hello</div>
                    <div className='det-content'>
                        <h3>{e.Title}</h3>
                        <p></p>
                    </div>
                </div>
            )
        }
    }
    )
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark  bg-dark pe-1">
                <div class="container">
                    <a class="navbar-brand  font-weight" href="#">SEARCH_LESS</a>
                </div>
            </nav>
            {DetailData}
        </div>
    )
}

export default DetailPage
