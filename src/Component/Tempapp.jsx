import React, { useEffect, useState } from 'react';

const Temp=()=>{
    const [city,setCity]=useState(null);
    const [search , setSerach]=useState();
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid={API key}`;
            const  response=await fetch(url);
          
            const resJson= await response.json();
             // console.log(resJson);
             setCity(resJson);
        }
        fetchApi();
    },[search])
    return(
        <>
        <div className="box">
        <div className="inputData">
        <input type="search" className='inputfiels' onChange={(event)=>{setSerach(event.target.value)}}/>
        </div>
        {!city?(
            <p>No Data Found</p>
        ):(
            <div>
            <div className='info'>
            <h2 className="Location">
            <i clas="fas fa-street-view"></i> {search}
            </h2>
            <h1 className='temp'>
    {city.main.temp}
            </h1>
            <h3 className='temp_max'>Min : 5.25 cel | Max :5.25 Cel </h3>
            </div>
            <div className="wave  -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
            
        )
        }
      </div>
        </>
    );
}
export default Temp;