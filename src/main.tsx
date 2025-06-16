import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainPage from "./MainPage.tsx";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { cacheRtl, themeRtl } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themeRtl}> 
        <MainPage />
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
