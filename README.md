# Development

### Link to Deployed Website
https://sleepysloth218.github.io/development/

### Goal and Value of the Application
The goal of this application is to be able to sort and filter through the current most popular songs as per the Billboard Top 100 list, and select certain songs for a playlist.

### Usability Principles Considered


### Organization of Components
`App.js` is made up of 3 main sections:
1. `FilterPanel`: contains sorting and filtering options for the song list
2. song list: main center section of site which contains a grid of songs that get sorted and filtered. List of song data is mapped to `Song` components that render info cards for each song.
3. `Playlist`: aggregator which shows a list of all songs that the user has added to their playlist with total length of the playlist. Each song in the playlist is rendered by a `PlaylistItem` component.

### How Data is Passed Down Through Components
`App.js` manages list of all songs, list of songs in playlist, and which sorts and filters are currently applied. It passes the filters as props to the `FilterPanel` component and passes list of songs in playlist as props to `Playlist`. It passes the song information to each `Song` component that is rendered. Similarly the `Playlist` passes song data to each `PlaylistItem` component.

Each containing component also passes functions to each component it renders for modifying the relevant data (ex: `App` passes `Song` a function to add to playlist so that `Song` can render the add button)

### How the User Triggers State Changes
The user triggers state changes by selecting one of the input options for sorting and filtering or by selecting the buttons that can be used to add items to playlists, remove items, clear the playlist, clear or select all filters.
