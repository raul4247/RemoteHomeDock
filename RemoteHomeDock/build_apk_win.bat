call react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
call cd "android"
call gradlew assembleDebug
call cd ".."
call robocopy "android\app\build\outputs\apk\debug" "apkAndroidTest" /it /is