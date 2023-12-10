import { proxy } from "valtio";

interface Option {
  name: string;
  icon: string;
  tag: string;
}

interface State {
  success: boolean;
  processing: boolean;
  payCoin: Option | null;
  receiveCoin: Option | null;
}

const state = proxy<State>({
  success: false,
  processing: false,
  payCoin: null,
  receiveCoin: null,
});

export default state;
