import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import GOOGLE_DOCS from "../assets/Google_Docs_Logo_512px.png";
import { CgMenuGridO } from "react-icons/cg";
import { HiOutlineSearch } from "react-icons/hi";
import GoogleAuth, { logOut } from "../utils/GoogleAuth";

function Header({ session, photo }: { session: boolean; photo: string }) {
    return (
        <header className="h-16 pl-4 pr-6 bg-white flex items-center justify-between space-x-10">
            <div className="flex items-center h-full space-x-3.5">
                <button className="hover:bg-gray-200 p-2 rounded-full">
                    <IoMdMenu className="text-2xl" />
                </button>
                <Link to="/">
                    <div className="flex items-center space-x-3">
                        <img src={GOOGLE_DOCS} alt="google_docs" className="w-[26px]" />
                        <span className="text-gray-700 text-[20px] tracking-tight">Docs</span>
                    </div>
                </Link>
            </div>
            <div className="w-[700px] bg-[var(--bg-gray)] hidden md:flex items-center px-4 py-1 rounded-md drop-shadow">
                <div className="hover:bg-gray-200/90 p-2 rounded-full cursor-pointer">
                    <HiOutlineSearch className="text-2xl text-gray-500" />
                </div>
                <input
                    type="text"
                    className="text-[15px] tracking-normal pr-6 pl-2 py-1 bg-transparent w-full outline-none"
                    placeholder="Search"
                />
            </div>
            <div className="flex items-center space-x-3">
                <div className="hover:bg-gray-200/90 p-2 rounded-full cursor-pointer flex md:hidden">
                    <HiOutlineSearch className="text-2xl text-gray-500" />
                </div>
                <button className="hover:bg-gray-200 p-2 rounded-full">
                    <CgMenuGridO className="text-2xl" />
                </button>

                {session ? (
                    <div className="p-1 w-10 h-10 hover:bg-gray-200 rounded-full" onClick={logOut}>
                        <img
                            src={photo}
                            alt="profile"
                            className="w-8 h-8 rounded-full cursor-pointer"
                        />
                    </div>
                ) : (
                    <button
                        className="bg-[#4285f4] active:bg-[#4286f4e1] text-white px-4 py-2 rounded-md uppercase text-sm drop-shadow"
                        onClick={GoogleAuth}
                    >
                        Sign in
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
