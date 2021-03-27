import * as actions from './actions';
import * as services from '../services';

export const getComicsByCharacterAppearance = characterId => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(actions.getComicsAction.load());
    services.ApiMarvel.getComicsByCharacterAppearance(characterId)
      .then(async res => {
        if (res.ok) {
          const response = await res.json();
          resolve(response);
          const data = response.data;
          dispatch(actions.getComicsAction.success(data));
          dispatch(actions.storeComicsAction.store(data.results));
        } else {
          reject(res);
          dispatch(actions.getComicsAction.failure(res));
        }
      })
      .catch(err => {
        reject(err);
        dispatch(actions.getComicsAction.failure(err));
      });
  });
};

export const loadMoreComicsByCharacterAppearance = characterId => dispatch => {
  return new Promise((resolve, reject) => {
    const oldComicsData = global.store.getState().getComicsReducer.resource;
    const oldComics = global.store.getState().storeComicsReducerPersisted
      .comics;
    const quantityOfOldComics = oldComics.length;

    dispatch(actions.getComicsAction.loadMore());
    if (oldComicsData?.total === quantityOfOldComics) {
      const err = {message: 'Quantidade total de quadrinhos ja alcançada'};
      dispatch(actions.getComicsAction.loadMorefailure(err));
      return reject(err);
    }
    services.ApiMarvel.getComicsByCharacterAppearance(
      characterId,
      (offset = quantityOfOldComics + 1),
    )
      .then(async res => {
        if (res.ok) {
          const response = await res.json();
          resolve(response);
          const data = response.data;
          dispatch(actions.getComicsAction.loadMoreSuccess(data));
          const newComicsList = [...oldComics, ...data.results];
          dispatch(actions.storeComicsAction.store(newComicsList));
        } else {
          reject(res);
          dispatch(actions.getComicsAction.loadMorefailure(res));
        }
      })
      .catch(err => {
        reject(err);
        dispatch(actions.getComicsAction.loadMorefailure(err));
      });
  });
};
