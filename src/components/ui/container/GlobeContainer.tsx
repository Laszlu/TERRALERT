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
        lat: 0,
        lng: 0,
        id: ""
    }));

    // TODO: currently using the oldest coords, need to switch to the newest
    for (let i = 0; i < props.data.length; i++){
        let lastIndex = props.data[i].geometry.length - 1;
        EventData[i].lat = props.data[i].geometry[lastIndex].coordinates[1];
        EventData[i].lng = props.data[i].geometry[lastIndex].coordinates[0];
        EventData[i].id = props.data[i].id;
    }

    const handleChange = (id: string) => {
        props.setEventForViewer(props.data.find(e => e.id === id) as NaturalEvent)
        props.setShowEventViewer(true);
        console.log("bool set to true from GlobeContainer");
    };

    switch (props.category) {

        case EventCategory.Storms:
            eventIcon =
                `<img src=\"${globalConstants.STORM_ICON_PATH}\" height=\"${globalConstants.STORM_ICON_SIZE}\" alt=\"Event Icon\"/>`;

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
                            el.id = e.id; // error in Code but works in App
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {console.log(el); handleChange(el.id)};
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Earthquakes:
            eventIcon =
                `<img src=\"${globalConstants.EMPTY_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

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
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {console.log(el); handleChange(el.id)};
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
                `<img src=\"${globalConstants.VOLCANO_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

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
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {console.log(el); handleChange(el.id)};
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Wildfires:
            eventIcon =
                `<img src=\"${globalConstants.WILDFIRE_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

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
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {console.log(el); handleChange(el.id)};
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Floods:
            eventIcon =
                `<img src=\"${globalConstants.FLOOD_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

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
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {console.log(el); handleChange(el.id)};
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Landslides:
            eventIcon =
                `<img src=\"${globalConstants.LANDSLIDE_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

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
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {console.log(el); handleChange(el.id)};
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