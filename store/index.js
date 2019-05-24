export const state = () => ({
    albums: []
  })
  

  export const actions = {
    
  } 
  
  export const mutations = {
    setAlbums (state, payload) {
      state.albums = payload;
    }
  }