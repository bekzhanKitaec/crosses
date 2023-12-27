import { Routes, Route, Outlet } from 'react-router-dom'
import Home from "../pages/Home"

const Root = () => {
    return (
        <>
            Header
            <Outlet />
            Footer
        </>
    )
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Root />}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes