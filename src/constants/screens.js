import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import MapScreen from '../screens/MapScreen';
import DetailScreen from '../screens/DetailScreen';
import CreateBookingScreen from '../screens/CreateBookingScreen';
import PaymentScreen from '../screens/PaymentScreen';
import AdminScreen from '../screens/AdminScreen';
import TransporterScreen from '../screens/TransporterPanel/TransporterScreen';
import RegistrationScreen from '../screens/TransporterPanel/RegistrationScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/AuthScreens/NewPasswordScreen';
import OTPScreen from '../screens/AuthScreens/OTPScreen';

export const SCREENS = {
  NewPasswordScreen:NewPasswordScreen,
  OTPScreen:OTPScreen,
  ForgotPasswordScreen:ForgotPasswordScreen,
  TransporterScreen:TransporterScreen,
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
  AdminScreen: AdminScreen,
};
