import React from "react"
import {Table, TableBody, TableRow, TableRowColumn} from "material-ui/Table"

const JobItem = ({name, duration, jobtitle, jobdescription}) => (
    <div>
        <h3>{name}</h3>
        <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>Duration</TableRowColumn>
                    <TableRowColumn>{duration}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Job Title</TableRowColumn>
                    <TableRowColumn>{jobtitle}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Job Description</TableRowColumn>
                    <TableRowColumn>{jobdescription}</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    </div>
)

export default JobItem
