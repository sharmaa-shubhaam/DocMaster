import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="poppins h-screen flex items-center justify-center">
            <div className="space-y-6">
                <h1 className="text-8xl">Not Found</h1>
                <div className="text-center">
                    <Link to="/" className="hover:underline">
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
