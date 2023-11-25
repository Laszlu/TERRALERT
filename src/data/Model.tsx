export class Categorie {
	public id: number;
	public title: string;

	public constructor(id: number, title: string) {
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

export class Geometrie {
	public magnitudeValue: number;
	public magnitudeUnit: string;
	public date: string;
	public type: string;
	public coordinates: number[];

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
	public categories: Categorie[];
	public sources: Source[];
	public geometry: Geometrie[];
	public closed: string;

	public constructor(
		id: string,
		title: string,
		description: string,
		link: string,
		categories: Categorie[],
		sources: Source[],
		geometry: Geometrie[],
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

