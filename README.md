# BooksApp

BooksApp is a **React Native** application for browsing book information. The app allows users to explore various books, view details, and get recommendations based on their preferences.

## Tech Stack
- **React Native**
- **TypeScript**
- **Zustand**
- **Firebase Remote Config**
- **React Navigation**
- **react-native-reanimated-carousel**

---

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **Yarn** or **npm**
- **CocoaPods** (for iOS)
- **Android Studio** (for Android builds)

### Clone the repository
```sh
git clone https://github.com/yourusername/BooksApp.git
cd BooksApp
```

### Install dependencies
```sh
yarn install  # or npm install
```

### Configure Firebase
Make sure to add your **Firebase config files**:
- **For iOS** → `ios/GoogleService-Info.plist`
- **For Android** → `android/app/google-services.json`

### Run the app
#### 📱 Run on iOS
```sh
cd ios && pod install && cd ..
yarn ios  # or npm run ios
```

#### Run on Android
```sh
yarn android  # or npm run android
```

---

## 📌 TODO
- [ ] Implement **Empty state** UI
- [ ] Improve **Loading state** handling
- [ ] Refactor **texts & colors** into constants for maintainability

