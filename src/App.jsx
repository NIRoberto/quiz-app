import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DashboardLayout from "./components/layout/DashboardLayout";
import pages from "./pages/pages";
import Layout from "./components/layout/layout";
// Import other page components

const routes = [
  { path: "/", componentIndex: 0 },
  { path: "/about", componentIndex: 1 },
  { path: "/how-to-play", componentIndex: 2 },
  { path: "/game-library", componentIndex: 3 },
  { path: "/quiz/:name", componentIndex: 4 },
  { path:"/register", componentIndex: 5},
  { path:"/login", componentIndex: 6},
  // Add more routes as needed
];

// const dashboardRoutes = [
//   { path: "/dashboard", componentIndex: 0 },
//   { path: "/dashboard/analytics", componentIndex: 1 },
//   // Add more dashboard routes as needed
// ];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          const PageComponent = pages[route.componentIndex];
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <PageComponent />
                </Layout>
              }
            />
          );
        })}

        {/* {dashboardRoutes.map((route, index) => {
          const PageComponent = dashboardPages[route.componentIndex];
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <DashboardLayout>
                  <PageComponent />
                </DashboardLayout>
              }
            />
          );
        })} */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
