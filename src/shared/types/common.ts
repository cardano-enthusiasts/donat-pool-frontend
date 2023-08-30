interface Config {
  minAmountParam: number;
  maxAmountParam: number;
  minDurationParam: number;
  maxDurationParam: number;
  protocolFeeParam: number;
}

interface DonatPoolData {
  frThreadTokenCurrency: string;
  frThreadTokenName: string;
}

interface UserInfo {
  isManager: boolean;
  address: string;
}

type LandingSection = 'home' | 'how-it-works' | 'why-choose-us' | 'about-us' | 'roadmap' | 'contact-us';

export type { Config, DonatPoolData, UserInfo, LandingSection };
