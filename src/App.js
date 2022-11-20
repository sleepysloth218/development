import "./App.css";
import { useState } from "react";
import FilterPanel from "./components/FilterPanel";
import Song from "./components/Song";
import Playlist from "./components/Playlist";
import songs from "./assets/songs.json";

function sortData(sort, songData) {
  return songData.sort((song1, song2) => {
    switch (sort) {
      case "rank":
        return song1.rank - song2.rank;
      case "last rank":
        return song1.position.positionLastWeek === null
          ? 1
          : song2.position.positionLastWeek === null
          ? -1
          : song1.position.positionLastWeek === song2.position.positionLastWeek
          ? 0
          : song1.position.positionLastWeek - song2.position.positionLastWeek;
      case "weeks":
        return song2.position.weeksOnChart - song1.position.weeksOnChart;
      case "length":
        return song1.length - song2.length;
      default:
        return true;
    }
  });
}

function getArtists(songData) {
  const artistList = songData.map((song) => song.artist);
  const artists = artistList
    .filter((artist, index, self) => self.indexOf(artist) === index)
    .sort()
    .sort(
      (artist1, artist2) =>
        artistList.filter((artist) => artist === artist2).length -
        artistList.filter((artist) => artist === artist1).length
    );
  return artists;
}

function filterArtist(filters, song) {
  return filters.length > 0 ? filters.includes(song.artist) : true;
}

function filterStatus(filters, song) {
  if (filters.length === 0) return true;
  if (filters.includes("previous") && song.position.positionLastWeek !== null) {
    return true;
  }
  if (filters.includes("new") && song.position.positionLastWeek === null) {
    return true;
  }
  return false;
}

function App() {
  const [songData, setSongData] = useState(songs);
  const [playlist, setPlaylist] = useState([]);
  const [sort, setSort] = useState("rank");
  const [artistFilters, setArtistFilters] = useState([]);
  const [statusFilters, setStatusFilters] = useState([]);

  return (
    <div className="App">
      <FilterPanel
        sort={sort}
        artists={getArtists(songData)}
        artistFilters={artistFilters}
        statusFilters={statusFilters}
        clearFilters={() => {
          setArtistFilters([]);
          setStatusFilters([]);
        }}
        selectAllFilters={() => {
          setArtistFilters(getArtists(songData));
          setStatusFilters(["previous", "new"]);
        }}
        setSort={(newSort) => {
          setSort(newSort);
          setSongData(sortData(newSort, songData));
        }}
        toggleArtistFilter={(newFilter) => {
          const newFilters = !artistFilters.includes(newFilter)
            ? [...artistFilters, newFilter]
            : artistFilters.filter((filter) => filter !== newFilter);
          setArtistFilters(newFilters);
        }}
        toggleStatusFilter={(newFilter) => {
          const newFilters = !statusFilters.includes(newFilter)
            ? [...statusFilters, newFilter]
            : statusFilters.filter((filter) => filter !== newFilter);
          setStatusFilters(newFilters);
        }}
      />

      <div className="center-content">
        <h1>Billboard Top 100 Data</h1>
        <p>Week of November 12, 2022</p>
        <div className="song-list">
          {songData
            .filter(
              (song) =>
                filterArtist(artistFilters, song) &&
                filterStatus(statusFilters, song)
            )
            .map((song) => (
              <Song
                data={song}
                sort={sort}
                addToPlaylist={(song) => {
                  setPlaylist([...playlist, song]);
                }}
              />
            ))}
        </div>
      </div>

      <Playlist
        list={playlist}
        clearPlaylist={() => setPlaylist([])}
        removeFromPlaylist={(index) => {
          setPlaylist(playlist.filter((song, i) => index !== i));
        }}
      />
    </div>
  );
}

export default App;
