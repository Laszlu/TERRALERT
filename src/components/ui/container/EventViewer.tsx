import {NaturalEvent} from "../../../data/Model";
import {ViewerHeader} from '../headers/HeaderIndex.tsx';
import "../../../assets/styles/container.css";
import "../../../assets/styles/index.css";
import React from "react";

type EventViewerProps = {
    event: NaturalEvent;
    showEventViewer: boolean;
    setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
}

function EventViewer(props: EventViewerProps) {

    const handleClick = () => {
        props.setShowEventViewer(false);
        console.log("showEventViewer set to false");
    }

    let selectedEvent = props.event;

    return (
        <div className={"viewer-container"}>
            <div className={"viewer-background"}>
                <button className={"close-button"} onClick={() => handleClick()}>
                    &#10005;
                </button>
                <ViewerHeader headerText={selectedEvent.title}/>
                <div className={"viewer-label-container"}>
                    <table className={"info-table"}>
                        <tbody>
                        <tr className={"data-table-row-outer"}>
                            <td className={"data-table-outer-td-left"}>ID:</td>
                            <td className={"info-table-right-column-td"}>{selectedEvent.id}</td>
                        </tr>
                        <tr className={"data-table-row-outer"}>
                            <td className={"data-table-outer-td-left"}>Category:</td>
                            <td className={"info-table-right-column-td"}>{selectedEvent.categories[0].title}</td>
                        </tr>
                        </tbody>
                    </table>
                    {selectedEvent.geometry.slice(0).reverse().map((geo) => (
                        <table className={"geo-table"}>
                            <tbody>
                                <tr className={"data-table-row-outer"}>
                                    <td colSpan={2} className={"data-table-outer-date"}>
                                        Data on {geo.date.substring(0, 10)}:
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
                                                    <td>{geo.coordinates[0]}</td>
                                                </tr>
                                                <tr className={"data-table-row-inner"}>
                                                    <td className={"data-table-inner-td-left"}>Longitude:</td>
                                                    <td>{geo.coordinates[1]}</td>
                                                </tr>
                                                <tr className={"data-table-row-inner"}>
                                                    <td className={"data-table-inner-td-left"}>Magnitude:</td>
                                                    <td>{geo.magnitudeValue}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ))}
                </div>
                <div className={"source-btn-container"}>
                    <button className={"source-btn"}>
                        <a href={selectedEvent.sources[0].url} target={"_blank"}>
                            Source
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventViewer;