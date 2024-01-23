import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sabid.calculator',
  appName: 'Calculator',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
