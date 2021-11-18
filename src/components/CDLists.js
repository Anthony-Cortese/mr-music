import React from "react";
import { connect } from "react-redux";
import Albums from "./Albums";

function CDLists(props) {
  console.log("albums", props.albums);

  if (props.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {props.albums.map((album) => {
        return <Albums key={album.id} album={album} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    albums: state.albums,
  };
};

export default connect(mapStateToProps, {})(CDLists);
