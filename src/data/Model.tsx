export enum EventCategory {
	Storms = "severeStorms",
	Wildfires = "wildfires",
	Volcanoes = "volcanoes",
	Earthquakes = "earthquakes",
	Floods = "floods",
	Landslides = "landslides",
	ExtremeTemperatures = "tempExtremes",
	None = "None"
}

export class Category {
	public id: string;
	public title: string;

	public constructor(id: string, title: string) {
		this.id = id;
		this.title = title;
	}
}

export class Source {
	public id: string;
	public url: string;

	public constructor(id: string, url: string) {
		this.id = id;
		this.url = url;
	}
}

export class Geometry {
	public magnitudeValue: number;
	public magnitudeUnit: string;
	public date: string;
	public type: string;
	// In EONET Lat is [1] and Lng is [0]
	public coordinates: number[] | number[][];

	public constructor(
		magnitudeValue: number,
		magnitudeUnit: string,
		date: string,
		type: string,
		coordinates: number[]
	) {
		this.magnitudeValue = magnitudeValue;
		this.magnitudeUnit = magnitudeUnit;
		this.date = date;
		this.type = type;
		this.coordinates = coordinates;
	}
}

export class NaturalEvent {
	public id: string;
	public title: string;
	public description: string;
	public link: string;
	public categories: Category[];
	public sources: Source[];
	public geometry: Geometry[];
	public closed: string;

	public constructor(
		id: string,
		title: string,
		description: string,
		link: string,
		categories: Category[],
		sources: Source[],
		geometry: Geometry[],
		closed: string
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.link = link;
		this.categories = categories;
		this.sources = sources;
		this.geometry = geometry;
		this.closed = closed;
	}
}

export class EventList {
	public title: string;
	public description: string;
	public link: string;
	public events: NaturalEvent[];

	public constructor(
		title: string,
		description: string,
		link: string,
		events: NaturalEvent[]
	) {
		this.title = title;
		this.description = description;
		this.link = link;
		this.events = events;
	}
}
