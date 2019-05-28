import axios from 'axios';

export default function ( context ){
    return axios.get(`https://itunes.apple.com/search?term=${context.params.id}&entity=album`).then((response) => {
        context.store.commit('setAlbums', response.data.results);
    })
}