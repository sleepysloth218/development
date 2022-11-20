import "../App.css";

export default function FilterPanel(props) {
  return (
    <div className="FilterPanel">
      <div className="sort-categories">
        <h2>Sort by</h2>
        <div className="sort-option">
          <input
            type={"radio"}
            name="sort"
            checked={props.sort === "rank"}
            onChange={() => props.setSort("rank")}
          />
          <p className="input-label">Rank</p>
        </div>
        <div className="sort-option">
          <input
            type={"radio"}
            name="sort"
            checked={props.sort === "last rank"}
            onChange={() => props.setSort("last rank")}
          />
          <p className="input-label">Last week's rank</p>
        </div>
        <div className="sort-option">
          <input
            type={"radio"}
            name="sort"
            checked={props.sort === "weeks"}
            onChange={() => props.setSort("weeks")}
          />
          <p className="input-label">Number of weeks on chart</p>
        </div>
        <div className="sort-option">
          <input
            type={"radio"}
            name="sort"
            checked={props.sort === "length"}
            onChange={() => props.setSort("length")}
          />
          <p className="input-label">Song length</p>
        </div>
      </div>

      <div className="filter-categories">
        <h2>Filter by</h2>
        <h3>Artist</h3>
        <div className="filter-subcategories artists">
          {props.artists.map((artist) => (
            <div className="filter-option">
              <input
                type={"checkbox"}
                name="filter"
                checked={props.artistFilters.includes(artist)}
                onChange={() => {
                  props.toggleArtistFilter(artist);
                }}
              />
              <p className="input-label">{artist}</p>
            </div>
          ))}
        </div>

        <h3>Chart status</h3>
        <div className="filter-subcategories">
          <div className="filter-option">
            <input
              type={"checkbox"}
              name="filter"
              checked={props.statusFilters.includes("previous")}
              onChange={() => props.toggleStatusFilter("previous")}
            />
            <p className="input-label">Ranked last week</p>
          </div>
          <div className="filter-option">
            <input
              type={"checkbox"}
              name="filter"
              checked={props.statusFilters.includes("new")}
              onChange={() => props.toggleStatusFilter("new")}
            />
            <p className="input-label">First week on charts</p>
          </div>
        </div>
      </div>

      <div
        className="clear-button"
        onPointerDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
          props.clearFilters();
        }}
      >
        clear filters
      </div>
      <div
        className="clear-button"
        onPointerDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
          props.selectAllFilters();
        }}
      >
        select all
      </div>
    </div>
  );
}
