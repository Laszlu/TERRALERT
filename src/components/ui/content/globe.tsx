import Globe from 'react-globe.gl';
import {NaturalEvent} from "../../../data/Model.tsx";

type GlobeProps = {
    width: number;
    height: number;
    data: object[];
    imgPath: string;
    click: (params: void) => void;
}



function globe(props: GlobeProps){

    const eventIcon = `<img src=\"${props.imgPath}\" height=\"50px\" alt=\"Event Icon\"/>`

    return(
        <>
            <Globe
            globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
            backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
            width={props.width}
            height={props.height}
            showAtmosphere={true}
            showGraticules={true}
            htmlElementsData={props.data}
            htmlElement={() => {
                const el = document.createElement('div');
                el.innerHTML = eventIcon;
                el.style.width = '50px';
                el.style['pointerEvents'] = 'auto';
                el.style.cursor = 'pointer';
                el.onclick = () => props.click;
                return el;
            }}
            />
        </>
    )
}

export default globe;