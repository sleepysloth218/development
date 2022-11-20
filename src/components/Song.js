import "../App.css";
import getTimeStamp from "../Utils";

export default function Song(props) {
  return (
    <div className="Song">
      <div className="song-header">
        <h2
          className="song-rank"
          style={props.sort === "rank" ? { color: "#459eff" } : {}}
        >
          {props.data.rank}
        </h2>
        <h2 className="song-title">{props.data.title}</h2>
        <h3 className="song-artist">{props.data.artist}</h3>
      </div>
      <div className="song-description">
        <img
          className="song-cover"
          src={props.data.cover}
          alt={props.data.title}
        />
        <p>
          rank last week:{" "}
          <b style={props.sort === "last rank" ? { color: "#459eff" } : {}}>
            {props.data.position.positionLastWeek ?? "-"}
          </b>
        </p>
        <p>
          weeks on chart:{" "}
          <b style={props.sort === "weeks" ? { color: "#459eff" } : {}}>
            {props.data.position.weeksOnChart}
          </b>
        </p>
        <p>
          duration:{" "}
          <b style={props.sort === "length" ? { color: "#459eff" } : {}}>
            {getTimeStamp(props.data.length)}
          </b>
        </p>
        <div
          className="add-button"
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            props.addToPlaylist(props.data);
          }}
        >
          <span className="material-symbols-outlined">add</span>
        </div>
      </div>
    </div>
  );
}
