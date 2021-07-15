import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import { useDispatch } from "react-redux";
import { navData } from "../lib/data";
import { searchData } from "../lib/data";

import { loadNavigationRequest } from "../reducers/navigation";
import { loadFieldRequest } from "../reducers/field";
import DummyCarousel from "../components/DummyCarousel";
import DummyCard from "../components/DummyCard";
import GlobalLayout from "../components/GlobalLayout";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNavigationRequest(navData));
    dispatch(loadFieldRequest(searchData));
  }, [dispatch]);

  return (
    <GlobalLayout>
      <DummyCarousel />
      <AppLayout>
        <DummyCard />
      </AppLayout>
    </GlobalLayout>
  );
};

export default HomePage;
