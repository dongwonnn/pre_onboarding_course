import { INavData } from "../types/INavData";
import { ISearchData } from "../types/ISearchData";
import client from "./clinent";

export const getNavData = (data: INavData[]) => client.get("/navData");

export const getSearchListData = (data: ISearchData[]) =>
  client.get("/searchData");
