import { AppSidebar } from "@/frontend/components/app-sidebar";
import NotFoundPage from "@/frontend/components/pages/not-found-page";
import { useAuth } from "@/frontend/lib/context/auth-context";
import fetchWorkspaces from "@/frontend/lib/loaders/workspaces";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
  notFoundComponent: NotFoundPage,
  loader: fetchWorkspaces,
});

function DashboardLayout() {
  const { user, isLoading } = useAuth();

  if (!isLoading && !user) throw redirect({ to: "/auth/login" });

  return (
    <div className="flex h-screen w-full min-w-0 overflow-hidden">
      <AppSidebar />
      <main className="flex flex-1 flex-col overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
