import { Categories } from "containers/categories/categories";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";

export const Router = () => {
  const authenticated = true;

  return (
    <Routes>
      <Route path="/">
        {authenticated ? (
          <>
            <Route element={<Layout />}>
              <Route index element={<Categories />} />
            </Route>
          </>
        ) : (
          <>
            <Route index element={<div>login</div>} />
          </>
        )}
      </Route>
    </Routes>
  );
};
