import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, settours] = useState([]);
  const removetour = (id)=>{
    const newtours = tours.filter((tour) => tour.id !== id);
    settours(newtours)
  }
  const fetchtours = async ()=>{
    setLoading(true);
    try {
      setLoading(false);
      const response = await fetch(url);
      const tours = await response.json();
      settours(tours);
      console.log(tours);
      
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
    
  }
  useEffect(()=>{
    fetchtours();
  },[])

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length===0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchtours}>Refresh</button>
        </div>
      </main>
    )
  }
  
    return(
      <Tours tours = {tours} removetour={removetour}/>
    );

}

export default App;
