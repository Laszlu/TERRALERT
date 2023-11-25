import { NaturalEvent } from "../../../data/Model";
import { ViewerHeader } from '../headers/HeaderIndex.tsx';
import "../../../assets/styles/container.css";

type EventViewerProps = {
    event: NaturalEvent;
}

function EventViewer(props: EventViewerProps){

    let selectedEvent = props.event;

    return(
        <div className={"viewer-container"} >
            <div className={"viewer-background"}>
                <ViewerHeader headerText={selectedEvent.title} />
                <div className={"viewer-label-container"}>
                    <label className={"viewer-id"}>({selectedEvent.id})</label><br/>
                    <label className={"viewer-category"}>{selectedEvent.categories[0].title}</label><br/>
                    <label className={"viewer-geometry"}>
                        Date: {selectedEvent.geometry[0].date}<br/>
                        Lat: {selectedEvent.geometry[0].coordinates[0]}<br/>
                        Long: {selectedEvent.geometry[0].coordinates[1]}<br/>
                        Magnitude: {selectedEvent.geometry[0].magnitudeValue}
                    </label><br/>
                </div>
            </div>
        </div>
    )
}

export default EventViewer;