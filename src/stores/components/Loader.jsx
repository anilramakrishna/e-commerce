import React from 'react'
import {Dimmer,Segment,Image,Loader} from 'semantic-ui-react'

const LoaderExampleLoader = () => (
    <Segment>
        <Dimmer active>
            <Loader inverted/>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
)

export default LoaderExampleLoader