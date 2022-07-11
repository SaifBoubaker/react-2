import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePhoto from "./component/Profile/ProfilePhoto";
import Navigation from "./component/Profile/navbar";
import FullName from "./component/Profile/FullName";
import Adress from "./component/Profile/Adress";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Adress></Adress>
    </div>
  );
}

export default App;
