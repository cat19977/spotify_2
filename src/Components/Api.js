import axios from 'axios';

const format_top_artists = (result) => {
    var new_list = []
    for(var i in result){
        var artist = result[i]
        var parsed = {'name': artist['name'], 'genres': artist['genres'], 'popularity': artist['popularity']}
        new_list.push(parsed)
    }
    return JSON.stringify(new_list)
}

const format_top_songs = (result) => {
    var new_list = []
    for(var i in result){
        var song = result[i]
        var parsed = {'name': song['name'], 'popularity': song['popularity'], 'id': song['id'], 
            'duration': song['duration_ms'], 'artist': song['artists'][0]['name'], 
            'release_date':song['album']['release_date'], 'img':song['album']['images'][0]['url']}
        new_list.push(parsed)
    }
    return JSON.stringify(new_list)
}

export const initiateGetTopResult = async (term, type) => {
    const token = localStorage.getItem('token')
    const AuthStr = 'Bearer '.concat(token);
    const key = type.concat('_', term);
      try {
        const API_URL = `https://api.spotify.com/v1/me/top/${type}?time_range=${term}_term&limit=50`;
        axios.get(API_URL, { headers: { Authorization: AuthStr } }).then(
            (result) => {
                if(type === 'artists'){
                    localStorage.setItem(key,format_top_artists(result['data']['items']))
                }
                else{
                    localStorage.setItem(key,format_top_songs(result['data']['items']))
                }
            });
      }
      catch (error) {
        console.log('error', error);
        console.log('didnt')
        return null
      }
    }
 