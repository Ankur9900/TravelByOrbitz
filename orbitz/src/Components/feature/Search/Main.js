import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "./Searchbar";
import { City } from "../utils/City";

  export default function Main() {
  const [Query, setQuery] = useState(" ");
  const [suggetsion, SetSuggestion] = useState([]);
  // console.log(Query);

  const queryHandler = useCallback((val) => {
    console.log(val);
    setQuery(val);
  });

  useEffect(() => {
    if (Query === "") {
      SetSuggestion([]);
    } else {
      let inputtext = Query.toLowerCase();
      let newsuggest = City.filter((item) => {
        return item.City.toLowerCase().indexOf(inputtext) !== -1
          ? true
          : false;
      }).map((item) => item.City);
      SetSuggestion(newsuggest);
      // console.log(newsuggest);
    }
  }, [Query]);

  return (
    <div>
      {/* <h1>Search Box </h1> */}
      {/* <h1>Search Query {Query} </h1> */}
      <SearchBar suggetsion={suggetsion} queryHandler={queryHandler} />
    </div>
  );
}
