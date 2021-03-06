import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";
import { Home, Section, NotFound } from "./pages";
import { Layout } from "./components";
import { SearchTermProvider } from "./contexts/SearchTermContext";

function App() {
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const el = document.querySelector(".loader-container");
    if (el) {
      el.remove();
      setLoading(!isLoading);
    }
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SearchTermProvider>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="sections/:slug" element={<Section />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </SearchTermProvider>
    </ThemeProvider>
  );
}

export default App;
