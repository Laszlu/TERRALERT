import Globe from 'react-globe.gl';
import {EventCategory, NaturalEvent} from "../../../data/Model.tsx";
import * as globalConstants from '../../../data/GlobalConstants.tsx';
import React from "react";

type GlobeContainerProps = {
    width: number;
    height: number;
    isLoading: boolean;
    data: NaturalEvent[];
    category: EventCategory;
    showEventViewer: boolean;
    setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
    eventForViewer: NaturalEvent;
    setEventForViewer: React.Dispatch<React.SetStateAction<NaturalEvent>>;
  }

function globeContainer(props: GlobeContainerProps){

    let eventIcon: string;
    // let EventData: {id: string, lat: number, lng: number }[] = Array();
    //
    // // NASA Coords are swapped!
    // props.data.forEach((event) => {
    //     EventData.push({id: event.id,lat: event.geometry[0].coordinates[1],
    //         lng: event.geometry[0].coordinates[0]});
    // })

    const EventData = [...Array(props.data.length).keys()].map(() => ({

    }));

    const handleChange = () => {
        // TODO: How to get to the event that is clicked on?
        //props.setEventForViewer(props.data.find(e => e.geometry[0].coordinates[0] === ))
        props.setShowEventViewer(true);
        console.log("bool set to true from GlobeContainer");
    };

    switch (props.category) {

        case EventCategory.Storms:
            eventIcon =
                `<img src=\"${globalConstants.STORM_ICON_PATH}\" height=\"100px\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                        backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        htmlElementsData={EventData}
                        /*htmlLat={props.data.entries().}*/ // TODO: get to coords
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {console.log(el); handleChange()};
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Earthquakes:
            eventIcon =
                `<img src=\"${globalConstants.EMPTY_ICON_PATH}\" height=\"100px\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                        backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        htmlElementsData={EventData}
                        htmlElement={() => {
                            const el = document.createElement('div');
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {console.log(el); handleChange()};
                            return el;
                        }}
                        ringsData={EventData}
                        ringRepeatPeriod={400}
                        ringPropagationSpeed={0.5}
                        ringColor={() => "#EE4B2B"}
                    />
                </div>
            )

        case EventCategory.Volcanoes:
            eventIcon =
                `<img src=\"${globalConstants.VOLCANO_ICON_PATH}\" height=\"75px\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                        backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        htmlElementsData={EventData}
                        htmlElement={() => {
                            const el = document.createElement('div');
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => handleChange();
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Wildfires:
            eventIcon =
                `<img src=\"${globalConstants.WILDFIRE_ICON_PATH}\" height=\"75px\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                        backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        htmlElementsData={EventData}
                        htmlElement={() => {
                            const el = document.createElement('div');
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => handleChange();
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Floods:
            eventIcon =
                `<img src=\"${globalConstants.FLOOD_ICON_PATH}\" height=\"75px\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                        backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        htmlElementsData={EventData}
                        htmlElement={() => {
                            const el = document.createElement('div');
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => handleChange();
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Landslides:
            eventIcon =
                `<img src=\"${globalConstants.LANDSLIDE_ICON_PATH}\" height=\"75px\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                        backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        htmlElementsData={EventData}
                        htmlElement={() => {
                            const el = document.createElement('div');
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => handleChange();
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.ExtremeTemperatures:
            return(
                <div className={"globe-container"}>
                    <Globe
                        globeImageUrl={'//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'}
                        backgroundImageUrl={'//unpkg.com/three-globe/example/img/night-sky.png'}
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        heatmapsData={[EventData]}
                        heatmapPointLat={"lat"}
                        heatmapPointLng={"lng"}
                        heatmapPointWeight={0.5}
                        heatmapTopAltitude={0}
                        heatmapsTransitionDuration={0}
                        enablePointerInteraction={false}
                    />
                </div>
            )

        case EventCategory.None:
            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                        backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                    />
                </div>
            )
    }


}

export default globeContainer;