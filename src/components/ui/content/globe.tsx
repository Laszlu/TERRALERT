import Globe from 'react-globe.gl';

type GlobeProps = {
    width: number;
    height: number;
}

function globe(props: GlobeProps){
    return(
        <>
            <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            width={props.width}
            height={props.height}
            showAtmosphere={true}
            showGraticules={true}
            />
        </>
    )
}

export default globe;