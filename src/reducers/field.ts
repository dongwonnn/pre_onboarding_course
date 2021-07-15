import { IFieldData } from "../lib/types/IFieldData";

export const LOAD_FIELD_REQUEST = "LOAD_FIELD_REQUEST" as const;
export const LOAD_FIELD_SUCCESS = "LOAD_FIELD_SUCCESS" as const;
export const LOAD_FIELD_FAILURE = "LOAD_FIELD_FAILURE" as const;

export const loadFieldRequest = (payload: IFieldData[]) => ({
  type: LOAD_FIELD_REQUEST,
  payload,
});

export const loadFieldSuccess = (payload: IFieldData[]) => ({
  type: LOAD_FIELD_SUCCESS,
  payload,
});

export const loadFieldFailure = (payload: string) => ({
  type: LOAD_FIELD_FAILURE,
  payload,
});

// 액션 타입
type FieldAction =
  | ReturnType<typeof loadFieldRequest>
  | ReturnType<typeof loadFieldSuccess>
  | ReturnType<typeof loadFieldFailure>;

export const initialStete = {
  fieldData: [],
  fieldLoading: false,
  fieldError: null,
};

// 초기값 타입
type FieldState = {
  fieldData: IFieldData[] | null;
  fieldLoading: boolean;
  fieldError: string | null;
};

const field = (
  state: FieldState = initialStete,
  action: FieldAction
): FieldState => {
  switch (action.type) {
    case LOAD_FIELD_REQUEST:
      return {
        ...state,
        fieldLoading: true,
        fieldError: null,
      };
    case LOAD_FIELD_SUCCESS:
      return {
        ...state,
        fieldData: action.payload,
        fieldLoading: false,
        fieldError: null,
      };
    case LOAD_FIELD_FAILURE:
      return {
        ...state,
        fieldData: [],
        fieldLoading: false,
        fieldError: action.payload,
      };
    default:
      return state;
  }
};

export default field;
