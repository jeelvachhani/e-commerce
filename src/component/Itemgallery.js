import React, {useState} from 'react'
import Customitemdata from './Customitemdata'
import './Itemgallery.css'; 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Itemgallery = (props) => {
    const [sfilter, setFilter] = useState('');
    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    const dataSearch = Customitemdata.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(sfilter.toString().toLowerCase())
            )
    });
    const [items, setItems] = useState(Customitemdata);
    const filterItem = (categItem) => {
        const updatedItems = Customitemdata.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems);
    }
   const OrderFood = (event) =>{
    const fids = Customitemdata.filter((curElem) => {
        return curElem.id === event;
    });
  const jeel = fids.map(function(cval) {
    return ("food name is " +cval.name+ " food price is" +cval.price)
   });
  alert(jeel);
} 
    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr/>
           
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning"  onClick={() => filterItem('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItem('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItem('evening')}>Evening</button>
                    <button className="btn btn-warning" onClick={() => filterItem('dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={() => setItems(Customitemdata)}>All</button>
                </div>
            </div>
            {/* my main items section  */}
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                <label>
                   Search
                    <input type="text" value={sfilter} onChange={searchText.bind(this)} className="from-control" />
                </label>
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                items.map((elem) => {
                                    const { name, image, description, price } = elem;
                                    return (
                                       
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={image} alt={name} className="img-fluid"/>
                                                </div>

                                                {/* menu items description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description }</p>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between ">
                                                            <h2>Price : {price}</h2>
                                                            <a href="#">
                                                                <button className="btn btn-primary"  onClick={() => OrderFood(elem.id)}  >Order Now</button>
                                                            </a>
                                                           
                                                        </div>
                                                        <p>*Prices may vary on selected date.</p>
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
         {dataSearch.map((item,index)=>{ 
console.log("found " +item.id)
          })}
        </>
    )
}

export default Itemgallery;