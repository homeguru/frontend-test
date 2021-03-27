export const getComicsState = {
  getComicsStatus: state => {
    const {isLoading, isLoaded, failure} = state.getComicsReducer;
    return {isLoading, isLoaded, failure};
  },
  getComicsResult: state => {
    const {resource} = state.getComicsReducer;
    return resource;
  },
};

export const storeComicsState = {
  getComicsStored: state => {
    const {comics} = state.storeComicsReducerPersisted;
    return comics;
  },
};
