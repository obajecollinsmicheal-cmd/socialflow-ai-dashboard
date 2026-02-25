export enum View {
  DASHBOARD = 'DASHBOARD',
  ANALYTICS = 'ANALYTICS',
  CALENDAR = 'CALENDAR',
  CREATE_POST = 'CREATE_POST',
  MEDIA_LIBRARY = 'MEDIA_LIBRARY',
  INBOX = 'INBOX',
  SETTINGS = 'SETTINGS'
}

export interface NavItem {
  id: View;
  label: string;
  icon: React.ReactNode;
}

export interface ViewProps {
  onNavigate: (view: View) => void;
}

export interface Post {
  id: string;
  platform: 'instagram' | 'tiktok' | 'facebook' | 'youtube' | 'linkedin' | 'x';
  content: string;
  image?: string;
  date: Date;
  status: 'scheduled' | 'published' | 'draft';
  stats?: {
    likes: number;
    views: number;
  };
}

export interface Message {
  id: string;
  sender: string;
  avatar: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface Conversation {
  id: string;
  platform: 'instagram' | 'facebook' | 'x';
  user: string;
  avatar: string;
  lastMessage: string;
  unread: boolean;
  status: 'new' | 'pending' | 'resolved';
  messages: Message[];
}

export enum Platform {
  INSTAGRAM = 'instagram',
  TIKTOK = 'tiktok',
  FACEBOOK = 'facebook',
  YOUTUBE = 'youtube',
  LINKEDIN = 'linkedin',
  X = 'x'
}

// Wallet Analytics Types
export interface WalletData {
  address: string;
  portfolioValue: number;
  tokens: TokenHolding[];
  followerEngagement: number;
  lastActive: Date;
}

export interface TokenHolding {
  symbol: string;
  amount: number;
  value: number;
  holdingDuration: number;
}

export interface WealthSegment {
  tier: 'whale' | 'dolphin' | 'shrimp';
  minValue: number;
  maxValue: number;
  count: number;
  engagementRate: number;
  conversionRate: number;
  growthRate: number;
}

export interface AudienceWealthMetrics {
  averagePortfolioValue: number;
  totalWallets: number;
  commonTokens: { symbol: string; holders: number; avgHoldingDuration: number }[];
  wealthTrends: { date: string; avgValue: number }[];
  segments: WealthSegment[];
}

// Token Holder Analysis Types
export interface TokenHolder {
  walletAddress: string;
  tokenSymbol: string;
  amount: number;
  value: number;
  holdingDuration: number;
  firstPurchaseDate: Date;
  lastTransactionDate: Date;
  engagementScore: number;
}

export interface TokenHolderCohort {
  cohortId: string;
  tokenSymbol: string;
  holderCount: number;
  avgHoldingDuration: number;
  avgEngagement: number;
  totalValue: number;
  loyaltyScore: number;
}

export interface TokenLoyaltyMetrics {
  tokenSymbol: string;
  totalHolders: number;
  loyalHolders: number;
  churnRate: number;
  avgHoldingPeriod: number;
  retentionRate: number;
}

// Whale Identification Types
export interface WhaleProfile {
  walletAddress: string;
  portfolioValue: number;
  totalTransactions: number;
  avgTransactionValue: number;
  engagementScore: number;
  followingSince: Date;
  lastActive: Date;
  topTokens: { symbol: string; value: number }[];
  riskScore: number;
  influenceScore: number;
}

export interface WhaleTransaction {
  id: string;
  walletAddress: string;
  type: 'buy' | 'sell' | 'transfer';
  tokenSymbol: string;
  amount: number;
  value: number;
  timestamp: Date;
  fromAddress?: string;
  toAddress?: string;
}

export interface WhaleAlert {
  id: string;
  walletAddress: string;
  alertType: 'large_transaction' | 'new_whale' | 'whale_exit' | 'high_engagement';
  severity: 'low' | 'medium' | 'high';
  message: string;
  timestamp: Date;
  metadata: Record<string, any>;
}
