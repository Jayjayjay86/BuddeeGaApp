import React, { useState, useRef } from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';

const adUnitId = TestIds.ADAPTIVE_BANNER 

const AdBanner = () => {
  const bannerRef = useRef(null);

  
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  })

  return (
    <BannerAd   ref={bannerRef} 
                unitId={adUnitId} 
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} 
                requestOptions={{
                    networkExtras: {
                      collapsible: 'bottom',
                    },
                  }}/>
  );
}
export default AdBanner
