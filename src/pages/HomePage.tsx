import React, { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import GlobalNavBar from "../components/GlobalNavBar";
import SearchList from "../components/SearchList";
import BodyBlackout from "../assets/BodyBlackout";
import { useDispatch } from "react-redux";
import { navData } from "../lib/data";
import { searchData } from "../lib/data";

import { loadNavigationRequest } from "../reducers/navigation";
import { loadSearchListRequest } from "../reducers/searchList";

const HomePage = () => {
  const [isSearchMouseOver, setIsSearchMouseOver] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadNavigationRequest(navData));
    dispatch(loadSearchListRequest(searchData));
  }, [dispatch]);

  return (
    <AppLayout>
      <GlobalNavBar setIsSearchMouseOver={setIsSearchMouseOver} />
      {isSearchMouseOver && <SearchList />}
      {isSearchMouseOver && (
        <BodyBlackout setIsSearchMouseOver={setIsSearchMouseOver} />
      )}
    </AppLayout>
  );
};

export default HomePage;
