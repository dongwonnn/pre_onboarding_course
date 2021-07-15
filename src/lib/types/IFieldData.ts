export interface IDetails {
  id: number;
  detailCategory: string;
}

export interface IFieldData {
  id: number;
  category: string;
  details?: IDetails[];
}
