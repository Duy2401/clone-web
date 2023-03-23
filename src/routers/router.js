import Home from '../pages/Home/home';
import Profile from '../pages/Profile/profile';
import Contact from '../pages/Contact/contact';
import JapanFood from '../pages/JapanFood/JapanFood';
import VietFood from '../pages/VietFood/VietFood';
import EuropeFood from '../pages/EuropeFood/EuropeFood';
import ThaiFood from '../pages/ThaiFood/ThaiFood';
import HanFood from '../pages/HanFood/HanFood';
import AboutUs from '../pages/AboutUs/AboutUs';
import CollectionGeneral from '../pages/CollectionGeneral/CollectionGeneral';
import Policy from '../pages/Policy/Policy';
import { LayoutNotSidebar } from '../Layouts';
import { LayoutNormal } from '../Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, layout: null },
    { path: '/lien-he', component: Contact, layout: LayoutNotSidebar },
    { path: '/mon-nhat', component: JapanFood, layout: LayoutNotSidebar },
    { path: '/mon-viet', component: VietFood, layout: LayoutNotSidebar },
    { path: '/mon-au', component: EuropeFood, layout: LayoutNotSidebar },
    { path: '/mon-thai', component: ThaiFood, layout: LayoutNotSidebar },
    { path: '/mon-han', component: HanFood, layout: LayoutNotSidebar },
    { path: '/about', component: AboutUs, layout: LayoutNormal },
    { path: '/policy', component: Policy, layout: LayoutNormal },
    { path: '/collection-general', component: CollectionGeneral, layout: LayoutNotSidebar },
];

export { publicRoutes };
