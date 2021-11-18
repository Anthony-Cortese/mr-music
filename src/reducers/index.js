import {
  FETCH_START_ARTIST,
  FETCH_SUCCESS_ARTIST,
  FETCH_FAIL_ARTIST,
  FETCH_START_ALBUM,
  FETCH_SUCCESS_ALBUM,
  FETCH_FAIL_ALBUM,
} from "../actions";

export const initialState = {
  albums: [
    {
      strAlbumThumb: "",
      strAlbumThumbBack: "",
      strAlbumCDart: "",
      strAlbum: "",
      intYearReleased: "",
      strLabel: "",
      strDescriptionEN: "",
    },
  ],
  artists: [
    {
      strArtistBanner: "",
      strArtistThumb: "",
      strArtist: "",
      intMembers: "",
      intFormedYear: "",
      strCountry: "",
      strGenre: "",
      strBiographyEN: "",
      strArtistFanart: "",
      strArtistFanart1: "",
      strArtistFanart2: "",
      strArtistFanart3: "",
      strArtistFanart4: "",
    },
  ],
  fetching: false,
  fetched: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START_ARTIST:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_SUCCESS_ARTIST:
      return {
        ...state,
        fetching: false,
        fetched: true,
        artists: action.payload.data.artists,
      };
    case FETCH_FAIL_ARTIST:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    case FETCH_START_ALBUM:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_SUCCESS_ALBUM:
      return {
        ...state,
        fetching: false,
        fetched: true,
        albums: action.payload.data.albums,
      };
    case FETCH_FAIL_ALBUM:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
