import { INavData } from "../types/INavData";
import { IFieldData } from "../types/IFieldData";
import client from "./client";

export const getNavData = (data: INavData[]) => client.get("/navData");

export const getFieldData = (data: IFieldData[]) => client.get("/fieldData");
