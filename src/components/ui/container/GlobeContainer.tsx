import { Globe } from "../content/ContentIndex";


type GlobeContainerProps = {
    width: number;
    height: number;
  }

function globeContainer(props: GlobeContainerProps){
    return(
        <div className='globe-container'>
            <Globe width={props.width} height={props.height}/>
        </div>
        
    )
}

export default globeContainer;