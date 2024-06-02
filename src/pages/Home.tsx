import Header from "../components/Header";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import FileList from "../components/FileList";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "../utils/GoogleAuth";
import { useAppSelector } from "../redux/store";
import { authState } from "../redux/authReducer";
import { useEffect, useState } from "react";
import { addDoc, collection, doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

function Home() {
    const navigate = useNavigate();
    const user = useAppSelector(authState);
    const [docId, setDocId] = useState<string[]>([]);

    const createDoc = async () => {
        try {
            const docId = await addDoc(collection(db, "users", user._id, "docs"), {
                email: user.email,
                data: {
                    title: "untitled document",
                    content: "",
                    timestamp: serverTimestamp(),
                },
            });
            user.auth ? navigate(`/document?ref=${docId.id}`) : navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async function () {
            try {
                if (!user.auth) return null;
                await setDoc(doc(db, "users", user._id), {
                    username: user.username,
                    email: user.email,
                    uid: user._id,
                    photo: user.photo,
                });
            } catch (error) {
                console.log(error);
            }
        })();
    }, [user._id, user.auth]);

    useEffect(() => {
        (async function () {
            try {
                const documentSnapshot = await getDocs(collection(db, `users/${user._id}/docs`));
                const filesId = documentSnapshot.docs.map((e) => e.id);
                setDocId(filesId);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [user._id]);

    return (
        <main className="poppins">
            <Header session={user.auth} photo={user.photo} />
            <div className="bg-[var(--bg-gray)] py-6 px-6">
                <div className="max-w-4xl min-w-[800px] m-auto">
                    {/* Document header */}
                    <div className="flex items-center justify-between">
                        <h1 className="tracking-tight text-gray-500">Start a new document</h1>
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-400/80 rounded-md">
                                <span className="text-sm">Template gallery</span>
                                <div className="text-xs">
                                    <IoIosArrowUp />
                                    <IoIosArrowDown />
                                </div>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-400/80 rounded-full">
                                <HiOutlineDotsVertical className="text-xl" />
                            </button>
                        </div>
                    </div>

                    {/* Creating a blank document */}
                    <div className="w-full pt-2 grid grid-cols-6 gap-5">
                        <div className="space-y-2">
                            <button
                                onClick={createDoc}
                                className="bg-white w-full h-[170px] rounded border hover:border-blue-400 relative flex items-center justify-center"
                            >
                                <IoMdAdd className="text-7xl text-[#4285f4]" />
                            </button>
                            <h2 className="text-sm">Blank Document</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent document */}
            <div className="py-6 px-6">
                <div className="max-w-4xl min-w-[600px] m-auto space-y-5">
                    <div className="flex items-center justify-between w-full">
                        <h1>Recent Files</h1>
                        <div className="flex items-center space-x-16 text-sm">
                            <p>Owner</p>
                            <p>Last opened by me</p>
                            <div />
                        </div>
                    </div>

                    {user.auth ? (
                        <div>
                            {docId.map((e: any, i: any) => {
                                return <FileList docRef={e} key={i} userId={user._id} />;
                            })}
                        </div>
                    ) : (
                        <div className="w-full flex items-center justify-center py-10">
                            <button
                                className="bg-[#4285f4] text-white px-6 py-2.5 rounded-md text-sm uppercase active:bg-[#4286f4e1]"
                                onClick={GoogleAuth}
                            >
                                Sign in with google
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Home;
