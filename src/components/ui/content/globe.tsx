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



        return (
            <>

            </>
        )
    }
}

export default globe;