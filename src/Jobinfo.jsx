import Duties from "./Duties"

const Jobinfo = ({ jobs ,currentItem}) => {
    // console.log(jobs)
    const { company,dates,duties,title}=jobs[currentItem]
  return (
      <article className="job-info">
          <h3>{title}</h3>
          <span className="job-company">{company}</span>
          <p className="job-dates">{dates}</p>
          <Duties duties={duties} />
      </article>
  )
}
export default Jobinfo