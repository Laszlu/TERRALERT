import "../../../assets/styles/container.css";
import "../../../assets/styles/index.css";
import {ViewerHeader} from "../headers/HeaderIndex.tsx";
import {GITHUB_URL, MAIL_URL} from "../../../data/GlobalConstants.tsx";
import {IAboutContainerProps} from "../../../data/Interfaces.tsx";
import * as globalConstants from "../../../data/GlobalConstants.tsx";

function OpenLink(link: string){
    window.open(link, "_blank", "noreferrer");
}

function AboutContainer(props: IAboutContainerProps) {

    const handleClick = () => {
        props.setShowAbout(false);
    }

    return(
        <div className={"popup-container"}>
            <div className={"popup-background"}>
                <button className={"close-button"} onClick={() => handleClick()}>
                    &#10005;
                </button>
                <ViewerHeader headerText={"About"}/>
                <div className={"popup-text-container"}>
                    <h4>Content:</h4>
                    <p>
                        This website uses data from the <a href={"https://eonet.gsfc.nasa.gov/docs/v3#eventsAPI"}>NASA EONET V3 API</a>.
                        According to NASA, this data is for general information purposes only
                        and should not be construed as “official” with regards to spatial or temporal extent.<br/>
                        The globe used for visualization is from the
                        <a href={"https://github.com/vasturiano/react-globe.gl/tree/master"}> vasturiano react-globe.gl </a>
                        Github repository.
                    </p>
                </div>
                <div className={"popup-text-container"}>
                    <h4>Development:</h4>
                    <p>
                        This website was developed by Laszlo Ferreyra as a university project for SAE Institutes Munich.<br/>
                        © TERRALERT 2024<br/>
                        More information can be found in the
                        <a href={"https://github.com/Laszlu/TERRALERT"} target={"_blank"}> Github Repository</a>
                    </p>
                </div>
                <div className={"popup-text-container"}>
                    <h4>Contact:</h4>
                    <table className={"about-icon-table"}>
                        <tbody>
                        <tr>
                            <td>
                                <div className={"about-icon-table-left"}>
                                    <img src={globalConstants.GITHUB_ICON}
                                         alt={"Github Logo"} height={"20px"}
                                         onClick={() => OpenLink(GITHUB_URL)}/>
                                </div>
                            </td>
                            <td>
                                <div className={"about-icon-table-right"}>
                                    <img src={globalConstants.GMAIL_ICON}
                                         alt={"Gmail Logo"} height={"20px"}
                                         onClick={() => OpenLink(MAIL_URL)}/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"popup-text-container"}>
                    <h4>Privacy Policy:</h4>
                    <p>
                        This website does not collect any user data.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutContainer;