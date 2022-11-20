import "../App.css";
import getTimeStamp from "../Utils";

export default function PlaylistItem(props) {
  return (
    <div className="PlaylistItem">
      <img
        src={props.song.cover}
        alt={props.song.title}
        className="playlist-item-img"
      ></img>
      <div className="item-content">
        <h3>{props.song.title}</h3>
        <p>{props.song.artist}</p>
        <p>{getTimeStamp(props.song.length)}</p>
      </div>
      <div
        className="remove-button"
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.removeFromPlaylist(props.index);
        }}
      >
        <span className="material-symbols-outlined">close</span>
      </div>
    </div>
  );
}
