import React from "react";

function Search({ search, setSearch}) {                                  // destructured props passed as arguments to Search component

  

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => setSearch(e.target.value)}                                     //targets values after each key stroke
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
