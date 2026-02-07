import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Explore from './screens/Explore';
import HostDashboard from './screens/HostDashboard';
import MarketOpportunity from './screens/MarketOpportunity';
import ListingDetail from './screens/ListingDetail';
import Messages from './screens/Messages';
import ChatDetail from './screens/ChatDetail';
import Profile from './screens/Profile';
import ARMeasure from './screens/ARMeasure';
import Checkout from './screens/Checkout';
import AddListing from './screens/AddListing';
import MyRentals from './screens/MyRentals';
import Favorites from './screens/Favorites';
import Filters from './screens/Filters';
import Notifications from './screens/Notifications';
import Wallet from './screens/Wallet';
import Settings from './screens/Settings';
import Support from './screens/Support';
import AccountInfo from './screens/AccountInfo';
import Requests from './screens/Requests';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import IdentityVerification from './screens/IdentityVerification';
import Referral from './screens/Referral';
import Transport from './screens/Transport';
import IoTMonitor from './screens/IoTMonitor';
import KeyShare from './screens/KeyShare';
import Insurance from './screens/Insurance';
import Reviews from './screens/Reviews';
import Contract from './screens/Contract';
import ProPlan from './screens/ProPlan';
import ProSuccess from './screens/ProSuccess';
import ChangePassword from './screens/ChangePassword';
import Terms from './screens/Terms';
import PrivacyPolicy from './screens/PrivacyPolicy';
import Language from './screens/Language';
import { View, StorageSpace } from './types';
import { Box } from 'lucide-react';
import { translations } from './translations';
import { ThemeContext, LanguageContext } from './Contexts';

