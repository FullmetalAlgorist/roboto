export const state = () => ({
    albums: []
  })
  
  export const actions = {
    
  } 
  
  export const mutations = {
    setAlbums (state, payload) {
      console.log(payload);
      state.albums = payload;
    }
  }