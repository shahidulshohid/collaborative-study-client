import { GiClassicalKnowledge } from "react-icons/gi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
const HelpDesk = () => {
  return (
    <div className="my-16">
      <h2 className="text-center text-[#3939c8] text-2xl md:text-3xl font-semibold dark:text-white">
        Help Desk
      </h2>
      <p className="text-center dark:text-white">
      Let us help you find the best resource's to figure out how things works.
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        <div className="bg-gray-100 dark:bg-[#3939c8] rounded-lg space-y-3 text-center p-5 hover:scale-105 transition-transform">
            <div className="flex justify-center items-center">
            <h2 className="dark:text-white hover:text-green-500"><GiClassicalKnowledge size={70}/></h2>
            </div>
            <h3 className="dark:text-white text-xl">KNOWLEDGE BASE</h3>
            <p className="dark:text-white">Where you get to know all about themes</p>
        </div>
        <div className="bg-gray-100 dark:bg-[#3939c8] rounded-lg space-y-3 text-center p-5 hover:scale-105 transition-transform">
            <div className="flex justify-center items-center">
            <h2 className="dark:text-white hover:text-green-500"><MdOutlineLocalPostOffice size={70}/></h2>
            </div>
            <h3 className="dark:text-white text-xl">DOCUMENTATION</h3>
            <p className="dark:text-white">Where you get to know all about themes setup</p>
        </div>
        <div className="bg-gray-100 dark:bg-[#3939c8] rounded-lg space-y-3 text-center p-5 hover:scale-105 transition-transform">
            <div className="flex justify-center items-center">
            <h2 className="dark:text-white hover:text-green-500"><IoVideocamOutline size={70}/></h2>
            </div>
            <h3 className="dark:text-white text-xl">VIDEO DOC</h3>
            <p className="dark:text-white">Where you get to know all with our video tutorials</p>
        </div>
        <div className="bg-gray-100 dark:bg-[#3939c8] rounded-lg space-y-3 text-center p-5 hover:scale-105 transition-transform">
            <div className="flex justify-center items-center">
            <h2 className="dark:text-white hover:text-green-500"><GrEdit size={70}/></h2>
            </div>
            <h3 className="dark:text-white text-xl">FAQ'S</h3>
            <p className="dark:text-white">Where you get to know all with our FAQ's database</p>
        </div>
      </div>
      </p>
    </div>
  );
};

export default HelpDesk;
