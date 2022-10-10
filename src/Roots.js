import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Location from "./pages/location/Location";
import NotFound from "./components/notFound/NotFound"
import APropos from "./pages/aPropos/APropos";
import { Outlet } from "react-router-dom";

export const routes =
[
    {
      path: "/",
      element: <Layout />,
      children: [
        { 
            index: true, 
            element: <Home /> 
        },
        {
          path: "fiche-logement/:id",
          element: <Location />,
        },
        { 
          path: "fiche-logement/*", 
          element: <NotFound /> 
        },
        {
          path: "apropos",
          element: <APropos />,
        },
        { 
            path: "*", 
            element: <NotFound /> 
        },
      ],
    },
  ];

  function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
  }