export class Serie {

    id: number;
    name: String;
    platform: String;
    seasons: number;
    description: String;
    serieLink: String;
    portraitLink: String;

    constructor(id: number, name: String, platform: String, seasons: number, description: String, serieLink: String, portraitLink: String) {
        this.id = id;
        this.name = name;
        this.platform = platform;
        this.seasons = seasons;
        this.description = description;
        this.serieLink = serieLink;
        this.portraitLink = portraitLink;
    }
}

