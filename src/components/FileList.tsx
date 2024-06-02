import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaFileWord } from "react-icons/fa6";
import { Link } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

interface IFileList {
    docRef: string;
    userId: string;
}

function FileList(props: IFileList) {
    const [snippet, setSnippet] = useState<any>([]);

    useEffect(() => {
        (async function () {
            try {
                const documentSnapshot = await getDoc(
                    doc(db, `users/${props.userId}/docs/${props.docRef}`)
                );
                setSnippet({
                    title: documentSnapshot.data()?.data.title,
                    lastSeen: documentSnapshot.data()?.data.timestamp.toDate(),
                });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <Link to={`/document?ref=${props.docRef}`}>
            <div className="w-full min-w-[600px] hover:bg-gray-100 px-6 py-1.5 rounded-md text-[15px] flex items-center justify-between space-x-8 cursor-pointer border-b">
                <div className="flex  items-center space-x-5">
                    <FaFileWord className="text-[#4285f4] text-2xl" />
                    <h1 className="w-[450px] truncate">{snippet.title}</h1>
                </div>
                <p>Me</p>
                <p>{moment(snippet.lastSeen).format("LT")}</p>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-400/80 rounded-full">
                    <HiOutlineDotsVertical className="text-xl" />
                </button>
            </div>
        </Link>
    );
}

export default FileList;
