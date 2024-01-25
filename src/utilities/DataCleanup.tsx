import {NaturalEvent} from "../data/Model.tsx";

interface DataCleanupProps {
    data: NaturalEvent[];
}

function average(arr: number[]) {
    let allValues = arr.reduce((a,b)=> a + b)
    let average = (allValues/arr.length).toFixed(2);
    return parseInt(average);
}

export function CleanupCoordinates (props: DataCleanupProps) {
    let cleanedData = props.data;

    for (let i = 0; i < props.data.length; i++) {
        for (let j = 0; j < props.data[i].geometry.length; j++) {
            if(typeof props.data[i].geometry[j].coordinates[0] !== "number") {
                let lats = props.data[i].geometry[j].coordinates[0].map(c => {
                    return c[1];
                });
                let longs = props.data[i].geometry[j].coordinates[0].map(c => {
                    return c[0];
                });
                let lat = average(lats);
                let lng = average(longs);
                cleanedData[i].geometry[j].coordinates = [lng, lat];
            }
        }
    }

    return cleanedData;
}