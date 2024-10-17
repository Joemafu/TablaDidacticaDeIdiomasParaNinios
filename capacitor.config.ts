import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  android:{
    allowMixedContent: true,
  },
  appId: 'tabla.de.idiomas',
  appName: 'TablaDidacticaDeIdiomasParaNinios',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 5,
      launchAutoHide: true,
      launchFadeOutDuration: 5,
      backgroundColor: "#000000",
      androidSplashResourceName: "../../assets/icon/favicon.png",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
};

export default config;
