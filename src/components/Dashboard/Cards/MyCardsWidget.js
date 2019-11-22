import {GridContextProvider, GridDropZone, GridItem, swap} from "react-grid-dnd";
import React from "react";
import WeatherDashboard from "../services/weather/weather";
import ClockDashboard from "../services/ClockDashboard";

export default function Example() {
    const [items, setItems] = React.useState(['weather', 'clock']); // supply your own state

    // target id will only be set if dragging from one dropzone to another.
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        const nextState = swap(items, sourceIndex, targetIndex);
        setItems(nextState);
    }

    return (
        <GridContextProvider onChange={onChange}>
            <GridDropZone
                id="items"
                boxesPerRow={4}
                rowHeight={400}
                style={{height: "400px"}}
            >
                {items.map(item => (
                    <GridItem key={item}>
                        {item === 'weather' && <WeatherDashboard/>}
                        {item === 'clock' && <ClockDashboard/>}
                    </GridItem>
                ))}
            </GridDropZone>
        </GridContextProvider>
    );
}