// Splash Screen Component
const SplashScreen = () => (
  <div className="fixed inset-0 bg-deepTeal-900 flex flex-col items-center justify-center z-[100]">
    <div className="relative">
      {/* Animated Logo Container */}
      <div className="w-24 h-24 bg-gradient-to-tr from-deepTeal-light to-softSand rounded-3xl rotate-12 flex items-center justify-center shadow-2xl animate-pulse">
        <Box size={48} className="text-deepTeal-900 -rotate-12" strokeWidth={2.5} />
      </div>
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-deepTeal-light/20 blur-xl rounded-full -z-10 animate-ping"></div>
    </div>
    
    <div className="mt-8 text-center animate-fade-in">
      <h1 className="text-3xl font-bold text-softSand tracking-tight">
        Komşu Depo
      </h1>
      <p className="text-softSand/60 text-sm mt-2 tracking-widest uppercase text-[10px]">
        Yeni Nesil Depolama
      </p>
      <p className="text-softSand/30 text-[10px] mt-1 font-mono tracking-wide">
        powered by Enes Said Baki
      </p>
    </div>

    {/* Loader Bar */}
    <div className="absolute bottom-12 w-32 h-1 bg-deepTeal-dark rounded-full overflow-hidden">
      <div className="h-full bg-deepTeal-light animate-[shimmer_1.5s_infinite_linear] w-full origin-left"></div>
    </div>
    
    <style>{`
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `}</style>
  </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.ONBOARDING);
  const [selectedSpace, setSelectedSpace] = useState<StorageSpace | null>(null);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Language State
  const [language, setLanguage] = useState('tr');

  // Translation Helper
  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  // Apply Theme Class to HTML tag
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle Splash Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds splash screen
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // --- Navigation Handlers ---

  const handleMainNavigation = (view: View) => {
    // When switching main tabs via bottom bar, clear the specific listing selection.
    // This prevents "Ghost" back-navigation where clicking back from a MyRentals sub-screen 
    // would take you to the previously viewed Explore Listing.
    setSelectedSpace(null);
    setCurrentView(view);
  };

  const handleSpaceSelect = (space: StorageSpace) => {
    setSelectedSpace(space);
    setCurrentView(View.DETAIL);
  };

  const handleBackToExplore = () => {
    setSelectedSpace(null);
    setCurrentView(View.EXPLORE);
  };

  const handleNavigateFromDetail = (view: View) => {
      setCurrentView(view);
  };

  const handleBackFromAR = () => {
      if (selectedSpace) {
          setCurrentView(View.DETAIL);
      } else {
          setCurrentView(View.EXPLORE);
      }
  };

  const handleOpenChat = (chatId: number) => {
      setActiveChatId(chatId);
      setCurrentView(View.CHAT_DETAIL);
  };

  const handleBackFromChat = () => {
      setActiveChatId(null);
      setCurrentView(View.MESSAGES);
  };

  const handleSupportChat = () => {
      setActiveChatId(999); // 999 is reserved for Support Chat
      setCurrentView(View.CHAT_DETAIL);
  };

  const handleCheckoutComplete = () => {
      setCurrentView(View.EXPLORE);
      setSelectedSpace(null);
  };

  const handleListingComplete = () => {
      alert("İlanınız onaya gönderildi!");
      setCurrentView(View.DASHBOARD);
  };

  const handleSubscribe = () => {
      setCurrentView(View.PRO_SUCCESS);
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        <div className="bg-deepTeal-900 min-h-screen text-softSand transition-colors duration-300">
          {currentView === View.ONBOARDING && (
              <Onboarding onComplete={() => setCurrentView(View.LOGIN)} />
          )}

          {currentView === View.LOGIN && (
              <Login 
                  onLogin={() => setCurrentView(View.EXPLORE)} 
                  onForgotPassword={() => setCurrentView(View.FORGOT_PASSWORD)}
                  onTerms={() => setCurrentView(View.TERMS)}
              />
          )}

          {currentView === View.FORGOT_PASSWORD && (
              <ForgotPassword onBack={() => setCurrentView(View.LOGIN)} />
          )}

          {currentView === View.TERMS && (
              <Terms onBack={() => setCurrentView(View.LOGIN)} />
          )}

          {currentView === View.PRIVACY_POLICY && (
              <PrivacyPolicy onBack={() => setCurrentView(View.SETTINGS)} />
          )}

          {currentView === View.LANGUAGE && (
              <Language onBack={() => setCurrentView(View.SETTINGS)} />
          )}
          
          {currentView === View.EXPLORE && (
            <Explore 
                onSpaceSelect={handleSpaceSelect} 
                onFilterClick={() => setCurrentView(View.FILTERS)}
            />
          )}
          {currentView === View.DASHBOARD && <HostDashboard onNavigate={setCurrentView} />}
          {currentView === View.INVESTOR && <MarketOpportunity />}
          {currentView === View.MESSAGES && <Messages onOpenChat={handleOpenChat} />}
          {currentView === View.PROFILE && <Profile onNavigate={setCurrentView} />}
          {currentView === View.AR_MEASURE && <ARMeasure onBack={handleBackFromAR} />}
          
          {currentView === View.CHAT_DETAIL && activeChatId && (
              <ChatDetail chatId={activeChatId} onBack={handleBackFromChat} />
          )}

          {currentView === View.CHECKOUT && selectedSpace && (
              <Checkout space={selectedSpace} onBack={() => setCurrentView(View.DETAIL)} onConfirm={handleCheckoutComplete} />
          )}

          {currentView === View.ADD_LISTING && (
              <AddListing onBack={() => setCurrentView(View.DASHBOARD)} onComplete={handleListingComplete} />
          )}
          
          {currentView === View.DETAIL && selectedSpace && (
            <ListingDetail 
                space={selectedSpace} 
                onBack={handleBackToExplore} 
                onNavigate={handleNavigateFromDetail}
            />
          )}

          {currentView === View.MY_RENTALS && (
              <MyRentals onBack={() => setCurrentView(View.PROFILE)} onNavigate={setCurrentView} />
          )}

          {currentView === View.FAVORITES && (
              <Favorites onBack={() => setCurrentView(View.PROFILE)} onSelect={handleSpaceSelect} />
          )}
          
          {currentView === View.FILTERS && (
              <Filters onClose={() => setCurrentView(View.EXPLORE)} onApply={() => setCurrentView(View.EXPLORE)} />
          )}

          {currentView === View.NOTIFICATIONS && (
              <Notifications onBack={() => setCurrentView(View.DASHBOARD)} />
          )}

          {currentView === View.WALLET && (
              <Wallet onBack={() => setCurrentView(View.PROFILE)} />
          )}

          {currentView === View.SETTINGS && (
              <Settings onBack={() => setCurrentView(View.PROFILE)} onNavigate={setCurrentView} />
          )}

          {currentView === View.SUPPORT && (
              <Support onBack={() => setCurrentView(View.PROFILE)} onChatStart={handleSupportChat} />
          )}

          {currentView === View.ACCOUNT_INFO && (
              <AccountInfo onBack={() => setCurrentView(View.PROFILE)} />
          )}

          {currentView === View.CHANGE_PASSWORD && (
              <ChangePassword onBack={() => setCurrentView(View.SETTINGS)} />
          )}

          {currentView === View.REQUESTS && (
              <Requests onBack={() => setCurrentView(View.DASHBOARD)} />
          )}

          {currentView === View.IDENTITY_VERIFICATION && (
              <IdentityVerification onBack={() => setCurrentView(View.PROFILE)} onComplete={() => setCurrentView(View.PROFILE)} />
          )}

          {currentView === View.REFERRAL && (
              <Referral onBack={() => setCurrentView(View.PROFILE)} />
          )}

          {currentView === View.TRANSPORT && (
              <Transport onBack={() => setCurrentView(View.MY_RENTALS)} />
          )}

          {currentView === View.IOT_MONITOR && (
              <IoTMonitor onBack={() => selectedSpace ? setCurrentView(View.DETAIL) : setCurrentView(View.MY_RENTALS)} />
          )}

          {currentView === View.KEY_SHARE && (
              <KeyShare onBack={() => setCurrentView(View.MY_RENTALS)} />
          )}

          {currentView === View.INSURANCE && (
              <Insurance onBack={() => setCurrentView(View.MY_RENTALS)} />
          )}

          {currentView === View.REVIEWS && (
              <Reviews onBack={() => setCurrentView(View.DETAIL)} />
          )}

          {currentView === View.CONTRACT && (
              <Contract onBack={() => selectedSpace ? setCurrentView(View.DETAIL) : setCurrentView(View.MY_RENTALS)} />
          )}

          {currentView === View.PRO_PLAN && (
              <ProPlan onBack={() => setCurrentView(View.PROFILE)} onSubscribe={handleSubscribe} />
          )}

          {currentView === View.PRO_SUCCESS && (
              <ProSuccess onComplete={() => setCurrentView(View.PROFILE)} />
          )}

          {/* Hide Bottom Nav on full screen flows */}
          {![
              View.ONBOARDING,
              View.LOGIN,
              View.FORGOT_PASSWORD,
              View.TERMS,
              View.PRIVACY_POLICY,
              View.LANGUAGE,
              View.DETAIL, 
              View.AR_MEASURE, 
              View.CHAT_DETAIL, 
              View.CHECKOUT, 
              View.ADD_LISTING,
              View.FILTERS,
              View.NOTIFICATIONS,
              View.WALLET,
              View.SETTINGS,
              View.SUPPORT,
              View.ACCOUNT_INFO,
              View.REQUESTS,
              View.IDENTITY_VERIFICATION,
              View.REFERRAL,
              View.TRANSPORT,
              View.IOT_MONITOR,
              View.KEY_SHARE,
              View.INSURANCE,
              View.REVIEWS,
              View.CONTRACT,
              View.PRO_PLAN,
              View.PRO_SUCCESS,
              View.CHANGE_PASSWORD
            ].includes(currentView) && (
            <Navigation currentView={currentView} setView={handleMainNavigation} />
          )}
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;