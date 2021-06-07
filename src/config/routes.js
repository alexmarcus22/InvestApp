import CreateAccount from "../screens/CreateAccount/createAccountScreen";
import HomePage from "../screens/Homepage/homepageScreen";
import SignUp from "../screens/SignUp/signUpScreen";
import Assets from "../screens/Assets/assetsScreen";
import Contact from "../screens/Contact/contactScreen";
import BankAccount from "../screens/BankAccount/bankAccount";
import Profile from "../screens/Profile/profileScreen";

const routes = [
  {
    component: CreateAccount,
    name: "Create Account",
    order: 2,
    isBottomTab: false,
    visibleBottomTab: false,
  },
  {
    component: SignUp,
    name: "Sign Up",
    icon: "key",
    order: 1,
    isBottomTab: false,
    visibleBottomTab: false,
  },
  {
    component: Assets,
    name: "Assets",
    icon: "key",
    order: 3,
    isBottomTab: true,
    visibleBottomTab: true,
  },
  {
    component: HomePage,
    name: "Homepage",
    icon: "key",
    order: 3,
    isBottomTab: true,
    visibleBottomTab: true,
  },
  {
    component: Contact,
    name: "Contact",
    icon: "key",
    order: 3,
    isBottomTab: true,
    visibleBottomTab: true,
  },
  {
    component: BankAccount,
    name: "Bank Account",
    icon: "key",
    order: 3,
    isBottomTab: true,
    visibleBottomTab: true,
  },
  {
    component: Profile,
    name: "Profile",
    icon: "key",
    order: 3,
    isBottomTab: true,
    visibleBottomTab: true,
  },
];
export default routes;
