import { IoIosMenu } from "react-icons/io";
import { useMenuStore } from "../../store/MenuStore";


export default function Header() {

    const menuSet = useMenuStore((state) => state.toggleMenu);
  return (
    <div className="bg-[#FFFFFF] flex items-center justify-between py-3 px-4 shadow w-full">
        <div className="flex justify-center items-center">
            <IoIosMenu className="text-gray-600 cursor-pointer" onClick={menuSet} size={30} />
        </div>
    </div>
  )
}
