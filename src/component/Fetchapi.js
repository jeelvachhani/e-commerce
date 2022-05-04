import React, { useEffect, useState} from 'react';
import './Fetchapi.css' ;
const Covid = () =>{

    const [apidata, setData ]= useState ([]);
const getCovidData = async () =>{
        const res = await fetch('https://api.covid19india.org/data.json');
    const actualdatad = await res.json();
       setData(actualdatad.statewise);
    
}

 useEffect (()=>{
    getCovidData();
 }, []);


 const [data, ssetData ]= useState ([]);
 const getCovidDataa = async () =>{

const res = await fetch('https://api.covid19india.org/data.json');
const actualdatad = await res.json();
ssetData(actualdatad.statewise[0]);

}
useEffect (()=>{
    getCovidDataa();
 }, []);

    return(
        
        <>
        <section>
            <div className="body">
        <h1>Live</h1>
        <h2>coivd 19 tracker</h2>
        <ui>
            <li className="card blue">
                <div className="card_main">
                     <div className="card_inner">
                    <p className="card_name"><span>our</span><span>Country</span></p>
                    <p className="card_total">India</p>
                     </div>
                </div>
            </li>
             <li className="card green">
                <div className="card_main">
                     <div className="card_inner">
                    <p className="card_name"><span>Total</span><span>Recover</span></p>
                    <p className="card_total">{data.recovered}</p>
                     </div>
                </div>
            </li>
            <li className="card pink">
                <div className="card_main">
                     <div className="card_inner">
                    <p className="card_name"><span>Total</span><span>confirmed</span></p>
                    <p className="card_total">{data.confirmed}</p>
                     </div>
                </div>
            </li>
            <li className="card byell">
                <div className="card_main">
                     <div className="card_inner">
                    <p className="card_name"><span>Total</span><span>Deaths</span></p>
                    <p className="card_total">{data.deaths}</p>
                     </div>
                </div>
            </li>
            <li className="card babyb">
                <div className="card_main">
                     <div className="card_inner">
                    <p className="card_name"><span>Total</span><span>Active</span></p>
                    <p className="card_total">{data.active}</p>
                     </div>
                </div>
            </li>
            <li className="card byr">
                <div className="card_main">
                     <div className="card_inner">
                    <p className="card_name"><span>Total</span><span>Update</span></p>
                    <p className="card_total">{data.lastupdatedtime}</p>
                     </div>
                </div>
            </li> 
        </ui> 
        <table id="customers">
            
            <h2>state wise covid info</h2>
  <tr>
    <th>State</th>
    <th>Confirmed</th>
    <th>recovered</th>
    <th>Deaths</th>
    <th>Active</th>
    <th>Update</th>
  </tr>
  {
      apidata.map((curElem,ind)=>{
          return(
            <tr key={ind}>
            <td>{curElem.state}</td>
            <td>{curElem.confirmed}</td>
            <td>{curElem.recovered}</td>
            <td>{curElem.deaths}</td>
            <td>{curElem.active}</td>
            <td>{curElem.lastupdatedtime}</td>
          </tr>
          )
      })
  }
</table>
        </div>
        </section>
        </>
    )
}


export default Covid;