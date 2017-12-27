import React from "react"
import routes from "../routes"
import Page from "../components/Page"
import JobList from "../components/JobList"
import jobs from "../data/jobs"
import technicalKnowledge from "../data/technicalKnowledge"
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table/index"
import {List, ListItem} from "material-ui/List/index"
import SubHeader from "material-ui/Subheader"
import {Divider} from "material-ui"

const IndexPage = () => (
    <div>
        <Page url={routes.home}>
            <h1>Welcome to my portfolio!</h1>

            <p>Here you'll be able to find information regarding… Me!</p>
            <strong>
                NOTE: This portfolio is still very much a Work In Progress. It's not pretty yet, but it is functional…-ish.
            </strong>
        </Page>

        <Page url={routes.general} title="General Information">
            <Table selectable={false}>
                <TableBody
                    displayRowCheckbox={false}
                    showRowHover
                >
                    <TableRow>
                        <TableRowColumn>Initials</TableRowColumn>
                        <TableRowColumn>J.M</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>First name</TableRowColumn>
                        <TableRowColumn>Jordy</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>Insertion</TableRowColumn>
                        <TableRowColumn>van</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>Last name</TableRowColumn>
                        <TableRowColumn>Domselaar</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>Gender</TableRowColumn>
                        <TableRowColumn>Male</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>Date Of Birth</TableRowColumn>
                        <TableRowColumn>6th of September 1996</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>Place Of Birth</TableRowColumn>
                        <TableRowColumn>Delfzijl</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>CounTableRowy Of Birth</TableRowColumn>
                        <TableRowColumn>the Netherlands</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>Nationality</TableRowColumn>
                        <TableRowColumn>Dutch</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>Address</TableRowColumn>
                        <TableRowColumn>[redacted]</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>Postalcode + city</TableRowColumn>
                        <TableRowColumn>[redacted]</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>Phonenumber</TableRowColumn>
                        <TableRowColumn>[redacted]</TableRowColumn>
                    </TableRow>

                    <TableRow>
                        <TableRowColumn>E-mail</TableRowColumn>
                        <TableRowColumn>
                            <a href="mailto:jordy.m.van.domselaar@gmail.com">jordy.m.van.domselaar@gmail.com</a>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Github</TableRowColumn>
                        <TableRowColumn><a href="https://github.com/jordyvandomselaar" target="_blank">jordyvandomselaar</a></TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        </Page>

        <Page url={routes.background} title="Background Information">
            <p>
                I'm a young man with a strong passion for development. I greatly enjoy building the next big thing, and I find joy in learning about the latest tech.
            </p>
        </Page>

        <Page title="Studies">
            <Table selectable={false}>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Duration</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Finished</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    showRowHover
                >
                    <TableRow>
                        <TableRowColumn>2009 - 2013</TableRowColumn>
                        <TableRowColumn>VMBO / Economics and Healthcare</TableRowColumn>
                        <TableRowColumn>Yes</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2013 - 2017</TableRowColumn>
                        <TableRowColumn>MBO4, software development</TableRowColumn>
                        <TableRowColumn>yes</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        </Page>

        <Page title="Work">
            <JobList data={jobs}/>
        </Page>

        <Page title="Technical Knowledge">
            <SubHeader>OS-es</SubHeader>
            <List>
                {technicalKnowledge.os.map(item => <ListItem
                    primaryText={item}
                />)}
            </List>
            <Divider/>
            <SubHeader>Scripting and Programming languages</SubHeader>
            <List>
                {technicalKnowledge.technicalLanguages.map(item => <ListItem
                    primaryText={item}
                />)}
            </List>
            <Divider/>
            <SubHeader>Frameworks and Libraries</SubHeader>
            <List>
                {technicalKnowledge.frameworksLibraries.map(item => <ListItem
                    primaryText={item}
                />)}
            </List>
            <Divider/>
            <SubHeader>Tooling</SubHeader>
            <List>
                {technicalKnowledge.tooling.map(item => <ListItem
                    primaryText={item}
                />)}
            </List>
            <Divider/>
            <SubHeader>Human languages</SubHeader>
            <List>
                {technicalKnowledge.languages.map(item => <ListItem
                    primaryText={item}
                />)}
            </List>
        </Page>

        <Page title="Technologies used to build this portfolio">
            <List>
                <ListItem primaryText="Gatsby"/>
                <ListItem primaryText="React"/>
                <ListItem primaryText="Styled-components"/>
                <ListItem primaryText="Material-ui"/>
            </List>
        </Page>
    </div>
)

export default IndexPage
