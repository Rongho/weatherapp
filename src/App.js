import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {  useState } from "react";
import axios from "axios";

function App() {
  let apikey="28736bd4ebbd7dcb5cd23eb8cc724093";

  const[data,setData]=useState({})

  const[inputSearch,setInputsearch]=useState("");

  const getWeathetDetails=(cityName)=>{
    if(!cityName) return
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey
    axios.get(apiURL).then((res)=>{
      console.log("response",res)
      setData(res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  }
  const handleSearch=(e)=>{
      setInputsearch(e.target.value)
  }

  const handleClick=()=>{
    getWeathetDetails(inputSearch)
  }
  return (
    <div className="col-md-12">
      <div className="weather-bg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control" onChange={handleSearch} value={inputSearch}/>
  <button className="btn btn-primary" type="submit" onClick={handleClick}>search</button>
        </div>
      </div>
      {Object.keys(data).length>0 &&
      <div className="col-md-12 text-center mt-5">
         <div className="shadow rounded wetherResultBox">
            <img className="weatherIcon" 
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="wth"/>
            <h5 className="weatherCity">{data?.name}</h5>
            <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
         </div>
      </div>}
    </div>
  );
}

export default App;
