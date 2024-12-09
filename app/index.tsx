// import { useEffect } from 'react';
// import { useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Index() {
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = await AsyncStorage.getItem('jwtToken'); // Check for JWT
//       const isDetailsFilled = await AsyncStorage.getItem('isDetailsFilled'); // Check if details are filled

//       if (token) {
//         if (isDetailsFilled === 'true') {
//           router.replace('/tabs/Home'); // Redirect to home if details are filled
//         } else {
//           router.replace('/screens/popup'); // Redirect to popup if details are not filled
//         }
//       } else {
//         router.replace('/Auth'); // Redirect to Auth if not logged in
//         // router.replace('/screens/popup'); // Redirect to Auth if not logged in
//         // router.replace('/tabs/Home'); // Redirect to Auth if not logged in
      
//       }
//     };

//     checkAuth();
//   }, []);

//   return null; // No UI, just redirect logic
// }

// jwt token implementing

// import { useEffect } from 'react';
// import { useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Index() {
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = await AsyncStorage.getItem('jwtToken'); // Check for JWT
//       if (token) {
//         router.replace('/tabs/Home'); // Redirect to home if authenticated
//       } else {
//         router.replace('/Auth'); // Redirect to Auth if not authenticated
//       }
//     };
//     checkAuth();
//   }, []);

//   return null;
// }


/// final  final 

// import { useEffect } from "react";
// import { useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function Index() {
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const storedData = await AsyncStorage.getItem("userData");
//       if (storedData) {
//         const parsedData = JSON.parse(storedData);
//         if (parsedData.isDetailsFilled) {
//           router.replace("/tabs/Home");
//         } else {
//           router.replace("/screens/popup");
//         }
//       } else {
//         // router.replace("/Auth");
//         router.replace("/screens/SecondPage/SecondPage");

//       }
//     };

//     checkAuth();
//   }, []);

//   return null;
// }




///a tuh 


import { useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedData = await AsyncStorage.getItem("userData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (parsedData.isDetailsFilled) {
            router.replace("/tabs/Home");
          } else {
            router.replace("/screens/popup");
          }
        } else {
          // router.replace("/screens/SecondPage/SecondPage"); // Default route for unauthenticated users
          router.replace("/screens/FirstPage/FirstPage"); // Default route for unauthenticated users

        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        router.replace("/Auth"); // Fallback to Auth page on error
      }
    };

    checkAuth();
  }, []);

  return null; // No UI needed; just redirect
}
