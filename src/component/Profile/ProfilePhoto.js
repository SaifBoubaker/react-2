import profileimg from "./profileimg.jpg";
import "./ProfilePhoto.css";

function ProfilePhoto() {
  return (
    <div className="Home">
      <img className="photo" src={profileimg} alt="img"></img>
      <h2>
        Programs For You
        <h4> Choose what you want && Go deeper. </h4>
      </h2>
    </div>
  );
}

export default ProfilePhoto;
