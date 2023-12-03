import { proxy } from "valtio";

interface Option {
  name: string;
  icon: string;
}

interface State {
  processing: boolean;
  payCoin: Option | null;
  receiveCoin: Option | null;
}

const state = proxy<State>({
  processing: false,
  payCoin: null,
  receiveCoin: null,
});

export default state;
