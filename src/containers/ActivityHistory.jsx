import React from "react";

import * as constants from "../constants";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { playSoundClick } from "../actions/app";

import "../assets/css/ActivityHistory.css";

class ActivityHistory extends React.Component {
  render() {
    return (
      <div className="activity-history-container">
        <span className="section-title">Activity History</span>
        <span className="section-text">
          You haven’t tracked any activities yet.
        </span>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  var1: app.var1,
  var2: app.var2,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      playSoundClick,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ActivityHistory);
