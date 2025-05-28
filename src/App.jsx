import { Suspense, lazy } from "react";
import "./App.css";
import Article from "./pages/Article";
import Gallery from "./pages/Gallery";
import Loading from "./components/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import PlanYourVisit from "./pages/PlanYourVisit/Index";

// Lazy load pages
const Home = lazy(() => import("./pages/Home/"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            />
            <Route
              path="/gallery"
              element={
                <MainLayout>
                  <Gallery />
                </MainLayout>
              }
            />
            <Route
              path="/plan-your-visit"
              element={
                <MainLayout>
                  <PlanYourVisit />
                </MainLayout>
              }
            />
            <Route
              path="/article/:slug"
              element={
                <MainLayout>
                  <Article />
                </MainLayout>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
