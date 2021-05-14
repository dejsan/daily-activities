import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as constants from "../constants";
import { playSoundClick } from "../actions/app";
import ActivityItem from "../components/ActivityItem";
import "../assets/css/TrackYourActivity.css";

class TrackYourActivity extends React.Component {
  render() {
    const { playSoundClick } = this.props;
    return (
      <div className="track-your-activity-container">
        <span className="section-title">Track Your Activity</span>
        <div className="activity-cards-container">
          {constants.ACTIVITY_TYPES.map((activityType) => (
            <ActivityItem
              key={activityType.title}
              title={activityType.title}
              subtitle={activityType.subtitle}
              playSoundClick={playSoundClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      playSoundClick,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TrackYourActivity);
