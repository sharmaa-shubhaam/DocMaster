import Google_Docs from "../assets/Google_Docs_Logo_512px.png";
import { FaRegStar } from "react-icons/fa";
import { useAppSelector } from "../redux/store";
import { authState } from "../redux/authReducer";
import { logOut } from "../utils/GoogleAuth";
import Ribbon from "../components/Ribbon";
import { useEffect, useState } from "react";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useLocation } from "react-router-dom";

function Document() {
    const user = useAppSelector(authState);
    const refDocid = useLocation().search.slice(5);
    const [isSaved, setIsSaved] = useState(false);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [data, setData] = useState({
        title: "",
        content: "",
    });

    const handleChange = async (e: React.ChangeEvent<HTMLDivElement>) => {
        setContent(e.target.textContent || "");
        setIsSaved(false);
    };

    const saveDoc = async () => {
        try {
            await updateDoc(doc(db, `users/${user._id}/docs/${refDocid}`), {
                data: {
                    content: content || data.content,
                    title: title || data.title,
                    timestamp: serverTimestamp(),
                },
            });
            setIsSaved(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchDoc = async () => {
            try {
                const docref = (await getDoc(doc(db, `users/${user._id}/docs/${refDocid}`))).data();
                setData({
                    title: docref?.data.title,
                    content: docref?.data.content,
                });
            } catch (error) {
                console.log(error);
                window.location.href = "/";
            }
        };
        fetchDoc();
    }, []);

    return (
        <main className="poppins bg-[#f9fbfd] h-screen flex flex-col overflow-y-hidden min-w-[800px]">
            <header className="py-2 px-5 flex items-center justify-between space-x-10">
                <div className="flex items-center space-x-2">
                    <img src={Google_Docs} alt="logo" className="!w-[25px]" />
                    <div>
                        <div className="flex items-center space-x-1">
                            <h1
                                className="text-lg text-gray-600 px-2 rounded max-w-[400px] text-start tracking-tight"
                                contentEditable={true}
                                onInput={(e: React.ChangeEvent<HTMLHeadingElement>) => {
                                    setTitle(e.target.textContent || "");
                                    setIsSaved(false);
                                }}
                            >
                                {data.title || title}
                            </h1>
                            <FaRegStar />
                            <button
                                onClick={saveDoc}
                                className="!ml-4 text-sm bg-black active:bg-black/80 text-white px-2 py-0.5 rounded"
                            >
                                {isSaved ? "Saved" : "Save"}
                            </button>
                        </div>
                        <ul className="flex items-center text-sm">
                            <li className="options">File</li>
                            <li className="options">Edit</li>
                            <li className="options">View</li>
                            <li className="options">Insert</li>
                            <li className="options">Format</li>
                            <li className="options">Tools</li>
                            <li className="options">Extensions</li>
                            <li className="options">Help</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="p-1 w-10 h-10 hover:bg-gray-200 rounded-full" onClick={logOut}>
                        <img
                            src={user.photo}
                            alt="profile"
                            className="w-8 h-8 rounded-full cursor-pointer"
                        />
                    </div>
                </div>
            </header>

            {/* adding ribbon to text editor  */}
            <div className="px-6 mb-2">
                <Ribbon />
            </div>

            {/* Making text editor */}
            <div className="flex-grow py-6 overflow-y-auto">
                <div
                    className="max-w-3xl bg-white rounded m-auto h-screen border border-gray-300 p-16 outline-none"
                    contentEditable="true"
                    onInput={handleChange}
                >
                    {data.content}
                </div>
            </div>
        </main>
    );
}

export default Document;
