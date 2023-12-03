import { Globe } from "../content/ContentIndex";
import {NaturalEvent} from "../../../data/Model.tsx";


type GlobeContainerProps = {
    width: number;
    height: number;
    isLoading: boolean;
    imgPath: string;
    data: NaturalEvent[];
    click: (params: void) => void;
  }

function globeContainer(props: GlobeContainerProps){
    return(
        <div className='globe-container'>
            <Globe width={props.width} height={props.height} isLoading={props.isLoading} imgPath={props.imgPath} data={props.data} click={props.click}/>
        </div>
        
    )
}

export default globeContainer;