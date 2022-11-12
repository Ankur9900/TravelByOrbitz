import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "./Searchbar";
import { India } from "../utils/Indiacity";

  export default function Main() {
  const [Query, setQuery] = useState(" ");
  const [suggetsion, SetSuggestion] = useState([]);
  console.log(Query);

  const queryHandler = useCallback((val) => {
    console.log(val);
    setQuery(val);
  });

  useEffect(() => {
    if (Query === "") {
      SetSuggestion([]);
    } else {
      let inputtext = Query.toLowerCase();
      let newsuggest = India.filter((item) => {
        return item.city.toLowerCase().indexOf(inputtext) !== -1
          ? true
          : false;
      }).map((item) => item.city);
      SetSuggestion(newsuggest);
    }
  }, [Query]);

  return (
    <div>
      <SearchBar suggetsion={suggetsion} queryHandler={queryHandler} />
    </div>
  );
}
