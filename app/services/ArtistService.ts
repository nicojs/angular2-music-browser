/**
 * Created by nicojs on 5/28/2015.
 */

class ArtistService {

    getByGenre(genre: String) : any{
        genre = window['encodeURIComponent'](genre);
        return window['fetch'](`https://api.spotify.com/v1/search?q=genre:%22${genre}%22&type=artist`)
            .then(response => response.json())
            .then(artistResponseJson => artistResponseJson.artists)
            .then(artistResponse => {console.log(artistResponse); return artistResponse;});
    }
}

export default new ArtistService();