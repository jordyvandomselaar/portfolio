import React from "react"
import JobItem from "./JobItem"

const JobList = ({data}) => (
    <div>
        {data.map(job => <JobItem name={job.name} duration={job.duration} jobtitle={job.job.title} jobdescription={job.job.description}></JobItem>)}
    </div>
)

export default JobList
