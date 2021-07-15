import client from "./client";

export const getNavData = () => client.get("/nav");
export const getFieldData = () => client.get("/field");
