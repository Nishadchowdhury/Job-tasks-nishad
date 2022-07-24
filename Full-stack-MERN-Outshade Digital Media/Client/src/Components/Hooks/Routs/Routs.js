import Home from "../../Home/Home"
import ImportProducts from "../../Others/ImportProducts/ImportProducts"
import UpdateProDet from "../../Others/ImportProducts/UpdateProDet"
import UpdateProfile from "../../Others/UpdateProfile"

export const ProtectedRoutes = [
    { name: 'home', path: '/', Component: Home },
    { name: 'updateProfile', path: '/update', Component: UpdateProfile },
    { name: 'userOrder', path: '/import', Component: ImportProducts },
    { name: 'UpdateProDet', path: '/updatePro/:id', Component: UpdateProDet },
]

export const publicRouts = [

];