import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

import AppLayout from "../components/AppLayout";
import DummyCarousel from "../components/DummyCarousel";
import DummyCard from "../components/DummyCard";
import GlobalLayout from "../components/GlobalLayout";

// 임시 data를 이용한 Redux
import { loadNavigationSuccess } from "../reducers/navigation";
import { loadFieldSuccess } from "../reducers/field";
import { navData } from "../lib/data";
import { fieldData } from "../lib/data";

/* ==================================================================== *
 // json server을 이용한 Saga Dispatch
  import { loadNavigationRequest } from "../reducers/navigation";
  import { loadFieldRequest } from "../reducers/field";
 * ==================================================================== */

const HomePage = () => {
  const dispatch = useDispatch();

  // 임시 data를 이용한 Redux
  useEffect(() => {
    dispatch(loadNavigationSuccess(navData));
    dispatch(loadFieldSuccess(fieldData));
  }, [dispatch]);

  /* =========================================== *
    // json server을 이용한 Redux Saga Dispatch
    useEffect(() => {
      dispatch(loadNavigationRequest());
      dispatch(loadFieldRequest());
    }, [dispatch]);
  * ============================================ */

  return (
    <>
      <Helmet>
        <title>커리어 여정을 행복하게, 원티드</title>
      </Helmet>
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
