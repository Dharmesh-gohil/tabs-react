import { useState,useEffect } from "react";
import Jobinfo from "./Jobinfo";
import Btncontainer from "./btncontainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentItem,setCurrentItem]=useState(0)

  const fetchJobs = async () => {
    setIsLoading(true)
    try {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setIsLoading(false)  
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  
  useEffect(() => { 
    fetchJobs()
  }, [])
  
  if (isLoading) { 
    return (
      <section className="jobs-center">
      <div className="loading"></div>
      </section>
    )
  }

console.log(jobs)
  return (
    <section className="jobs-center">
      {/* button container */}
      <Btncontainer jobs={jobs} currentItem={currentItem} setCurrentItem={ setCurrentItem} />
      {/* job info */}
      <Jobinfo jobs={jobs} currentItem={ currentItem} />
    </section>
  )
};
export default App;
