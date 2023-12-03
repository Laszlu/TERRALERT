import Globe from 'react-globe.gl';
import {NaturalEvent} from "../../../data/Model.tsx";

type GlobeProps = {
    width: number;
    height: number;
    isLoading: boolean;
    data: NaturalEvent[];
    imgPath: string;
    click: (params: void) => void;
}

// TODO: category as prop & different layers for each category


function globe(props: GlobeProps){

    if(props.isLoading) {
        return (
            <>
                <Globe
                    globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                    backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
                    width={props.width}
                    height={props.height}
                    showAtmosphere={true}
                    showGraticules={true}
                />
            </>
        )
    }
    else {

        let StormData: { lat: number, lng: number }[] = Array();

        // NASA Coords are swapped!!!!!
        props.data.forEach((event) => {
            StormData.push({lat: event.geometry[0].coordinates[1], lng: event.geometry[0].coordinates[0]});
        })

        const eventIcon = `<img src=\"${props.imgPath}\" height=\"100px\" alt=\"Event Icon\"/>`

        return (
            <>
                <Globe
                    globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                    backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
                    width={props.width}
                    height={props.height}
                    showAtmosphere={true}
                    showGraticules={true}
                    htmlElementsData={StormData}
                    htmlElement={() => {
                        const el = document.createElement('div');
                        el.innerHTML = eventIcon;
                        el.style.width = '100px';
                        el.style['pointerEvents'] = 'auto';
                        el.style.cursor = 'pointer';
                        el.onclick = () => console.log(el);
                        return el;
                    }}
                />
            </>
        )
    }
}

export default globe;