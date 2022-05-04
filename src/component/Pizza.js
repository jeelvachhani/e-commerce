import React, { useEffect, useState } from "react";
import './Itemgallery.css'; 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Pizza = () => {
  const [pizzas, setPizza] = useState([])

  const fetchData = () => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPizza(data)
      })
  }
//   const OrderFood = (event) =>{
//     const fids = fetchData.filter((curElem) => {
//         return curElem.id === event;
//     });
//   const jeel = fids.map(function(cval) {
//     return ("pizza name is " +cval.name+ " food price is" +cval.price)
//    });
  
// }
 
 const vegornon = (categItem) => {
     console.log(categItem)
    // const updatedItems = fetchData.filter((curElem) => {
    //     return curElem.isVeg === categItem;
    // });
    // setPizza(updatedItems);
}
  useEffect(() => {
    fetchData()
  }, [])

  return ( 
     <>
      <h1 className="mt-5 text-center main-heading">Order Your Favourite Pizza</h1>
            <hr/>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" onClick={() => vegornon('true')} id="=veg" />
                <label className="form-check-label" for="veg">VEG </label>
                </div>

                <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" onClick={() => vegornon('false')}  id="NON-VEG" />
                <label className="form-check-label" for="NON-VEG">NON VEG </label>
                </div>
                </div>
            </div>
 
        <div className="menu-items container-fluid mt-5">
                <div className="row">
                {/* <label>
                   Search
                    <input type="text" value={sfilter} onChange={searchText.bind(this)} className="from-control" />
                </label> */}
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                pizzas.map((elem) => {
                                    const { name, img_url, rating, isVeg, description, price } = elem;
                                    return (
                                       
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={img_url} alt={name} className="img-fluid"/>
                                                </div>

                                                {/* menu items description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pb-3">
                                                        <h1>{name}({ isVeg == 'true' ? 'Veg' : 'Non Veg' })</h1>
                                                        <p>{description }</p>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between ">
                                                            <h2>Price : {price}</h2>
                                                            {/* <a href="#">
                                                                <button className="btn btn-primary"  onClick={() => OrderFood(elem.id)}  >Order Now</button>
                                                            </a> */}

                                                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">-Add+</button>
                                                            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Cart</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    ...
  </div>
</div>
                                                        </div>
                                                        <p>Rating:{rating}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                              
                                })
                        }
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
  
}

export default Pizza;