import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { playSoundClick } from "../actions/app";

import "../assets/css/ScheduledActivities.css";

class ScheduledActivities extends React.Component {
  render() {
    return (
      <div className="scheduled-activities-container">
        <span className="section-title">Scheduled Activities</span>
        <span className="section-text">
          You don’t have any activities scheduled yet.
        </span>
        <div className="schedule-button" onClick={() => playSoundClick()}>
          <i className="schedule-button-icon" />
          <span className="noselect">Schedule activity</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      playSoundClick,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduledActivities);
