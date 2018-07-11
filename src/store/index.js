import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
}

export const store = createStore(reducer, initialState);
