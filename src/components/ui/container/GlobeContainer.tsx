import Globe from 'react-globe.gl';
import {EventCategory, NaturalEvent} from "../../../data/Model.tsx";
import * as globalConstants from '../../../data/GlobalConstants.tsx';

// TODO: pass State down and build switch to return different globe for each one

type GlobeContainerProps = {
    width: number;
    height: number;
    isLoading: boolean;
    data: NaturalEvent[];
    click: (params: void) => void;
    category: EventCategory;
  }

function globeContainer(props: GlobeContainerProps){

    let eventIcon: string;
    let EventData: { lat: number, lng: number }[] = Array();

    // NASA Coords are swapped!!!!!
    props.data.forEach((event) => {
        EventData.push({lat: event.geometry[0].coordinates[1], lng: event.geometry[0].coordinates[0]});
    })

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
                        htmlElement={() => {
                            const el = document.createElement('div');
                            el.innerHTML = eventIcon;
                            el.style.width = '100px';
                            el.style.height = '100px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => console.log(el);
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
                            el.onclick = () => console.log(el);
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
                            el.onclick = () => console.log(el);
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
                            el.onclick = () => console.log(el);
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
                            el.onclick = () => console.log(el);
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
                            el.onclick = () => console.log(el);
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