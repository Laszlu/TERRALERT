import '../assets/styles/App.css';
import {
    GlobeContainer,
    MainControlsContainer,
    MainHeaderContainer,
    AboutContainer, HelpContainer
} from '../components/ui/container/ContainerIndex.tsx';
import * as globalConstants from '../data/GlobalConstants.tsx';
import useWindowDimensions from '../hooks/WindowDimensionsHook.tsx';
import {Categorie, EventCategory, EventList, Geometry, NaturalEvent, Source} from '../data/Model.tsx';
import useFetchHook from 'react-fetch-hook';
import {useState} from "react";
import EventViewer from "../components/ui/container/EventViewer.tsx";

let emptyEvent =
    new NaturalEvent("none", "none", "none", "none",
        [new Categorie("none", "none")], [new Source("none", "none")],
        [new Geometry(0, "none", "none", "none", [0, 0])],
        "none")

function SwitchCategory(type: EventCategory, data: EventList | undefined) {
    let dataSubset;

    //TODO: change to display live data
    if(typeof data !== undefined){
        switch (type) {
            case EventCategory.Storms:
                dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Volcanoes);
                //dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Storms);
                return dataSubset;
            case EventCategory.Earthquakes:
                dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Volcanoes);
                //dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Earthquakes);
                return dataSubset;
            case EventCategory.Volcanoes:
                dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Volcanoes);
                return dataSubset;
            case EventCategory.Wildfires:
                dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Wildfires);
                return dataSubset;
            case EventCategory.Floods:
                dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Floods);
                return dataSubset;
            case EventCategory.Landslides:
                dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Landslides);
                return dataSubset;
            case EventCategory.ExtremeTemperatures:
                dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.ExtremeTemperatures);
                //dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Storms);
                return dataSubset;
            case EventCategory.None:
                dataSubset = new Array<NaturalEvent>();
                return dataSubset;
        }
    }
}

function App() {
    const [category, setCategory] = useState(EventCategory.Storms);
    const [eventForViewer, setEventForViewer] = useState(emptyEvent);
    const [showEventViewer, setShowEventViewer] = useState(false);
    const [showAboutElement, setShowAboutElement] = useState(false);
    const [showHelpElement, setShowHelpElement] = useState(false);

  const { width, height } = useWindowDimensions();

  const {isLoading, data, error} =
      useFetchHook<EventList>(globalConstants.EONET_URL);

  if (isLoading) {
      return (
          <>
              <MainHeaderContainer headerText={globalConstants.APP_NAME}/>
              <MainControlsContainer category={category}
                                     setCategory={setCategory}
                                     showAboutElement={showAboutElement}
                                     setShowAboutElement={setShowAboutElement}
                                     showHelpElement={showHelpElement}
                                     setShowHelpElement={setShowHelpElement}
                                     showEventViewer={showEventViewer}
                                     setShowEventViewer={setShowEventViewer}/>
              <GlobeContainer width={width}
                              height={height}
                              isLoading={isLoading}
                              data={[]}
                              category={EventCategory.None}
                              eventForViewer={eventForViewer}
                              setEventForViewer={setEventForViewer}
                              showEventViewer={showEventViewer}
                              setShowEventViewer={setShowEventViewer}/>
          </>
      )
  }
  else {
      let Events = SwitchCategory(category, data);

      if(Events[0] !== undefined)
      {
          console.log(Events[0].categories[0].id)
      }
      console.log(Events);

      return (
          <>
              <MainHeaderContainer headerText={globalConstants.APP_NAME}/>
              <MainControlsContainer category={category}
                                     setCategory={setCategory}
                                     showAboutElement={showAboutElement}
                                     setShowAboutElement={setShowAboutElement}
                                     showHelpElement={showHelpElement}
                                     setShowHelpElement={setShowHelpElement}
                                     showEventViewer={showEventViewer}
                                     setShowEventViewer={setShowEventViewer}/>
              <GlobeContainer width={width}
                              height={height}
                              data={Events}
                              isLoading={isLoading}
                              category={category}
                              eventForViewer={eventForViewer}
                              setEventForViewer={setEventForViewer}
                              showEventViewer={showEventViewer}
                              setShowEventViewer={setShowEventViewer}/>
              <div>
                  {showEventViewer ? (
                      <EventViewer event={eventForViewer}
                                   showEventViewer={showEventViewer}
                                   setShowEventViewer={setShowEventViewer}/>
                  ) : (
                      <></>
                  )}
              </div>
              <div>
                  {showAboutElement ? (
                      <AboutContainer showAboutElement={showAboutElement}
                                      setShowAboutElement={setShowAboutElement}/>
                  ) : (
                      <></>
                  )}
              </div>
              <div>
                  {showHelpElement ? (
                      <HelpContainer showHelpElement={showHelpElement}
                                      setShowHelpElement={setShowHelpElement}/>
                  ) : (
                      <></>
                  )}
              </div>
          </>
      )
  }

}

export default App
