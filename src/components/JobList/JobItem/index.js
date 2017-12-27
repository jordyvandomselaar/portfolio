import React from "react"

const JobItem = ({name, duration, jobtitle, jobdescription}) => (
    <div>
        <h3>{name}</h3>
        <table>
            <tbody>
            <tr>
                <td>Duration</td>
                <td>{duration}</td>
            </tr>
            <tr>
                <td>Job Title</td>
                <td>{jobtitle}</td>
            </tr>
            <tr>
                <td>Job Description</td>
                <td>{jobdescription}</td>
            </tr>
            </tbody>
        </table>
    </div>
)

export default JobItem
