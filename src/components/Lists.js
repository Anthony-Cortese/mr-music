import React from "react";
import { connect } from "react-redux";
import Artist from "./Artist";

function Lists(props) {
  console.log("lists", props.artists);

  if (props.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {props.artists.map((art) => {
        return (
          <li>
            {" "}
            <Artist key={art.id} art={art} />{" "}
          </li>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    artists: state.artists,
  };
};

export default connect(mapStateToProps, {})(Lists);
