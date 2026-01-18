
export type Language = 'en' | 'ar' | 'ur';

export interface ServiceDetail {
  title: Record<Language, string>;
  description: Record<Language, string>;
  fees: Record<Language, string>;
  icon: string;
}

export interface TranscriptionMessage {
  text: string;
  type: 'user' | 'model';
}

export enum ConnectionStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR'
}
