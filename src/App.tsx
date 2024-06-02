import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./redux/store";
import { authState } from "./redux/authReducer";

const Home = lazy(() => import("./pages/Home"));
const Document = lazy(() => import("./pages/Document"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    const user = useAppSelector(authState);

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense>
                            <Home />
                        </Suspense>
                    }
                />
                {user.auth && (
                    <Route
                        path="/document"
                        element={
                            <Suspense>
                                <Document />
                            </Suspense>
                        }
                    />
                )}
                <Route
                    path="*"
                    element={
                        <Suspense>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
