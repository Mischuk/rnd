import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomePage from "../../pages/HomePage";
import { fetchData } from "../../store/actions/user";
import "./App.scss";

function App({ user, getData }) {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="app s">
      <HomePage data={user} />
    </div>
  );
}

const mapStateToProps = store => {
  const { user } = store;

  return {
    user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
