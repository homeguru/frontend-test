import Config from 'react-native-config';
import md5 from 'js-md5';

const PRIVATE_KEY = Config.MARVEL_PRIVATE_API_KEY;
const PUBLIC_KEY = Config.MARVEL_PUBLIC_API_KEY;
const BASE_URL = Config.MARVEL_API_BASE_URL;

export const getComicsByCharacterAppearance = async (
  characterId,
  offset = 0,
) => {
  const timestamp = 'thesoer';
  const hash = md5.create();
  hash.update(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
  return await fetch(
    `${BASE_URL}/public/comics?offset=${offset}&sharedAppearances=${characterId}&orderBy=onsaleDate&ts=thesoer&apikey=${PUBLIC_KEY}&hash=${hash}`,
  );
};
