import { AppBar } from "../AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
