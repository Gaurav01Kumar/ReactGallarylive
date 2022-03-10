import React from 'react'


function Gallary({Data}) {
  return (
    <>
      <div className="Gallary_main_box">
      
      { Data.map((val)=>{
        const {img, title}=val;
        return(
          <>
         <div className="card">
         <div className="image">
              <img src={img} alt="Random_Image" />
              <div className="button">
              <i class="fa fa-heart"></i>
              <i class="fa fa-download"></i>
              </div>
              </div>
               <div className="title">
               <h2>{title}</h2>
               </div>
               
                 </div>
                
                 </>
                 )
  })
      }
      </div>
      </>
    
  )
}

export default Gallary
