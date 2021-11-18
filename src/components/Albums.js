import React from "react";
import { connect } from "react-redux";

function Albums(props) {
  const { album } = props;

  return (
    <section>
      <div className="album-img">
        <img className="front" alt="album-front">
          {/* {props.album.strAlbumThumb} */}
        </img>
      </div>
    </section>
  );
}

export default Albums;

// {
//     strAlbumThumb: "",
//     strAlbumThumbBack: "",
//     strAlbumCDart: "",
//     strAlbum: "",
//     intYearReleased: "",
//     strLabel: "",
//     strDescriptionEN: "",
//   },
