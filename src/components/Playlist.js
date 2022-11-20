import "../App.css";
import PlaylistItem from "./PlaylistItem";
import getTimeStamp from "../Utils";

export default function Playlist(props) {
  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      {props.list.map((song, index) => (
        <PlaylistItem
          index={index}
          song={song}
          removeFromPlaylist={props.removeFromPlaylist}
        />
      ))}
      {props.list.length > 0 ? (
        <div className="playlist-footer">
          <div>
            <p>
              Playlist duration:{" "}
              <b>
                {getTimeStamp(
                  props.list
                    .map((song) => song.length)
                    .reduce((sum, length) => sum + length, 0)
                )}
              </b>
            </p>
          </div>
          <div
            className="clear-button"
            onPointerDown={(e) => {
              e.stopPropagation();
              e.preventDefault();
              props.clearPlaylist();
            }}
          >
            clear
          </div>
        </div>
      ) : (
        <p>Click "+" to add a song</p>
      )}
    </div>
  );
}
