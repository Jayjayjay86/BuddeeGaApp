# BuddeeGaApp

**BuddeeGaApp** is a React Native application designed to help indoor gardeners track their plant growth cycles. This project is currently in the testing phase and serves as a demonstration of my coding abilities to date. It showcases my proficiency in React Native, state management, localization, and UI/UX design.

## Overview

BuddeeGaApp is a simple yet effective tool for indoor gardeners to track important dates and milestones in their plant growth cycles. It features a clean, user-friendly interface with support for multiple languages, dark/light modes, and various technical integrations.

## Key Features

- **Multi-language Support**: Custom-built locales for English, German, French, Spanish, Hebrew, Hindi, and Italian.
- **Dark/Light Mode**: Seamless theme switching using React Context for state management.
- **Date Tracking**: Easily log and view important dates for your plants.
- **Ad Integration**: Built-in support for Google Mobile Ads.
- **In-App Purchases**: Integrated with `react-native-iap` for potential premium features.
- **File System Access**: Utilizes `react-native-fs` for local data storage and management.
- **Progress Tracking**: Visualize growth progress with `react-native-progress`.

## Technical Stack

BuddeeGaApp is built using the following technologies and libraries:

- **Core**: 
  - React (`18.2.0`)
  - React Native (`0.74.6`)
- **Navigation**:
  - `@react-navigation/native` (`^7.0.3`)
  - `@react-navigation/native-stack` (`^7.0.3`)
- **State Management**:
  - React Context for theme and localization management.
- **Localization**:
  - Custom-built locales for 7 languages.
- **UI/UX**:
  - `react-native-modal-selector` (`^2.1.2`)
  - `react-native-date-picker` (`^5.0.7`)
  - `react-native-progress` (`^5.0.1`)
- **Storage**:
  - `@react-native-async-storage/async-storage` (`^2.1.0`)
  - `react-native-fs` (`^2.20.0`)
- **Utilities**:
  - `moment` (`^2.30.1`) for date handling.
  - `react-native-uuid` (`^2.0.3`) for unique ID generation.
  - `react-native-get-random-values` (`^1.11.0`) for cryptographic randomness.
- **Ads and Monetization**:
  - `react-native-google-mobile-ads` (`^14.4.2`)
  - `react-native-iap` (`^12.15.7`) for in-app purchases.
- **Miscellaneous**:
  - `react-native-safe-area-context` (`^4.14.0`)
  - `react-native-screens` (`^4.1.0`)
  - `react-native-splash-screen` (`^3.3.0`)

## Screenshots

![Light Mode](light_mode.png)  
*BuddeeGaApp in Light Mode*

![Dark Mode](dark_mode.png)  
*BuddeeGaApp in Dark Mode*

![Language Selection](language_selection.png)  
*Multi-language Support*

