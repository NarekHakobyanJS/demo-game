import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./componenets/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import {Provider} from "react-redux"
import store from "./redux/index"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
