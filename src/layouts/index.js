import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import styled from "styled-components"
import {Helmet} from "react-helmet"

const App = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
`

export default ({children}) => (
    <MuiThemeProvider>
        <App>
            <Helmet>
                <title>Portofolio van Jordy van Domselaar</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </Helmet>
            <div>
                {children()}
            </div>
        </App>
    </MuiThemeProvider>
)

