import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./ui/Spinner";
import './index.css';
import '@radix-ui/themes/styles.css';
import AppLayout from "./layouts/AppLayout";
import Error from "./ui/Error";
import UserLayout from "./layouts/Userlayout";
import UserDashboard from "./Features/user dashboard/UserDashboard";
import UserTransactions from "./Pages/UserTransactions";
import UserInvestment from "./Pages/UserInvestment";
import UserPlans from "./Pages/UserPlans";
import UserProfiles from "./Pages/UserProfiles";
import AdminLayout from "./layouts/AdminLayout";
import Admin from "./Pages/Admin";
import AdminDeposit from "./Pages/AdminDeposit";
import AdminWithdraw from "./Pages/AdminWithdraw";
import AdminTransaction from "./Pages/AdminTransaction";
import AdminManage from "./Pages/AdminManage";
import AdminVerify from "./Pages/AdminVerify";
import Withdraw from "./Pages/Withdraw";
import Deposit from "./Pages/Deposit";
import UserAdmin from "./Pages/UserAdmin";
import ProtectedRoute from "./ui/ProtectedRoute";
const Home = lazy(() => import("./Pages/Home"));





const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },

    ]
  },
  {
    element: <ProtectedRoute>
      <UserLayout />
    </ProtectedRoute>,
    errorElement: <Error />,
    children: [
      {
        path: '/user',
        element: <UserDashboard />
      },
      {
        path: '/user/transactions',
        element: <UserTransactions />
      },
      {
        path: '/user/investment',
        element: <UserInvestment />
      },
      {
        path: '/user/plans',
        element: <UserPlans />
      },
      {
        path: '/user/profile',
        element: <UserProfiles />
      },
      {
        path: '/user/deposit',
        element: <Deposit />
      },
      {
        path: '/user/withdraw',
        element: <Withdraw />
      },

    ]
  },
  {
    element: <AdminLayout />,
    errorElement: <Error />,
    children: [

      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/admin/deposit',
        element: <AdminDeposit />
      },
      {
        path: '/admin/withdraw',
        element: <AdminWithdraw />
      },
      {
        path: '/admin/transaction',
        element: <AdminTransaction />
      },
      {
        path: '/admin/manage',
        element: <AdminManage />
      },
      {
        path: '/admin/user/:userId',
        element: <UserAdmin />
      },
      {
        path: '/admin/Verify',
        element: <AdminVerify />
      },
    ]
  },
]);

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>

      <ReactQueryDevtools initialIsOpen={false} />

      <Suspense fallback={<Spinner />} >
        <RouterProvider router={router} />
      </Suspense>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#374151",
          },
        }}
      />

    </QueryClientProvider>
  );
};

export default App;