import { IoIosSearch } from "react-icons/io";
import { LuCornerUpLeft } from "react-icons/lu";
import { LuCornerUpRight } from "react-icons/lu";
import { BsPrinter } from "react-icons/bs";
import { TfiPaintRoller } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdFormatBold } from "react-icons/md";
import { MdFormatItalic } from "react-icons/md";
import { MdFormatUnderlined } from "react-icons/md";
import { ImTextColor } from "react-icons/im";
import { MdFormatColorText } from "react-icons/md";
import { TbColorPicker } from "react-icons/tb";
import { MdLink } from "react-icons/md";
import { MdOutlineAddComment } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFormatAlignLeft } from "react-icons/md";
import { MdFormatLineSpacing } from "react-icons/md";
import { MdChecklist } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { MdFormatIndentDecrease } from "react-icons/md";
import { MdFormatIndentIncrease } from "react-icons/md";
import { RiFormatClear } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { IoIosArrowUp } from "react-icons/io";

function Ribbon() {
    return (
        <div className="bg-[#edf2fa] rounded-full py-1 flex items-center justify-between px-3 shadow min-w-max">
            <button className="ribbon-options px-2 py-1">
                <IoIosSearch />
            </button>
            <button className="ribbon-options px-2 py-1">
                <LuCornerUpLeft />
            </button>
            <button className="ribbon-options px-2 py-1">
                <LuCornerUpRight />
            </button>
            <button className="ribbon-options px-2 py-1">
                <BsPrinter />
            </button>
            <button className="ribbon-options px-2 py-1">
                <ImTextColor />
            </button>
            <button className="ribbon-options px-2 py-1">
                <TfiPaintRoller />
            </button>
            <button className="ribbon-options px-2 py-1 space-x-2">
                <span className="text-sm">100%</span>
                <IoMdArrowDropdown />
            </button>
            <button className="ribbon-options px-2 py-1 space-x-2">
                <span className="text-sm">Normal text</span>
                <IoMdArrowDropdown />
            </button>
            <button className="ribbon-options px-2 py-1 space-x-2">
                <span className="text-sm">Arial</span>
                <IoMdArrowDropdown />
            </button>
            <button className="ribbon-options px-2 py-1">
                <MdFormatBold />
            </button>
            <button className="ribbon-options px-2 py-1">
                <MdFormatItalic />
            </button>
            <button className="ribbon-options px-2 py-1">
                <MdFormatUnderlined />
            </button>
            <button className="ribbon-options px-2 py-1">
                <MdFormatColorText />
            </button>
            <button className="ribbon-options px-2 py-1">
                <TbColorPicker />
            </button>
            <button className="ribbon-options px-2 py-1">
                <MdLink />
            </button>
            <button className="ribbon-options px-2 py-1">
                <MdOutlineAddComment />
            </button>
            <button className="ribbon-options px-2 py-1">
                <IoImageOutline />
            </button>

            <button className="ribbon-options p-1 space-x-0.5">
                <MdOutlineFormatAlignLeft />
                <IoMdArrowDropdown />
            </button>
            <button className="ribbon-options px-2 py-1">
                <MdFormatLineSpacing />
            </button>

            <button className="ribbon-options p-1">
                <MdChecklist />
                <IoMdArrowDropdown />
            </button>
            <button className="ribbon-options p-1">
                <MdFormatListBulleted />
                <IoMdArrowDropdown />
            </button>
            <button className="ribbon-options p-1">
                <MdFormatListNumbered />
                <IoMdArrowDropdown />
            </button>
            <button className="ribbon-options px-2 py-1">
                <MdFormatIndentDecrease />
            </button>
            <button className="ribbon-options px-2 py-1">
                <MdFormatIndentIncrease />
            </button>
            <button className="ribbon-options px-2 py-1">
                <RiFormatClear />
            </button>

            <button className="ribbon-options py-2 px-3 rounded-full space-x-0.2">
                <GoPencil />
                <IoMdArrowDropdown />
            </button>
            <button className="ribbon-options px-2 py-2">
                <IoIosArrowUp />
            </button>
        </div>
    );
}

export default Ribbon;
