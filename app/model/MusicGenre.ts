/**
 * Created by nicojs on 5/26/2015.
 */
import artistService from 'services/ArtistService';
import Artist from 'model/Artist';

export default
class MusicGenre {
    name:string;
    artists:Array<any>;
    artistCount: number;
    isActive: boolean;

    constructor(name:string) {
        this.name = name;
        this.artists = [];
        this.bootstrapArtists();
    }

    bootstrapArtists() {
         artistService.getByGenre(this.name).then(artistsResponse => this.fillArtists(artistsResponse));
    }

    fillArtists(artistsResponse) {
        this.artistCount = artistsResponse.total;
        artistsResponse.items.forEach(artistJson => this.artists.push(new Artist(artistJson)));
    }
}
