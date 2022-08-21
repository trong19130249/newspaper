export class Channel {
   copyright: string;
    description: string;
    image:string;
    link:string;
    title:string;
    constructor(copyright: string, description: string,image:string,link:string,title:string) {
        this.copyright = copyright;
        this.description = description;
        this.image = image;
        this.link=link;
        this.title=title;
    }

}
