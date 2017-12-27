import React from "react"
import {Card, CardHeader, CardText} from "material-ui/Card"

const Page = ({title, url, children}) => (
    <div id={url}>
        <Card>
            {(title && <CardHeader
                title={title}
                actAsExpander
                showExpandableButton
            />)}
            <CardText expandable={title !== undefined}>
                {children}
            </CardText>
        </Card>
    </div>
)

export default Page
