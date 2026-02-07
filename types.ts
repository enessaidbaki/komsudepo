
export interface StorageSpace {
  id: string;
  title: string;
  price: number;
  rating: number;
  distance: string;
  image: string;
  features: string[];
  lat: number;
  lng: number;
  mapPosition?: { top: string; left: string; }; // For simulated map UI
}

export interface ChartData {
  name: string;
  value: number;
}

export enum View {
  ONBOARDING = 'ONBOARDING',
  LOGIN = 'LOGIN',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  EXPLORE = 'EXPLORE',
  DASHBOARD = 'DASHBOARD',
  INVESTOR = 'INVESTOR',
  DETAIL = 'DETAIL',
  MESSAGES = 'MESSAGES',
  CHAT_DETAIL = 'CHAT_DETAIL',
  PROFILE = 'PROFILE',
  AR_MEASURE = 'AR_MEASURE',
  CHECKOUT = 'CHECKOUT',
  ADD_LISTING = 'ADD_LISTING',
  MY_RENTALS = 'MY_RENTALS',
  FAVORITES = 'FAVORITES',
  FILTERS = 'FILTERS',
  NOTIFICATIONS = 'NOTIFICATIONS',
  WALLET = 'WALLET',
  SETTINGS = 'SETTINGS',
  SUPPORT = 'SUPPORT',
  ACCOUNT_INFO = 'ACCOUNT_INFO',
  REQUESTS = 'REQUESTS',
  IDENTITY_VERIFICATION = 'IDENTITY_VERIFICATION',
  REFERRAL = 'REFERRAL',
  TRANSPORT = 'TRANSPORT',
  IOT_MONITOR = 'IOT_MONITOR',
  KEY_SHARE = 'KEY_SHARE',
  INSURANCE = 'INSURANCE',
  REVIEWS = 'REVIEWS',
  CONTRACT = 'CONTRACT',
  PRO_PLAN = 'PRO_PLAN',
  PRO_SUCCESS = 'PRO_SUCCESS',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  TERMS = 'TERMS',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  LANGUAGE = 'LANGUAGE'
}