import React from "react";
import { connect } from "react-redux";

function Artist(props) {
  const { art } = props;
  return (
    <section id="artists">
      <div className="banner-div">
        <img className="banner-img" alt="banner">
          {art.strArtistBanner}
        </img>
      </div>
      <div className="artists-info">
        <h3>{art.strArtist}</h3>
      </div>
    </section>
  );
}

// strArtistBanner: "",
//       strArtistThumb: "",
//       strArtist: "",
//       intMembers: "",
//       intFormedYear: "",
//       strCountry: "",
//       strGenre: "",
//       strBiographyEN: "",
//       strArtistFanart: "",
//       strArtistFanart1: "",
//       strArtistFanart2: "",
//       strArtistFanart3: "",
//       strArtistFanart4: "",

export default Artist;
