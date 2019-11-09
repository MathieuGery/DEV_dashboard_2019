import React from "react";

import Example from './Container'
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class MyCard extends React.Component {
    render() {
        return (
            <div>
                <DndProvider backend={HTML5Backend}>
                    <Example/>
                </DndProvider>
            </div>
        );
    }
}

export default MyCard;
