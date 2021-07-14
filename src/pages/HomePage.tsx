import React from "react";
import AppLayout from "../components/AppLayout";
import GlobalNavBar from "../components/GlobalNavBar";
import SearchList from "../components/SearchList";

const HomePage = () => {
  return (
    <AppLayout>
      <GlobalNavBar />
      <SearchList />
    </AppLayout>
  );
};

export default HomePage;
