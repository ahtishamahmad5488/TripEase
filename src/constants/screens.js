import SplashScreen from '../screens/SplashScreen';
import AboutUsScreen from '../screens/CustomerPanel/AboutUsScreen';
import MapScreen from '../screens/CustomerPanel/MapScreen';
import TransporterScreen from '../screens/TransporterPanel/TransporterScreen';
import RegistrationScreen from '../screens/TransporterPanel/RegistrationScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/AuthScreens/NewPasswordScreen';
import OTPScreen from '../screens/AuthScreens/OTPScreen';
import ViewAvailableBiddingsScreen from '../screens/TransporterPanel/AvailableBiddingScreen';
import AcceptedBiddingsScreen from '../screens/TransporterPanel/AcceptedBiddingScreen';
import AdminDashBoardScreen from '../screens/AdminPanel/AdminDashBoardScreen';
import CreateBidding from '../screens/AdminPanel/CreateBidding';
import EditProfileScreen from '../screens/AdminPanel/EditProfileScreen';
import ViewAllBiddings from '../screens/AdminPanel/ViewAllBiddings';
import ViewAllPlans from '../screens/AdminPanel/ViewAllPlans';
import ViewAllBookings from '../screens/AdminPanel/ViewAllBookings';
import PlansScreen from '../screens/AdminPanel/PlansScreen';
import CreatePlanDetailScreen from '../screens/AdminPanel/CreatePlanDetailScreen';
import CreatePlanScreen from '../screens/AdminPanel/CreatePlanScreen';
import BiddingScreen from '../screens/AdminPanel/BiddingScreen';
import ViewAllAcceptedBiddings from '../screens/AdminPanel/ViewAllAcceptedBiddings';
import ViewAllVehicle from '../screens/AdminPanel/ViewAllVehicle';
import HomeScreen from '../screens/CustomerPanel/HomeScreen';
import BookingScreen from '../screens/CustomerPanel/BookingScreen';
import DetailScreen from '../screens/CustomerPanel/DetailScreen';
import CreateBookingScreen from '../screens/CustomerPanel/CreateBookingScreen';
import PaymentScreen from '../screens/CustomerPanel/PaymentScreen';


export const SCREENS = {
  NewPasswordScreen: NewPasswordScreen,
  OTPScreen: OTPScreen,
  ForgotPasswordScreen: ForgotPasswordScreen,
  TransporterScreen: TransporterScreen,
  LoginScreen: LoginScreen,
  SplashScreen: SplashScreen,
  SignUpScreen: SignUpScreen,
  RegistrationScreen: RegistrationScreen,
  HomeScreen: HomeScreen,
  BookingScreen: BookingScreen,
  AboutUsScreen: AboutUsScreen,
  MapScreen: MapScreen,
  DetailScreen: DetailScreen,
  CreateBookingScreen: CreateBookingScreen,
  PaymentScreen: PaymentScreen,
  PlansScreen:PlansScreen,
  ViewAvailableBiddingsScreen: ViewAvailableBiddingsScreen,
  AcceptedBiddingsScreen: AcceptedBiddingsScreen,
  CreatePlanScreen:CreatePlanScreen,
  AdminDashBoardScreen:AdminDashBoardScreen,
  ViewAllBiddings:ViewAllBiddings,
  ViewAllPlans:ViewAllPlans,
  EditProfileScreen:EditProfileScreen,
  CreateBidding:CreateBidding,
  ViewAllBookings:ViewAllBookings,
  CreatePlanDetailScreen:CreatePlanDetailScreen,
  BiddingScreen:BiddingScreen,
  ViewAllAcceptedBiddings:ViewAllAcceptedBiddings,
  ViewAllVehicle:ViewAllVehicle
};
