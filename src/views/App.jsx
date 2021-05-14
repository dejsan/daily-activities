import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { playSoundClick } from "../actions/app";

import "../assets/css/App.css";
import AppLogo from "../assets/images/logo_header_wide.svg";

import TrackYourActivity from "../containers/TrackYourActivity";
import ScheduledActivities from "../containers/ScheduledActivities";
import ActivityHistory from "../containers/ActivityHistory";

function App(props) {
  const { var1, var2, playSoundClick } = props;
  return (
    <div className="app-container">
      <div className="app">
        <div className="logo-container">
          <img src={AppLogo} alt="App logo" className="logo" />
        </div>
        <div className="content">
          <TrackYourActivity />
          <ScheduledActivities />
          <ActivityHistory />
        </div>
      </div>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
