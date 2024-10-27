import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import CoursePage from "./pages/CoursePage";
import CourseList from "./pages/CourseList";
import CourseContentPage from "./pages/CourseContentPage";
import MaterialUploadPage from "./pages/MaterialUploadPage";
import CourseCategoryContentPage from "./pages/CourseCategoryContentPage";
import MaterialViewPage from "./pages/MaterialViewPage";
import PendingMaterialViewPage from "./pages/PendingMaterialViewPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/auth-callback"
        element={<AuthCallbackPage />}
      ></Route>

      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/course/:category"
          element={
            <Layout>
              <CourseList />
            </Layout>
          }
        />
        <Route
          path="/course/:category/:code"
          element={
            <Layout>
              <CourseContentPage />
            </Layout>
          }
        />
        <Route
          path="/course/:category/:code/:materialCategory"
          element={
            <Layout>
              <CourseCategoryContentPage />
            </Layout>
          }
        />
        <Route
          path="/course/new"
          element={
            <Layout>
              <CoursePage />
            </Layout>
          }
        />
        <Route
          path="/material"
          element={
            <Layout>
              <MaterialViewPage />
            </Layout>
          }
        />
        <Route
          path="/material/new"
          element={
            <Layout>
              <MaterialUploadPage />
            </Layout>
          }
        />
        <Route
          path="/material/statusPending"
          element={
            <Layout>
              <PendingMaterialViewPage />
            </Layout>
          }
        />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;
