import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { getArtistDetails, getAlbumDetails } from "../actions/index";
import Artist from "./Artist";
export function Music(props) {
  const { getArtistDetails, getAlbumDetails } = props;
  const [searchBarValue, setSearchBarValue] = useState("");

  console.log("lists", props.artists);

  useEffect(() => {
    getArtistDetails();
  }, [getArtistDetails]);

  useEffect(() => {
    getAlbumDetails();
  }, [getAlbumDetails]);

  const handleChange = (event) => {
    setSearchBarValue(event.target.value);
    console.log(searchBarValue);
  };

  const searchbarSubmit = () => {
    const searchValueLowerCase = searchBarValue.toLowerCase();
    props.getArtistDetails(searchValueLowerCase);
    props.getAlbumDetails(searchValueLowerCase);

    console.log("artists", props.getArtistDetails);
    console.log("artists", props.getAlbumDetails);
  };

  const searchWithEnter = (event) => {
    if (event.keyCode === 13) {
      searchbarSubmit();
    }
  };

  return (
    <section id="searchbar">
      <div className="search-div">
        <p className="searches">Search below by name of your favorite artist</p>
        <input
          className="searchBarField"
          type="text"
          name="searchBar"
          value={searchBarValue}
          onChange={handleChange}
          onKeyDown={searchWithEnter}
        ></input>
        <button onClick={() => searchbarSubmit()}>Search Artists</button>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    artists: state.artists,
  };
};

export default connect(mapStateToProps, { getArtistDetails, getAlbumDetails })(
  Music
);
