import { Globe } from "../content/ContentIndex";
import {NaturalEvent} from "../../../data/Model.tsx";


type GlobeContainerProps = {
    width: number;
    height: number;
    imgPath: string;
    data: object[];
    click: (params: void) => void;
  }

function globeContainer(props: GlobeContainerProps){
    return(
        <div className='globe-container'>
            <Globe width={props.width} height={props.height} imgPath={props.imgPath} data={props.data} click={props.click}/>
        </div>
        
    )
}

export default globeContainer;