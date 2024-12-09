// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";

// export default function HomeScreen() {
//   const [userName, setUserName] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const userDetails = await AsyncStorage.getItem("userDetails");
//       if (userDetails) {
//         const parsedDetails = JSON.parse(userDetails);
//         setUserName(parsedDetails.name); // Set only the name field
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const handleLogout = async () => {
//     console.log("Logging out user");
//     await AsyncStorage.removeItem("userDetails"); // Clear user details on logout
//     router.replace("/Auth");
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Welcome back, {userName}</Text>
//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   welcomeText: { fontSize: 20, marginBottom: 10 },
//   button: { backgroundColor: "#DC3545", padding: 10, borderRadius: 5 },
//   buttonText: { color: "#FFF", fontWeight: "bold" },
// });

// testing liek yeh wala ok hai displaying name pee sahi hai yeh ok hai 
// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";

// export default function HomeScreen() {
//   const [userName, setUserName] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userDetailsString = await AsyncStorage.getItem("userDetails");
//         if (userDetailsString) {
//           const userDetails = JSON.parse(userDetailsString);
//           setUserName(userDetails.name);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.removeItem("userDetails"); // Clear user details from storage
//       alert("Logged out successfully!");
//       router.replace("/Auth"); // Redirect back to login screen
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.greeting}>Welcome, {userName}!</Text>
//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <Text style={styles.logoutButtonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   greeting: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   logoutButton: {
//     backgroundColor: "#DC3545",
//     padding: 10,
//     borderRadius: 5,
//   },
//   logoutButtonText: {
//     color: "#FFF",
//     fontSize: 16,
//   },
// });


/// displaying for welcome !

import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDetailsString = await AsyncStorage.getItem("userDetails");
        if (userDetailsString) {
          const userDetails = JSON.parse(userDetailsString);
          setUserName(userDetails.name);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userDetails"); // Clear user details from storage
      alert("Logged out successfully!");
      router.replace("/Auth"); // Redirect back to login screen
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome {userName}!</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#DC3545",
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
