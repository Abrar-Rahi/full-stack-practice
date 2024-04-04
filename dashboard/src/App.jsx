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
import AddCategory from "./pages/AddCategory";
import AddSubCategory from "./pages/AddSubCategory";

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

          <Route path="addSubCategory" element={<AddSubCategory />}></Route>
          <Route path="addCategory" element={<AddCategory />}></Route>

        </Route>

      </Route>

    )
  );

  return (
    <RouterProvider router={router} />
  );
};
export default App;