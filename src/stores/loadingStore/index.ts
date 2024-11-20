import { create } from "zustand";
import { LOADING_STATES } from "./constants";

type loadingStates = LOADING_STATES.IDDLE | LOADING_STATES.LOADING;

type loaderState = {
  loading: loadingStates;
  setLoading: (state: loadingStates) => void;
};

export const useLoaderStore = create<loaderState>()((set) => ({
  loading: LOADING_STATES.IDDLE,
  setLoading: (loading: loadingStates) => set((_) => ({ loading })),
}));
