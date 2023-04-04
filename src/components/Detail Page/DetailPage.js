import React from 'react';
import { MockData } from '../Mockdata/Mockdata';
import { useParams } from 'react-router'
const DetailPage = () => {
    const{id}=useParams();
    console.log(id);
    const DetailData=MockData.map((e)=>{
        if(e.id===id)
        {
        return(
            <div className='det-outer-div'>
                <div>
                    <img src={e.Img} alt={e.Title}/>
                </div>
            </div>
        )
        }
    })
  return (
    <div>
      {DetailData}
    </div>
  )
}

export default DetailPage
