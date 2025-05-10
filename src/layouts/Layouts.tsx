import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { useMenuStore } from "../store/MenuStore";

export default function Layouts() {
  const menu = useMenuStore((state) => state.isMenuOpen);

  return (
    <div className="w-screen h-screen flex justify-start items-start bg-[#f5f5f5]">
      <div className={`${menu ? "w-6/12 xl:w-2/12 lg:w-2/12 md:w-2/12" : "w-0 xl:w-14 lg:w-14 md:w-14"} h-full bg-[#fff] transition-all duration-300 overflow-hidden`}>
        <Navbar />
      </div>
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
}
