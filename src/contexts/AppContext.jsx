import { createContext } from "react";

let AppContext = createContext({
  state: {},
  dispath: () => {},
});
export default AppContext;
