import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import GlobalNavBar from "../components/GlobalNavBar";
import SearchList from "../components/SearchList";
import BodyBlackout from "../assets/BodyBlackout";
const HomePage = () => {
  const [isSearchMouseOver, setIsSearchMouseOver] = useState(false);

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
