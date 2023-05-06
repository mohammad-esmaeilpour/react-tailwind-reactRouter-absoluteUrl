import { pagesList } from "data/global/pageList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {pagesList.map((item, step) => (
            <Route key={step} path={item.path} element={item.page} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
