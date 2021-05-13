import "../assets/css/App.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { playSoundClick } from "../actions/app";

function App(props) {
  const { var1, var2, playSoundClick } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>Init react app</p>
        <p>var1= {var1}</p>
        <p>var2= {var2}</p>
        <button onClick={() => playSoundClick()}>Click sound</button>
      </header>
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
      playSoundClick
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
