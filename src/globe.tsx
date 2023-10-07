import Globe from 'react-globe.gl';


function globe(){
    return(
        <>
            <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            backgroundColor='#000000'
            width={1200}
            />
        </>
    )
}

export default globe;