import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/CocktailsList";
import LoginMenu from "@/components/LoginMenu"
import MainCabinet from "@/components/MainCabinet"
import RegistrationMenu from "@/components/RegistrationMenu"
import NotFound from "@/components/NotFound";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import InformationList from "@/components/InformationList";


const routes = [
    {
      path: "/:pathMatch(.*)*",
        component: NotFound
    },
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/registration",
        component: RegistrationMenu
    },
    {
        path: "/login",
        component: LoginMenu
    },
    {
        path: "/mainCabinet",
        component: MainCabinet
    },
    {
        path: "/aboutUs",
        component: AboutUs
    },
    {
        path: "/contacts",
        component: ContactUs
    },
    {
        path: "/informationList",
        component: InformationList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

