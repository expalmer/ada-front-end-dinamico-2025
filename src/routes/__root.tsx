import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../ui/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="container m-auto">
        <Header />
        <main className="m-auto max-w-4xl pt-12 px-8 pb-8 flex flex-col gap-24">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
