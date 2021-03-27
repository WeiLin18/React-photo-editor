import React from "react";
import PhotoPage from "./pages/PhotoPage";
import { CardProvider } from "./CardContext";
import "./style/styles.scss";
const App = () => {
  return (
    <div className="App">
      <CardProvider>
        <PhotoPage />
      </CardProvider>
    </div>
  );
};

export default App;
