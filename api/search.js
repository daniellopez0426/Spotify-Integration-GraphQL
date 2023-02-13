import { _fetch } from "./";

export const search = async (searchTxt, type) =>
  await _fetch(
    `https://api.spotify.com/v1/search?q=${searchTxt}&type=${type.toLowerCase()}`
  );
