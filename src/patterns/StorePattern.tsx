import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function StorePattern() {
    return <>
        <Header />
        <Outlet />
    </>;
}
