import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import OtpValidation from "./pages/OtpValidation";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPass from "./pages/NewPass";
import Dashboard from "./pages/Dashboard";
import SubCategory from "./pages/SubCategory";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path="/" element={<Registration />}></Route>
        <Route path="/otp/:email" element={<OtpValidation />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotPass" element={<ForgotPassword />}></Route>
        <Route path="/newPass/:token" element={<NewPass />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>

          <Route path="subCategory" element={<SubCategory />}></Route>

        </Route>

      </Route>

    )
  );

  return (
    <RouterProvider router={router} />
  );
};
export default App;