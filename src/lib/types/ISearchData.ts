export interface IDetails {
  id: number;
  detailCategory: string;
}

export interface ISearchData {
  id: number;
  category: string;
  details?: IDetails[];
}
