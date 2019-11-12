import React from "react";

import Container from './Container'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class MyCard extends React.Component {
    render() {
        return (
            <div>
                <DndProvider backend={HTML5Backend}>
                    <Container />
                </DndProvider>
            </div>
        );
    }
}

export default MyCard;
