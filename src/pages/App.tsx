import '../assets/styles/App.css';
import {
    GlobeContainer,
    MainControlsContainer,
    MainHeaderContainer
} from '../components/ui/container/ContainerIndex.tsx';
import * as globalConstants from '../data/GlobalConstants.tsx';
import useWindowDimensions from '../hooks/WindowDimensionsHook.tsx';
import {EventCategory, EventList, NaturalEvent} from '../data/Model.tsx';
import useFetchHook from 'react-fetch-hook';
import {useState} from "react";

function TestClick() {
  console.log("test");
}

function SwitchCategory(type: EventCategory, data: EventList) {
    let dataSubset;

    switch (type) {
        case EventCategory.Storms:
            dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Storms);
            return dataSubset;
        case EventCategory.Earthquakes:
            dataSubset = data.events.filter(e => e.categories[0].id === EventCategory.Storms);
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
            return dataSubset;
        case EventCategory.None:
            dataSubset = new Array<NaturalEvent>();
            return dataSubset;
    }
}

function App() {
    const [category, setCategory] = useState(EventCategory.Storms);

  const { width, height } = useWindowDimensions();

  const {isLoading, data, error} =
      useFetchHook<EventList>(
      "https://eonet.gsfc.nasa.gov/api/v3/events"
  );

  if (isLoading) {
      return (
          <>
              <MainHeaderContainer headerText={globalConstants.APP_NAME}/>
              <MainControlsContainer category={category}
                                     setCategory={setCategory}/>
              <GlobeContainer width={width}
                              height={height}
                              isLoading={isLoading}
                              data={[]}
                              category={EventCategory.None}
                              click={() => TestClick()}/>
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
              <MainControlsContainer category={category} setCategory={setCategory}/>
              <GlobeContainer width={width}
                              height={height}
                              data={Events}
                              isLoading={isLoading}
                              category={category}
                              click={() => TestClick()}/>
              {/*<EventViewer event={Events[0] as NaturalEvent} /> TODO: Open Eventviewer onclick */}
          </>
      )
  }

}

export default App
