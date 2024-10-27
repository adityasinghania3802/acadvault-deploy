import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "@/layouts/layout";
import LoadingButton from "@/components/LoadingButton";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center">
          <LoadingButton />
        </div>
      </Layout>
    );
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/"
      replace
    />
  );
};

export default ProtectedRoute;
