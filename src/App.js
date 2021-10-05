import React from 'react'
import {useState,useEffect} from 'react';
import Profile from './Profile';


const url ='https://course-api.com/react-tabs-project'

const App = () => {

    const [index,setIndex] = useState(0);
    const [loading,setLoading]= useState(true);
    const [jobs, setJobs] =useState([]);

    const fetchjobs = async() =>{
      const response = await fetch(url);
      const newJobs = await response.json()
      setJobs(newJobs)
      setLoading(false)
    }

    useEffect(()=>{
      fetchjobs()
    },[])

    if(loading)
    {
      return(
        <section className="section loading">
        <h1>Loading...</h1>
        </section>
      );
    }

    

  return (
    <section className="section">
      <div className="title">
      <h2>Experience</h2>
      <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((item,ind)=>{

              return(
                <button
                 key={item.id}
                 onClick={()=>setIndex(ind)}
                 className ={`job-btn ${ind===index && 'active-btn'}`}>
                 {jobs[ind].company}
                </button>
              );
            })
          }
        
        </div>
      <Profile key ={jobs[index].id} job={jobs[index]}/>
      </div>
      <button type="button" className="btn">
       More Info
      </button>
    </section>
    
  )
}

export default App
