import { useRoutes } from 'react-router-dom'
import LandingComponent from '../containers/Landing'

const AppRoutes = () => {

    const route = useRoutes([
        {
            path:'/',
            element:<LandingComponent />
        }
    ])
    return route
}

export default AppRoutes