import { INPUT_FILTER } from "../types";

export const inputHandlerFilters = (value) => ({
  type: INPUT_FILTER,
  payload: value,
});
