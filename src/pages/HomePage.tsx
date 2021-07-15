import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppLayout from "../components/AppLayout";
import DummyCarousel from "../components/DummyCarousel";
import DummyCard from "../components/DummyCard";
import GlobalLayout from "../components/GlobalLayout";

import { loadNavigationRequest } from "../reducers/navigation";
import { loadFieldRequest } from "../reducers/field";

import { navData } from "../lib/data";
import { searchData } from "../lib/data";

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
