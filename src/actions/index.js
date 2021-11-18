import axios from "axios";

export const FETCH_START_ARTIST = "FETCH_START_ARTIST";
export const FETCH_SUCCESS_ARTIST = "FETCH_SUCCESS_ARTIST";
export const FETCH_FAIL_ARTIST = "FETCH_FAIL_ARTIST";
export const FETCH_START_ALBUM = "FETCH_START_ALBUM";
export const FETCH_SUCCESS_ALBUM = "FETCH_SUCCESS_ALBUM";
export const FETCH_FAIL_ALBUM = "FETCH_FAIL_ALBUM";

export const getArtistDetails = (textInput) => (dispatch) => {
  dispatch({ type: FETCH_START_ARTIST });

  const options = {
    method: "GET",
    url: "https://theaudiodb.p.rapidapi.com/search.php",
    params: { s: `${textInput}` },
    headers: {
      "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
      "x-rapidapi-key": "af56d019acmshfe8e25405fb6790p184547jsn889527ae26da",
    },
  };

  axios
    .request(options)
    .then((response) => {
      dispatch({ type: FETCH_START_ARTIST, payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: FETCH_FAIL_ARTIST, payload: error });
    });
};

export const getAlbumDetails = (textInput) => (dispatch) => {
  dispatch({ type: FETCH_START_ALBUM });
  const options1 = {
    method: "GET",
    url: "https://theaudiodb.p.rapidapi.com/searchalbum.php",
    params: { s: `${textInput}` },
    headers: {
      "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
      "x-rapidapi-key": "af56d019acmshfe8e25405fb6790p184547jsn889527ae26da",
    },
  };
  axios
    .request(options1)
    .then(function (response) {
      dispatch({ type: FETCH_SUCCESS_ALBUM, payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: FETCH_FAIL_ALBUM, payload: error });
    });
};
// export const fetchStart = () => {
//   return { type: FETCH_START_ARTIST };
// };

// export const fetchSuccess = (artists) => {
//   return { type: FETCH_SUCCESS_ARTIST, payload: artists };
// };

// export const fetchFail = (error) => {
//   return { type: FETCH_FAIL_ARTIST, payload: error };
// };

// export const fetchStartAlbum = () => {
//   return { type: FETCH_START_ALBUM };
// };

// export const fetchSuccessAlbum = (albums) => {
//   return { type: FETCH_SUCCESS_ALBUM, payload: albums };
// };

// export const fetchFailAlbum = (error) => {
//   return { type: FETCH_FAIL_ALBUM, payload: error };
// };
