/**
 * Created by nicojs on 5/28/2015.
 */

export default
class Artist {
    name:string;
    url: string;
    imageUrl: string;
    thumbUrl: string;

    constructor(json){
        this.url = json.external_urls.spotify;
        this.name = json.name;
        this.imageUrl = json.images[0]['url'];
        this.thumbUrl = json.images[json.images.length-1]['url'];
    }
}