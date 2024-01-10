import "../../../assets/styles/container.css";
import "../../../assets/styles/index.css";
import React from "react";
import {ViewerHeader} from "../headers/HeaderIndex.tsx";
import {GITHUB_URL, MAIL_URL} from "../../../data/GlobalConstants.tsx";

interface IAboutContainerProps {
    showAboutElement: boolean;
    setShowAboutElement: React.Dispatch<React.SetStateAction<boolean>>;
}

function OpenSourceLink(link: string){
    window.open(link, "_blank", "noreferrer");
}

function AboutContainer(props: IAboutContainerProps) {

    const handleClick = () => {
        props.setShowAboutElement(false);
    }

    return(
        <div className={"about-container"}>
            <div className={"about-background"}>
                <button className={"close-button"} onClick={() => handleClick()}>
                    &#10005;
                </button>
                <ViewerHeader headerText={"About"}/>
                <div className={"about-text-container"}>
                    <h4>Content:</h4>
                    <p>
                        This website uses data from the NASA EONET V3 API for visualization.
                        According to NASA, this data is for general information purposes only
                        and should not be construed as “official” with regards to spatial or temporal extent.
                    </p>
                </div>
                <div className={"about-text-container"}>
                    <h4>Development:</h4>
                    <p>
                        This website was developed by Laszlo Ferreyra as a university project for SAE Institutes Munich.<br/>
                        © TERRALERT 2024
                    </p>
                </div>
                <div className={"about-text-container"}>
                    <h4>Contact:</h4>
                    <table className={"about-icon-table"}>
                        <tbody>
                        <tr>
                            <td>
                                <div className={"about-icon-table-left"}>
                                    <img src={"src/assets/images/github-mark.png"}
                                         alt={"Github Logo"} height={"20px"}
                                         onClick={() => OpenSourceLink(GITHUB_URL)}/>
                                </div>
                            </td>
                            <td>
                                <div className={"about-icon-table-right"}>
                                    <img src={"src/assets/images/Gmail.png"}
                                         alt={"Gmail Logo"} height={"20px"}
                                         onClick={() => OpenSourceLink(MAIL_URL)}/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"about-text-container"}>
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