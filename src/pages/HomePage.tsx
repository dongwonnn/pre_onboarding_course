import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppLayout from "../components/AppLayout";
import DummyCarousel from "../components/DummyCarousel";
import DummyCard from "../components/DummyCard";
import GlobalLayout from "../components/GlobalLayout";

import { loadNavigationRequest } from "../reducers/navigation";
import { loadFieldRequest } from "../reducers/field";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNavigationRequest());
    dispatch(loadFieldRequest());
  }, [dispatch]);

  return (
    <>
      <GlobalLayout>
        <DummyCarousel />
        <AppLayout>
          <DummyCard />
        </AppLayout>
      </GlobalLayout>
    </>
  );
};

export default HomePage;
