import { useEffect, useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = TestIds.INTERSTITIAL; // Replace with your actual ad unit ID in production
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['gardening', 'nutrients','hydroponics'], // Example keywords
});

export const AdInterstitial = () => {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setAdLoaded(true);
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setAdLoaded(false);
      interstitial.load(); // Reload the ad after it's closed
    });

    const unsubscribeOpened = interstitial.addAdEventListener(AdEventType.OPENED, () => {
      if (Platform.OS === 'ios') {
        StatusBar.setHidden(true); // Hide the status bar on iOS when the ad opens
      }
    });

    interstitial.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      unsubscribeOpened();
    };
  }, []);

  const showAd = () => {
    if (adLoaded) {
      interstitial.show();
    } else {
      console.error("Ad not ready yet");
    }
  };

  return { showAd, adLoaded };
};