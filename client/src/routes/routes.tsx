import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";
import Chat from "@/pages/chat";
import SingleChat from "@/pages/chat/chatId";

// first code pages
import { About } from "@/pages/Other/About/about";
import { StudentDashboard } from "@/pages/Other/studentDasbord";
import { Forums } from "@/pages/Other/Froms/froms";
import { Projects } from "@/pages/Other/Project";
import { Research } from "@/pages/Other/Reserch";
import { Webinars } from "@/pages/Other/webiners";
import { Home } from "@/pages/Other/home";
import { Contact } from "@/pages/Other/Contect/contect";
import Dashboard from "@/pages/Other/dasbord/dasbord";

export const AUTH_ROUTES = {
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  FORUMS: "/forums",
  PROJECTS: "/projects",
  RESEARCH: "/research",
  WEBINARS: "/webinars",
  DasBord:"/dasbord"
};

export const PROTECTED_ROUTES = {
  CHAT: "/chat",
  SINGLE_CHAT: "/chat/:chatId",
  STUDENT_DASHBOARD: "/studentdashboard",
};


export const authRoutesPaths = [
  {
    path: AUTH_ROUTES.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: AUTH_ROUTES.SIGN_UP,
    element: <SignUp />,
  },
   {
    path: AUTH_ROUTES.HOME,
    element: <Home/>,
  },
  {
    path: AUTH_ROUTES.ABOUT,
    element: <About />,
  },
  {
    path: AUTH_ROUTES.CONTACT,
    element: <Contact />,
  },
  {
    path: AUTH_ROUTES.FORUMS,
    element: <Forums />,
  },
  {
    path: AUTH_ROUTES.PROJECTS,
    element: <Projects />,
  },
  {
    path: AUTH_ROUTES.RESEARCH,
    element: <Research />,
  },
  {
    path: AUTH_ROUTES.WEBINARS,
    element: <Webinars />,
  },
   {
    path: AUTH_ROUTES.DasBord,
    element: <Dashboard />,
  },
];

export const protectedRoutesPaths = [
  {
    path: PROTECTED_ROUTES.CHAT,
    element: <Chat />,
  },
  {
    path: PROTECTED_ROUTES.SINGLE_CHAT,
    element: <SingleChat />,
  },
  {
    path: PROTECTED_ROUTES.STUDENT_DASHBOARD,
    element: <StudentDashboard />,
  },
];


export const isAuthRoute = (pathname: string) => {
  return Object.values(AUTH_ROUTES).includes(pathname);
};