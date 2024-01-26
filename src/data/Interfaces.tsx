import {EventCategory, NaturalEvent} from "./Model.tsx";
import React from "react";

export interface IHeaderProps {
    headerText: string;
}

export interface IMainControlsContainerProps {
    category: EventCategory;
    setCategory: React.Dispatch<React.SetStateAction<EventCategory>>;
    showEventViewer: boolean;
    setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
    showAboutElement: boolean;
    setShowAboutElement: React.Dispatch<React.SetStateAction<boolean>>;
    showHelpElement: boolean;
    setShowHelpElement: React.Dispatch<React.SetStateAction<boolean>>;
    useSampleData : boolean;
    setUseSampleData: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICategoryRadioProps {
    setCategory: React.Dispatch<React.SetStateAction<EventCategory>>;
    category: EventCategory;
    showEventViewer: boolean;
    setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IInfoContainerProps {
    showAboutElement: boolean;
    setShowAboutElement: React.Dispatch<React.SetStateAction<boolean>>;
    showHelpElement: boolean;
    setShowHelpElement: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IGlobeContainerProps {
    width: number;
    height: number;
    isLoading: boolean;
    data: NaturalEvent[];
    category: EventCategory;
    showEventViewer: boolean;
    setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
    eventForViewer: NaturalEvent;
    setEventForViewer: React.Dispatch<React.SetStateAction<NaturalEvent>>;
}

export interface IEventViewerProps {
    event: NaturalEvent;
    showEventViewer: boolean;
    setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAboutContainerProps {
    showAbout: boolean;
    setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHelpContainerProps {
    showHelp: boolean;
    setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
}