import Globe from 'react-globe.gl';


function globe(){
    return(
        <>
            <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundColor='#000000'
            />
        </>
    )
}

export default globe;