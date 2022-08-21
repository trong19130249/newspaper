export class Item{
    title:string;
    category:string;
    description:string;
    image:string;
    link:string;
    updated:string;
    constructor(title:string,category:string,description:string,image:string,link:string,updated:string){
        this.title=title;
        this.category=category;
        this.description=description;
        this.image=image;
        this.link=link;
        this.updated=updated;
    }
}
