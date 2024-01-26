import Globe from 'react-globe.gl';
import {EventCategory, NaturalEvent} from "../../../data/Model.tsx";
import * as globalConstants from '../../../data/GlobalConstants.tsx';
import {IGlobeContainerProps} from "../../../data/Interfaces.tsx";

function Average(arr: number[]) {
    let allValues = arr.reduce((a,b)=> a + b)
    let average = (allValues/arr.length).toFixed(2);
    return parseInt(average);
}

function GlobeContainer(props: IGlobeContainerProps){

    let eventIcon: string;

    const EventData = [...Array(props.data.length).keys()].map(() => ({
        lat: 0,
        lng: 0,
        id: ""
    }));

    for (let i = 0; i < props.data.length; i++){
        let lastIndex = props.data[i].geometry.length - 1;
        if(typeof props.data[i].geometry[lastIndex].coordinates[0] === "number") {
            EventData[i].lat = props.data[i].geometry[lastIndex].coordinates[1];
            EventData[i].lng = props.data[i].geometry[lastIndex].coordinates[0];
            EventData[i].id = props.data[i].id;
        }
        else {
            let lats = props.data[i].geometry[lastIndex].coordinates[0].map(c => {
                return c[1];
            });
            let longs = props.data[i].geometry[lastIndex].coordinates[0].map(c => {
                return c[0];
            });
            let lat = Average(lats);
            let lng = Average(longs);
            EventData[i].lat = lat;
            EventData[i].lng = lng;
            EventData[i].id = props.data[i].id;
        }
    }

    const handleChange = (id: string) => {
        props.setEventForViewer(props.data.find(e => e.id === id) as NaturalEvent)
        props.setShowEventViewer(true);
    };

    switch (props.category) {

        case EventCategory.Storms:
            eventIcon =
                `<img src=\"${globalConstants.STORM_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl={globalConstants.EARTH_BLUE_MARBLE_IMG}
                        backgroundImageUrl={globalConstants.NIGHT_SKY_IMG}
                        bumpImageUrl={globalConstants.EARTH_TOPOLOGY_MAP}
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        heatmapsData={[]}
                        htmlElementsData={EventData}
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.className = "unselectable";
                            el.innerHTML = eventIcon;
                            el.style.width = '50px';
                            el.style.height = '50px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {handleChange(el.id)};
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Earthquakes:
            eventIcon =
                `<img src=\"${globalConstants.EARTHQUAKE_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl={globalConstants.EARTH_BLUE_MARBLE_IMG}
                        backgroundImageUrl={globalConstants.NIGHT_SKY_IMG}
                        bumpImageUrl={globalConstants.EARTH_TOPOLOGY_MAP}
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        heatmapsData={[]}
                        htmlElementsData={EventData}
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.className = "unselectable";
                            el.innerHTML = eventIcon;
                            el.style.width = '50px';
                            el.style.height = '50px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {handleChange(el.id)};
                            return el;
                        }}
                        /*ringsData={EventData}
                        ringRepeatPeriod={1000}
                        ringPropagationSpeed={0.4}
                        ringMaxRadius={1.5}
                        ringResolution={80}
                        ringColor={() => "#EE4B2B"}*/
                    />
                </div>
            )

        case EventCategory.Volcanoes:
            eventIcon =
                `<img src=\"${globalConstants.VOLCANOE_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl={globalConstants.EARTH_BLUE_MARBLE_IMG}
                        backgroundImageUrl={globalConstants.NIGHT_SKY_IMG}
                        bumpImageUrl={globalConstants.EARTH_TOPOLOGY_MAP}
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        heatmapsData={[]}
                        htmlElementsData={EventData}
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.className = "unselectable";
                            el.innerHTML = eventIcon;
                            el.style.width = '50px';
                            el.style.height = '50px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {handleChange(el.id)};
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
                        globeImageUrl={globalConstants.EARTH_BLUE_MARBLE_IMG}
                        backgroundImageUrl={globalConstants.NIGHT_SKY_IMG}
                        bumpImageUrl={globalConstants.EARTH_TOPOLOGY_MAP}
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        heatmapsData={[]}
                        htmlElementsData={EventData}
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.className = "unselectable";
                            el.innerHTML = eventIcon;
                            el.style.width = '50px';
                            el.style.height = '50px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {handleChange(el.id)};
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Floods:
            eventIcon =
                `<img src=\"${globalConstants.FLOOD_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

            console.log(EventData)

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl={globalConstants.EARTH_BLUE_MARBLE_IMG}
                        backgroundImageUrl={globalConstants.NIGHT_SKY_IMG}
                        bumpImageUrl={globalConstants.EARTH_TOPOLOGY_MAP}
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        heatmapsData={[]}
                        htmlElementsData={EventData}
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.className = "unselectable";
                            el.innerHTML = eventIcon;
                            el.style.width = '50px';
                            el.style.height = '50px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {handleChange(el.id)};
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.Landslides:
            eventIcon =
                `<img src=\"${globalConstants.LANDSLIDE_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

            console.log(EventData)

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl={globalConstants.EARTH_BLUE_MARBLE_IMG}
                        backgroundImageUrl={globalConstants.NIGHT_SKY_IMG}
                        bumpImageUrl={globalConstants.EARTH_TOPOLOGY_MAP}
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        heatmapsData={[]}
                        htmlElementsData={EventData}
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.className = "unselectable";
                            el.innerHTML = eventIcon;
                            el.style.width = '50px';
                            el.style.height = '50px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {handleChange(el.id)};
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.ExtremeTemperatures:
            eventIcon =
                `<img src=\"${globalConstants.TEMPERATURE_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl={globalConstants.EARTH_BLUE_MARBLE_IMG}
                        backgroundImageUrl={globalConstants.NIGHT_SKY_IMG}
                        bumpImageUrl={globalConstants.EARTH_TOPOLOGY_MAP}
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        heatmapsData={[]}
                        htmlElementsData={EventData}
                        htmlElement={e => {
                            const el = document.createElement('div');
                            el.id = e.id;
                            el.className = "unselectable";
                            el.innerHTML = eventIcon;
                            el.style.width = '50px';
                            el.style.height = '50px';
                            el.style['pointerEvents'] = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => {handleChange(el.id)};
                            return el;
                        }}
                    />
                </div>
            )

        case EventCategory.None:
            eventIcon =
                `<img src=\"${globalConstants.EMPTY_ICON_PATH}\" height=\"${globalConstants.ICON_SIZE}\" alt=\"Event Icon\"/>`;

            return(
                <div className='globe-container'>
                    <Globe
                        globeImageUrl={globalConstants.EARTH_BLUE_MARBLE_IMG}
                        backgroundImageUrl={globalConstants.NIGHT_SKY_IMG}
                        bumpImageUrl={globalConstants.EARTH_TOPOLOGY_MAP}
                        width={props.width}
                        height={props.height}
                        showAtmosphere={true}
                        showGraticules={true}
                        heatmapsData={[]}
                        htmlElementsData={[]}
                    />
                </div>
            )
    }
}

export default GlobeContainer;