import "./App.css";
import i18next from "i18next";
import { NAMESPACE } from "./locales/config";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

i18next.loadNamespaces(NAMESPACE, () => {
  console.log("locales loaded");
});
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
