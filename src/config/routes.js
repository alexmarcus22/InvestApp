import CreateAccount from "../screens/CreateAccount/createAccountScreen";
import HomePage from "../screens/Homepage/homepageScreen";
import SignUp from "../screens/SignUp/signUpScreen";
import Assets from "../screens/Assets/assetsScreen";
import Contact from "../screens/Contact/contactScreen";
import BankAccount from "../screens/BankAccount/bankAccount";
import Profile from "../screens/Profile/profileScreen";
import ProductScreen from "../screens/Product/productScreen";
import TransactionScreen from "../screens/Transaction/transactionScreen";

const routes = [
  {
    component: SignUp,
    name: "Sign Up",
    icon: "key",
    order: 1,
    isBottomTab: false,
    visibleBottomTab: false,
  },
  {
    component: CreateAccount,
    name: "Create Account",
    order: 2,
    isBottomTab: false,
    visibleBottomTab: false,
  },
  {
    component: Assets,
    name: "Assets",
    icon: "key",
    order: 9,
    isBottomTab: false,
    visibleBottomTab: true,
  },
  {
    component: HomePage,
    name: "Home",
    icon: "key",
    order: 3,
    isBottomTab: true,
    visibleBottomTab: true,
    icon: "home",
  },
  {
    component: Contact,
    name: "Contact",
    icon: "key",
    order: 7,
    isBottomTab: false,
    visibleBottomTab: true,
  },
  {
    component: BankAccount,
    name: "Bank Account",
    icon: "key",
    order: 8,
    isBottomTab: false,
    visibleBottomTab: false,
  },
  {
    component: ProductScreen,
    name: "Product Screen",
    icon: "key",
    order: 4,
    isBottomTab: true,
    visibleBottomTab: true,
    icon: "magnify",
  },
  {
    component: TransactionScreen,
    name: "Transaction",
    icon: "key",
    order: 5,
    isBottomTab: true,
    visibleBottomTab: true,
    icon: "cash-multiple",
  },
  {
    component: Profile,
    name: "Profile",
    icon: "key",
    order: 6,
    isBottomTab: true,
    visibleBottomTab: true,
    icon: "account",
  },
];
export default routes;
