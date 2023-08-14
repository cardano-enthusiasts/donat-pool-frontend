interface Config {
  minAmountParam: number;
  maxAmountParam: number;
  minDurationParam: number;
  maxDurationParam: number;
  protocolFeeParam: number;
}

interface FundraisingData {
  frThreadTokenCurrency: string;
  frThreadTokenName: string;
}

interface CreateFundraisingParams {
  title: string;
  amount: number;
  duration: {
    days: number;
    hours: number;
    minutes: number;
  };
}

interface UserInfo {
  isManager: boolean;
  address: string;
}

type LandingSection = 'home' | 'how-it-works' | 'why-choose-us' | 'about-us' | 'roadmap' | 'contact-us';

export type { Config, FundraisingData, CreateFundraisingParams, UserInfo, LandingSection };
