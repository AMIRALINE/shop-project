import Header from "../layout/header";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer";
export default function Layout(props) {
  return (
    <div className="bg-gray-50 max-w-full space-y-6">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
