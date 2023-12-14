import { NaturalEvent } from "../../../data/Model";
import { ViewerHeader } from '../headers/HeaderIndex.tsx';
import "../../../assets/styles/container.css";
import "../../../assets/styles/index.css";
import React from "react";

type EventViewerProps = {
    event: NaturalEvent;
    showEventViewer: boolean;
    setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
}

function EventViewer(props: EventViewerProps){

    const handleClick = () => {
        props.setShowEventViewer(false);
        console.log("showEventViewer set to false");
    }

    let selectedEvent = props.event;

    return(
        <div className={"viewer-container"} >
            <div className={"viewer-background"}>
                <button className={"close-button"} onClick={() => handleClick()}>
                    &#10005;
                </button>
                <ViewerHeader headerText={selectedEvent.title} />
                <div className={"viewer-label-container"}>
                    <table>
                        <tbody>
                            <tr className={"data-table-row-outer"}>
                                <td className={"data-table-outer-td-left"}>ID:</td>
                                <td>{selectedEvent.id}</td>
                            </tr>
                            <tr className={"data-table-row-outer"}>
                                <td className={"data-table-outer-td-left"}>Category:</td>
                                <td>{selectedEvent.categories[0].title}</td>
                            </tr>
                            <tr className={"data-table-row-outer"}>
                                <td colSpan={2} className={"data-table-outer-date"}>
                                    Data on {selectedEvent.geometry[0].date.substring(0,10)}:
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <table>
                                        <tbody>
                                        <tr className={"data-table-row-inner"}>
                                            <td className={"data-table-inner-td-left"}>Latitude:</td>
                                            <td>{selectedEvent.geometry[0].coordinates[0]}</td>
                                        </tr>
                                        <tr className={"data-table-row-inner"}>
                                            <td className={"data-table-inner-td-left"}>Longitude:</td>
                                            <td>{selectedEvent.geometry[0].coordinates[1]}</td>
                                        </tr>
                                        <tr className={"data-table-row-inner"}>
                                            <td className={"data-table-inner-td-left"}>Magnitude:</td>
                                            <td>{selectedEvent.geometry[0].magnitudeValue}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EventViewer;