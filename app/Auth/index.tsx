// // import React, { useState } from "react";
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// // import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
// // import { useRouter } from "expo-router";


// // const Auth = () => {
// //   const [activeTab, setActiveTab] = useState("Login");
// //   const [isPasswordVisible, setPasswordVisible] = useState(false);
// //   const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
// //   const [mobileNumber, setMobileNumber] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [errors, setErrors] = useState({
// //     mobile: "",
// //     password: "",
// //     confirmPassword: "",
// //   });

// //   const router = useRouter();

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //     if (tab === "Register") {
// //       setErrors({ mobile: "", password: "", confirmPassword: "" });
// //     } else if (tab === "Login") {
// //       setErrors({ mobile: "", password: "", confirmPassword: "" });
// //     }
// //   };

// //   const validateForm = () => {
// //     let isValid = true;
// //     let newErrors = { mobile: "", password: "", confirmPassword: "" };

// //     if (mobileNumber.length !== 10) {
// //       newErrors.mobile = "Mobile number must be 10 digits.";
// //       isValid = false;
// //     }

// //     if (password.length < 8) {
// //       newErrors.password = "Password must be at least 8 characters.";
// //       isValid = false;
// //     }

// //     if (activeTab === "Register" && password !== confirmPassword) {
// //       newErrors.confirmPassword = "Passwords do not match.";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   const handleRegister = () => {
// //     if (validateForm()) {
// //       console.log("Registration successful!");
// //     }
// //   };

// //   const handleLogin = () => {
// //     if (validateForm()) {
// //       console.log("Login successful");
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
     

// //       {/* Toggle Button */}
// //       <View style={styles.toggleButtonContainer}>
// //         <TouchableOpacity
// //           style={[styles.toggleButton, activeTab === "Login" && styles.activeTab]}
// //           onPress={() => handleTabChange("Login")}
// //         >
// //           <Text style={[styles.toggleButtonText, activeTab === "Login" && styles.activeTabText]}>
// //             Login
// //           </Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[styles.toggleButton, activeTab === "Register" && styles.activeTab]}
// //           onPress={() => handleTabChange("Register")}
// //         >
// //           <Text style={[styles.toggleButtonText, activeTab === "Register" && styles.activeTabText]}>
// //             Register
// //           </Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Mobile Number Input */}
// //       <Text style={styles.label}>Mobile Number</Text>
// //       <View style={styles.inputContainer}>
// //         <FontAwesome name="phone" size={24} color="#888" style={styles.icon} />
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Mobile Number"
// //           keyboardType="numeric"
// //           maxLength={10}
// //           value={mobileNumber}
// //           onChangeText={(text) => setMobileNumber(text)}
// //         />
// //       </View>
// //       {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}

// //       {/* Password Input */}
// //       <Text style={styles.label}>Password</Text>
// //       <View style={styles.inputContainer}>
// //         <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Password"
// //           secureTextEntry={!isPasswordVisible}
// //           value={password}
// //           onChangeText={(text) => setPassword(text)}
// //         />
// //         <TouchableOpacity
// //           onPress={() => setPasswordVisible(!isPasswordVisible)}
// //           style={styles.eyeIcon}
// //         >
// //           <MaterialIcons
// //             name={isPasswordVisible ? "visibility" : "visibility-off"}
// //             size={24}
// //             color="#888"
// //           />
// //         </TouchableOpacity>
// //       </View>
// //       {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

// //       {activeTab === "Login" && (
// //         <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: 5 }}>
// //           <Text style={{ color: "#007BFF", fontWeight: "bold" }}>Forget Password?</Text>
// //         </TouchableOpacity>
// //       )}

// //       {activeTab === "Register" && (
// //         <>
// //           <Text style={styles.label}>Confirm Password</Text>
// //           <View style={styles.inputContainer}>
// //             <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Confirm Password"
// //               secureTextEntry={!isConfirmPasswordVisible}
// //               value={confirmPassword}
// //               onChangeText={(text) => setConfirmPassword(text)}
// //             />
// //             <TouchableOpacity
// //               onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
// //               style={styles.eyeIcon}
// //             >
// //               <MaterialIcons
// //                 name={isConfirmPasswordVisible ? "visibility" : "visibility-off"}
// //                 size={24}
// //                 color="#888"
// //               />
// //             </TouchableOpacity>
// //           </View>
// //           {errors.confirmPassword && (
// //             <Text style={styles.errorText}>{errors.confirmPassword}</Text>
// //           )}
// //         </>
// //       )}

// //       {/* Privacy Policy and Terms & Conditions */}
// //       {activeTab === "Login" && (
// //         <View style={styles.termsContainer}>
// //           <Text style={styles.termsText}>
// //             By signing in or registering, you agree to our{" "}
// //             <TouchableOpacity onPress={() => router.push("/screens/terms")}>
// //               <Text style={styles.linkText}>Terms & Conditions</Text>
// //             </TouchableOpacity>{" "}
// //             and{" "}
// //             <TouchableOpacity onPress={() => router.push("/screens/policy")}>
// //               <Text style={styles.linkText}>Privacy Policy</Text>
// //             </TouchableOpacity>.
// //           </Text>
// //         </View>
// //       )}

// //       {/* Register/Login Button */}
// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={activeTab === "Register" ? handleRegister : handleLogin}
// //       >
// //         <Text style={styles.buttonText}>{activeTab === "Register" ? "Register" : "Login"}</Text>
// //       </TouchableOpacity>

// //       <View style={styles.redirectContainer}>
// //         <Text>
// //           {activeTab === "Login"
// //             ? "Don’t have an account? "
// //             : "Already have an account? "}
// //         </Text>
// //         <TouchableOpacity
// //           onPress={() => handleTabChange(activeTab === "Login" ? "Register" : "Login")}
// //         >
// //           <Text style={styles.redirectText}>
// //             {activeTab === "Login" ? "Create an account" : "Login"}
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     paddingHorizontal: 20,
// //     backgroundColor: "#FFF",
// //   },
// //   header: {
// //     fontSize: 30,
// //     fontWeight: "bold",
// //     marginBottom: 10,
// //     textAlign: "left",
// //   },
// //   toggleButtonContainer: {
// //     flexDirection: "row",
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: "#000",
// //     marginBottom: 20,
// //   },
// //   toggleButton: {
// //     flex: 1,
// //     paddingVertical: 10,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     borderRadius: 10,
// //   },
// //   activeTab: {
// //     backgroundColor: "#000",
// //   },
// //   toggleButtonText: {
// //     color: "#000",
// //     fontWeight: "bold",
// //   },
// //   activeTabText: {
// //     color: "#FFF",
// //   },
// //   label: {
// //     fontSize: 15,
// //     fontWeight: "bold",
// //     color: "#000",
// //     marginBottom: 5,
// //     textAlign: "left",
// //     marginTop: 5,
// //   },
// //   inputContainer: {
// //     flexDirection: "row",
// //     borderWidth: 1,
// //     borderColor: "#ccc",
// //     paddingVertical: 10,
// //     paddingHorizontal: 15,
// //     borderRadius: 5,
// //     alignItems: "center",
// //     marginBottom: 10,
// //   },
// //   input: {
// //     flex: 1,
// //     height: 40,
// //     fontSize: 16,
// //   },
// //   icon: {
// //     marginRight: 10,
// //   },
// //   eyeIcon: {
// //     position: "absolute",
// //     right: 15,
// //   },
// //   errorText: {
// //     color: "red",
// //     fontSize: 12,
// //     marginBottom: 5,
// //   },
// //   termsContainer: {
// //     marginTop: 10,
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     flexWrap: "wrap",
// //   },
// //   termsText: {
// //     fontSize: 14,
// //     textAlign: "center",
// //   },
// //   linkText: {
// //     color: "#007BFF",
// //     textDecorationLine: "underline",
// //   },
// //   button: {
// //     backgroundColor: "#000",
// //     paddingVertical: 10,
// //     borderRadius: 5,
// //     alignItems: "center",
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: "#FFF",
// //     fontWeight: "bold",
// //     fontSize: 16,
// //   },
// //   redirectContainer: {
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     marginTop: 20,
// //   },
// //   redirectText: {
// //     color: "#007BFF",
// //     fontWeight: "bold",
// //   },
// // });

// // export default Auth;

// // ook hai final hai but popup scren  k sath wokrin 
// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// // } from "react-native";
// // import { useRouter } from "expo-router";
// // import AsyncStorage from "@react-native-async-storage/async-storage";

// // const Auth = () => {
// //   const [activeTab, setActiveTab] = useState("Login");
// //   const [mobileNumber, setMobileNumber] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const router = useRouter();

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const handleRegister = async () => {
// //     if (password !== confirmPassword) {
// //       alert("Passwords do not match");
// //       return;
// //     }

// //     if (mobileNumber.length !== 10) {
// //       alert("Mobile number must be 10 digits");
// //       return;
// //     }

// //     const userData = {
// //       mobileNumber,
// //       password,
// //     };

// //     try {
// //       await AsyncStorage.setItem("userToken", JSON.stringify(userData));
// //       console.log("Token Created:", userData);
// //       alert("Registration successful!");
// //       router.replace("/tabs/Home");
// //     } catch (error) {
// //       console.error("Error saving registration data to AsyncStorage", error);
// //     }
// //   };

// //   const handleLogin = async () => {
// //     try {
// //       const storedToken = await AsyncStorage.getItem("userToken");
// //       if (storedToken) {
// //         const parsedToken = JSON.parse(storedToken);
// //         if (
// //           parsedToken.mobileNumber === mobileNumber &&
// //           parsedToken.password === password
// //         ) {
// //           console.log("Token Found:", parsedToken);
// //           alert("Login Successful!");
// //           router.replace("/tabs/Home");
// //         } else {
// //           alert("Invalid credentials.");
// //         }
// //       } else {
// //         alert("No registered account found. Please register.");
// //       }
// //     } catch (error) {
// //       console.error("Error during login", error);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.toggleButtonContainer}>
// //         <TouchableOpacity
// //           style={[styles.toggleButton, activeTab === "Login" && styles.activeTab]}
// //           onPress={() => handleTabChange("Login")}
// //         >
// //           <Text style={styles.toggleButtonText}>Login</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[styles.toggleButton, activeTab === "Register" && styles.activeTab]}
// //           onPress={() => handleTabChange("Register")}
// //         >
// //           <Text style={styles.toggleButtonText}>Register</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Mobile Number"
// //         keyboardType="numeric"
// //         maxLength={10}
// //         value={mobileNumber}
// //         onChangeText={setMobileNumber}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         secureTextEntry
// //         value={password}
// //         onChangeText={setPassword}
// //       />
// //       {activeTab === "Register" && (
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Confirm Password"
// //           secureTextEntry
// //           value={confirmPassword}
// //           onChangeText={setConfirmPassword}
// //         />
// //       )}

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={activeTab === "Login" ? handleLogin : handleRegister}
// //       >
// //         <Text style={styles.buttonText}>{activeTab === "Login" ? "Login" : "Register"}</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default Auth;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     paddingHorizontal: 20,
// //     justifyContent: "center",
// //     backgroundColor: "#FFF",
// //   },
// //   toggleButtonContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginBottom: 20,
// //   },
// //   toggleButton: {
// //     flex: 1,
// //     paddingVertical: 10,
// //     alignItems: "center",
// //     backgroundColor: "#ddd",
// //     marginRight: 5,
// //     borderRadius: 5,
// //   },
// //   activeTab: {
// //     backgroundColor: "#000",
// //   },
// //   toggleButtonText: {
// //     fontSize: 16,
// //     color: "#333",
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: "#aaa",
// //     padding: 10,
// //     marginBottom: 15,
// //     borderRadius: 5,
// //     fontSize: 16,
// //   },
// //   button: {
// //     backgroundColor: "#000",
// //     padding: 15,
// //     borderRadius: 5,
// //     alignItems: "center",
// //     marginTop: 10,
// //   },
// //   buttonText: {
// //     color: "#FFF",
// //     fontSize: 16,
// //   },
// // });

// // these bellwo neeche wala bhi sahi hai ok hai done but logout karne k baad login karne pe welocm ! dikhr ah 
// // import React, { useState } from "react";
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// // import { useRouter } from "expo-router";
// // import AsyncStorage from "@react-native-async-storage/async-storage";

// // const Auth = () => {
// //   const [activeTab, setActiveTab] = useState("Login");
// //   const [mobileNumber, setMobileNumber] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const router = useRouter();

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const handleRegister = async () => {
// //     if (password !== confirmPassword) {
// //       alert("Passwords do not match");
// //       return;
// //     }

// //     if (mobileNumber.length !== 10) {
// //       alert("Mobile number must be 10 digits");
// //       return;
// //     }

// //     const userData = { mobileNumber, password };
// //     try {
// //       await AsyncStorage.setItem("userToken", JSON.stringify(userData));
// //       alert("Registration successful!");
// //       router.replace("/screens/popup");
// //     } catch (error) {
// //       console.error("Error saving registration data to AsyncStorage", error);
// //     }
// //   };

// //   const handleLogin = async () => {
// //     try {
// //       const storedToken = await AsyncStorage.getItem("userToken");
// //       if (storedToken) {
// //         const parsedToken = JSON.parse(storedToken);
// //         if (parsedToken.mobileNumber === mobileNumber && parsedToken.password === password) {
// //           alert("Login successful!");
// //           router.replace("/tabs/Home");
// //         } else {
// //           alert("Invalid credentials.");
// //         }
// //       } else {
// //         alert("No registered account found. Please register.");
// //       }
// //     } catch (error) {
// //       console.error("Login failed");
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.toggleButtonContainer}>
// //         <TouchableOpacity
// //           style={[styles.toggleButton, activeTab === "Login" && styles.activeTab]}
// //           onPress={() => handleTabChange("Login")}
// //         >
// //           <Text style={styles.toggleButtonText}>Login</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[styles.toggleButton, activeTab === "Register" && styles.activeTab]}
// //           onPress={() => handleTabChange("Register")}
// //         >
// //           <Text style={styles.toggleButtonText}>Register</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Mobile Number"
// //         keyboardType="numeric"
// //         maxLength={10}
// //         value={mobileNumber}
// //         onChangeText={setMobileNumber}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         secureTextEntry
// //         value={password}
// //         onChangeText={setPassword}
// //       />
// //       {activeTab === "Register" && (
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Confirm Password"
// //           secureTextEntry
// //           value={confirmPassword}
// //           onChangeText={setConfirmPassword}
// //         />
// //       )}

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={activeTab === "Login" ? handleLogin : handleRegister}
// //       >
// //         <Text style={styles.buttonText}>{activeTab === "Login" ? "Login" : "Register"}</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default Auth;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "#fff",
// //     paddingHorizontal: 20,
// //   },
// //   toggleButtonContainer: {
// //     flexDirection: "row",
// //     marginBottom: 10,
// //   },
// //   toggleButton: {
// //     padding: 10,
// //     backgroundColor: "#ddd",
// //     borderRadius: 5,
// //     margin: 5,
// //   },
// //   activeTab: {
// //     backgroundColor: "#000",
// //   },
// //   toggleButtonText: {
// //     color: "#333",
// //     fontSize: 16,
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: "#aaa",
// //     padding: 10,
// //     marginBottom: 15,
// //     borderRadius: 5,
// //   },
// //   button: {
// //     backgroundColor: "#000",
// //     padding: 15,
// //     borderRadius: 5,
// //     alignItems: "center",
// //     marginTop: 10,
// //   },
// //   buttonText: {
// //     color: "#FFF",
// //     fontSize: 16,
// //   },
// // });


// // testing wel

// // import React, { useState } from "react";
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// // import { useRouter } from "expo-router";
// // import AsyncStorage from "@react-native-async-storage/async-storage";

// // const Auth = () => {
// //   const [activeTab, setActiveTab] = useState("Login");
// //   const [mobileNumber, setMobileNumber] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const router = useRouter();

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   // Handle user registration
// //   const handleRegister = async () => {
// //     if (password !== confirmPassword) {
// //       alert("Passwords do not match");
// //       return;
// //     }

// //     if (mobileNumber.length !== 10) {
// //       alert("Mobile number must be 10 digits");
// //       return;
// //     }

// //     const userData = { mobileNumber, password };
// //     try {
// //       // Save registration credentials to AsyncStorage
// //       await AsyncStorage.setItem("userToken", JSON.stringify(userData));
// //       alert("Registration successful!");
// //       router.replace("/screens/popup");
// //     } catch (error) {
// //       console.error("Error saving registration data to AsyncStorage", error);
// //     }
// //   };

// //   const handleLogin = async () => {
// //     try {
// //       const storedToken = await AsyncStorage.getItem("userToken");
// //       if (storedToken) {
// //         const parsedToken = JSON.parse(storedToken);
// //         if (parsedToken.mobileNumber === mobileNumber && parsedToken.password === password) {
// //           alert("Login successful!");
// //           router.replace("/tabs/Home");
// //         } else {
// //           alert("Invalid credentials.");
// //         }
// //       } else {
// //         alert("No registered account found. Please register.");
// //       }
// //     } catch (error) {
// //       console.error("Login failed");
// //     }
// //   };

// //   // Allow the user to log out only locally without clearing AsyncStorage
// //   const handleLogout = async () => {
// //     try {
// //       await AsyncStorage.removeItem("sessionToken"); // Clear only the logged-in session
// //       alert("Logged out successfully!");
// //       router.replace("/Auth");
// //     } catch (error) {
// //       console.error("Error logging out:", error);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.toggleButtonContainer}>
// //         <TouchableOpacity
// //           style={[styles.toggleButton, activeTab === "Login" && styles.activeTab]}
// //           onPress={() => handleTabChange("Login")}
// //         >
// //           <Text style={styles.toggleButtonText}>Login</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[styles.toggleButton, activeTab === "Register" && styles.activeTab]}
// //           onPress={() => handleTabChange("Register")}
// //         >
// //           <Text style={styles.toggleButtonText}>Register</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Mobile Number"
// //         keyboardType="numeric"
// //         maxLength={10}
// //         value={mobileNumber}
// //         onChangeText={setMobileNumber}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         secureTextEntry
// //         value={password}
// //         onChangeText={setPassword}
// //       />
// //       {activeTab === "Register" && (
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Confirm Password"
// //           secureTextEntry
// //           value={confirmPassword}
// //           onChangeText={setConfirmPassword}
// //         />
// //       )}

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={activeTab === "Login" ? handleLogin : handleRegister}
// //       >
// //         <Text style={styles.buttonText}>{activeTab === "Login" ? "Login" : "Register"}</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default Auth;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "#fff",
// //     paddingHorizontal: 20,
// //   },
// //   toggleButtonContainer: {
// //     flexDirection: "row",
// //     marginBottom: 10,
// //   },
// //   toggleButton: {
// //     padding: 10,
// //     backgroundColor: "#ddd",
// //     borderRadius: 5,
// //     margin: 5,
// //   },
// //   activeTab: {
// //     backgroundColor: "#000",
// //   },
// //   toggleButtonText: {
// //     color: "#333",
// //     fontSize: 16,
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: "#aaa",
// //     padding: 10,
// //     marginBottom: 15,
// //     borderRadius: 5,
// //   },
// //   button: {
// //     backgroundColor: "#000",
// //     padding: 15,
// //     borderRadius: 5,
// //     alignItems: "center",
// //     marginTop: 10,
// //   },
// //   buttonText: {
// //     color: "#FFF",
// //     fontSize: 16,
// //   },
// // });


// // styling 



// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Animated,
// } from "react-native";
// import { useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Ionicons } from "@expo/vector-icons"; // For icons

// const Auth = () => {
//   const [activeTab, setActiveTab] = useState("Login");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [togglePosition] = useState(new Animated.Value(0)); // For toggle animation

//   const router = useRouter();

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     Animated.timing(togglePosition, {
//       toValue: tab === "Login" ? 0 : 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handleRegister = async () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     if (mobileNumber.length !== 10) {
//       alert("Mobile number must be 10 digits");
//       return;
//     }

//     const userData = { mobileNumber, password };
//     try {
//       await AsyncStorage.setItem("userToken", JSON.stringify(userData));
//       alert("Registration successful!");
//       router.replace("/screens/popup");
//     } catch (error) {
//       console.error("Error saving registration data to AsyncStorage", error);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const storedToken = await AsyncStorage.getItem("userToken");
//       if (storedToken) {
//         const parsedToken = JSON.parse(storedToken);
//         if (parsedToken.mobileNumber === mobileNumber && parsedToken.password === password) {
//           alert("Login successful!");
//           router.replace("/tabs/Home");
//         } else {
//           alert("Invalid credentials.");
//         }
//       } else {
//         alert("No registered account found. Please register.");
//       }
//     } catch (error) {
//       console.error("Login failed");
//     }
//   };

//   const navigateToPrivacyPolicy = () => {
//     router.push("/screens/privacy-policy");
//   };

//   const navigateToTermsConditions = () => {
//     router.push("/screens/terms-conditions");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.header}>
//         <Text style={styles.hvo}>HVO </Text>
//         <Text style={styles.connect}>Connect</Text>
//       </Text>

//       {/* Toggle Button */}
//       <View style={styles.toggleButtonContainer}>
//         <Animated.View
//           style={[
//             styles.activeIndicator,
//             {
//               transform: [
//                 {
//                   translateX: togglePosition.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [0, 190],
//                   }),
//                 },
//               ],
//             },
//           ]}
//         />
//         <TouchableOpacity
//           style={styles.toggleButton}
//           onPress={() => handleTabChange("Login")}
//         >
//           <Text style={[styles.toggleButtonText, activeTab === "Login" && styles.activeText]}>
//             Login
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.toggleButton}
//           onPress={() => handleTabChange("Register")}
//         >
//           <Text style={[styles.toggleButtonText, activeTab === "Register" && styles.activeText]}>
//             Register
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Dynamic Text Below Toggle */}
//       <Text style={styles.dynamicText}>
//         {activeTab === "Login" ? "LOGIN." : "REGISTER"}
//       </Text>

//       {/* Form Fields */}
//       <View style={styles.form}>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Mobile Number</Text>
//           <View style={styles.inputWrapper}>
//             <Ionicons name="call-outline" size={20} color="#888" />
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your mobile number"
//               keyboardType="numeric"
//               maxLength={10}
//               value={mobileNumber}
//               onChangeText={setMobileNumber}
//             />
//           </View>
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Password</Text>
//           <View style={styles.inputWrapper}>
//             <Ionicons name="lock-closed-outline" size={20} color="#888" />
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your password"
//               secureTextEntry={!showPassword}
//               value={password}
//               onChangeText={setPassword}
//             />
//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Ionicons
//                 name={showPassword ? "eye-outline" : "eye-off-outline"}
//                 size={20}
//                 color="#888"
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {activeTab === "Register" && (
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Confirm Password</Text>
//             <View style={styles.inputWrapper}>
//               <Ionicons name="lock-closed-outline" size={20} color="#888" />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Confirm your password"
//                 secureTextEntry={!showPassword}
//                 value={confirmPassword}
//                 onChangeText={setConfirmPassword}
//               />
//             </View>
//           </View>
//         )}

//         {activeTab === "Login" && (
//           <TouchableOpacity style={styles.forgotPassword}>
//             <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//           </TouchableOpacity>
//         )}

//         {activeTab === "Login" && (
//           <View style={styles.policyContainer}>
//             <TouchableOpacity onPress={navigateToPrivacyPolicy}>
//               <Text style={styles.policyText}>Privacy Policy</Text>
//             </TouchableOpacity>
//             <Text style={styles.separator}> | </Text>
//             <TouchableOpacity onPress={navigateToTermsConditions}>
//               <Text style={styles.policyText}>Terms & Conditions</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         <TouchableOpacity
//           style={styles.button}
//           onPress={activeTab === "Login" ? handleLogin : handleRegister}
//         >
//           <Text style={styles.buttonText}>
//             {activeTab === "Login" ? "Login" : "Register"}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Auth;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//     justifyContent: "center",
//   },
//   header: {
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//     marginTop: -80, // Moves it higher
    
    
//   },
//   hvo: {
//     color: "#000",
//   },
//   connect: {
//     color: "#888",
//   },
//   toggleButtonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     position: "relative",
//     marginBottom: 20,
//     borderRadius: 8,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     height: 40,
//     backgroundColor: "#F0F0F0",
  
  
//   },
//   toggleButton: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
    
//   },
//   toggleButtonText: {
//     fontSize: 16,
//     color: "#555",
//   },
//   activeIndicator: {
//     position: "absolute",
//     height: "100%",
//     width: "50%",
//     backgroundColor: "#000",
//     borderRadius: 8,
//   },
//   activeText: {
//     color: "#fff",
//   },
//   dynamicText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "left",
//     color: "#333",
//   },
//   form: {
//     marginTop: 10,
//   },
//   inputContainer: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 5,
//   },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#aaa",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   button: {
//     backgroundColor: "#000",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   forgotPassword: {
//     alignItems: "flex-end",
//     marginTop: 10,
//   },
//   forgotPasswordText: {
//     color: "#007bff",
//     fontSize: 14,
//   },
//   policyContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 10,
//   },
//   policyText: {
//     fontSize: 14,
//     color: "#007bff",
//   },
//   separator: {
//     fontSize: 14,
//     color: "#888",
//   },

// })


// // these attemopt for storign the client side witouth db

// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router"; // For navigation

// const Auth = () => {
//   const [activeTab, setActiveTab] = useState("Login");
//   const [isPasswordVisible, setPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const router = useRouter();
//   const [storedCredentials, setStoredCredentials] = useState<{ mobile: string; password: string } | null>(null);

//   // Check if the user is already registered
//   useEffect(() => {
//     const loadCredentials = async () => {
//       const credentials = await AsyncStorage.getItem("userCredentials");
//       if (credentials) {
//         setStoredCredentials(JSON.parse(credentials));
//       }
//     };

//     loadCredentials();
//   }, []);

//   // Switch between Login and Register tabs
//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//     setErrors({ mobile: "", password: "", confirmPassword: "" });
//   };

//   // Validate the input fields
//   const validateForm = () => {
//     let isValid = true;
//     let newErrors = { mobile: "", password: "", confirmPassword: "" };

//     if (mobileNumber.length !== 10) {
//       newErrors.mobile = "Mobile number must be 10 digits.";
//       isValid = false;
//     }

//     if (password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters.";
//       isValid = false;
//     }

//     if (activeTab === "Register" && password !== confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match.";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // Handle the login process
//   const handleLogin = async () => {
//     if (validateForm()) {
//       if (storedCredentials && storedCredentials.mobile === mobileNumber && storedCredentials.password === password) {
//         // Generate a JWT token on successful login (simulation)
//         const mockToken = "mock-jwt-token-12345"; 
//         await AsyncStorage.setItem("jwtToken", mockToken);
        
//         router.push("/home"); // Navigate to the home screen on success
//       } else {
//         Alert.alert("Invalid Credentials", "Please check your mobile number and password.");
//       }
//     }
//   };

//   // Handle the registration process
//   const handleRegister = async () => {
//     if (validateForm()) {
//       // Save user credentials in AsyncStorage (simulation)
//       const userCredentials = { mobile: mobileNumber, password: password };
//       await AsyncStorage.setItem("userCredentials", JSON.stringify(userCredentials));

//       // Generate JWT token for the new user (mocked token)
//       const mockToken = "mock-jwt-token-12345";
//       await AsyncStorage.setItem("jwtToken", mockToken);

//       // Show a success message and redirect to Home screen
//       Alert.alert("Registration Successful", "You are now registered. Redirecting to Home.", [
//         {
//           text: "OK",
//           onPress: () => {
//             router.push("/home");
//           },
//         },
//       ]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerText}>HVO</Text>
//         <Text style={styles.headerText2}>CONNECT</Text>
//       </View>

//       {/* Toggle for Login/Register */}
//       <View style={styles.toggleButtonContainer}>
//         <TouchableOpacity
//           style={[styles.toggleButton, activeTab === "Login" && styles.activeTab]}
//           onPress={() => handleTabChange("Login")}
//         >
//           <Text style={[styles.toggleButtonText, activeTab === "Login" && styles.activeTabText]}>
//             Login
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.toggleButton, activeTab === "Register" && styles.activeTab]}
//           onPress={() => handleTabChange("Register")}
//         >
//           <Text style={[styles.toggleButtonText, activeTab === "Register" && styles.activeTabText]}>
//             Register
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Action Text */}
//       <Text style={styles.actionTextLeft}>{activeTab}</Text>

//       {/* Mobile Number Input */}
//       <Text style={styles.label}>Mobile No</Text>
//       <View style={styles.inputContainer}>
//         <FontAwesome name="mobile" size={24} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Mobile Number"
//           keyboardType="numeric"
//           maxLength={10}
//           value={mobileNumber}
//           onChangeText={(text) => setMobileNumber(text)}
//         />
//       </View>
//       {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}

//       {/* Password Input */}
//       <Text style={styles.label}>Password</Text>
//       <View style={styles.inputContainer}>
//         <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry={!isPasswordVisible}
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//         />
//         <TouchableOpacity
//           onPress={() => setPasswordVisible(!isPasswordVisible)}
//           style={styles.eyeIcon}
//         >
//           <MaterialIcons
//             name={isPasswordVisible ? "visibility" : "visibility-off"}
//             size={24}
//             color="#888"
//           />
//         </TouchableOpacity>
//       </View>
//       {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

//       {/* Register Specific Inputs */}
//       {activeTab === "Register" && (
//         <>
//           <Text style={styles.label}>Confirm Password</Text>
//           <View style={styles.inputContainer}>
//             <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Confirm Password"
//               secureTextEntry={!isConfirmPasswordVisible}
//               value={confirmPassword}
//               onChangeText={(text) => setConfirmPassword(text)}
//             />
//             <TouchableOpacity
//               onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
//               style={styles.eyeIcon}
//             >
//               <MaterialIcons
//                 name={isConfirmPasswordVisible ? "visibility" : "visibility-off"}
//                 size={24}
//                 color="#888"
//               />
//             </TouchableOpacity>
//           </View>
//           {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
//         </>
//       )}

//       {/* Register/Login Button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={activeTab === "Register" ? handleRegister : handleLogin}
//       >
//         <Text style={styles.buttonText}>{activeTab === "Register" ? "Register" : "Login"}</Text>
//       </TouchableOpacity>

//       {/* Redirect to Switch Tabs */}
//       <View style={styles.redirectContainer}>
//         <Text>
//           {activeTab === "Login" ? "Don’t have an account? " : "Already have an account? "}
//         </Text>
//         <TouchableOpacity onPress={() => handleTabChange(activeTab === "Login" ? "Register" : "Login")}>
//           <Text style={styles.redirectText}>
//             {activeTab === "Login" ? "Create an account" : "Login"}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingHorizontal: 20,
//       backgroundColor: "#FFF",
//     },
//     headerContainer: {
//       flexDirection: "row",  
//       alignItems:'center',
//       justifyContent:'center',
//       marginTop: 90,
    
//     },
//     headerText: {
//       fontSize: 40,
//       fontWeight: "bold",  
//       color: "#000",
     
//     },
//     headerText2: {
//       fontSize: 30,
//       fontWeight: "normal",  // CONNECT is normal weight
//       color: "#888",  // Lighter color for "CONNECT"
//       marginLeft: 5,
//   }
//     ,
//     toggleButtonContainer: {
//       flexDirection: "row",
//       borderRadius: 10,
//       borderWidth: 1,
//       borderColor: "#000",
//       marginBottom: 20,
//       marginTop: 40,
//       width: 200,
//       marginLeft: 90,
//       backgroundColor:'#E0E0E0',
//     },
//     toggleButton: {
//       flex: 1,
//       paddingVertical: 10,
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: 10,
//     },
//     activeTab: {
//       backgroundColor: "#000",
//     },
//     toggleButtonText: {
//       color: "#000",
//       fontWeight: "bold",
//     },
//     activeTabText: {
//       color: "#FFF",
//     },
//     label: {
//       fontSize: 15,
//       fontWeight: "bold",
//       color: "#000",
//       marginBottom: 5,
//       textAlign: "left",
//       marginTop: 5,
//     },
//     inputContainer: {
//       flexDirection: "row",
//       borderWidth: 1,
//       borderColor: "#B0B0B0", 
//       paddingVertical: 10,
//       paddingHorizontal: 15,
//       borderRadius: 5,
//       alignItems: "center",
//       marginBottom: 10,
//       backgroundColor: "#F2F2F2", 
//     },
//     input: {
//       flex: 1,
//       height: 40,
//       fontSize: 16,
//       color: "#000",
//     },
//     icon: {
//       marginRight: 10,
//     },
//     eyeIcon: {
//       position: "absolute",
//       right: 15,
//     },
//     errorText: {
//       color: "red",
//       fontSize: 12,
//       marginBottom: 5,
//     },
//     termsContainer: {
//       marginTop: 10,
//       flexDirection: "row",   
//       justifyContent: "flex-start", // Align items to the left
//       flexWrap: "nowrap",   
//     },
//     termsText: {
//       fontSize: 14,
//       textAlign: "left",  
//     },
    
//     linkText: {
//       color: "#007BFF",
//       textDecorationLine: "underline",
//     },
//     button: {
//       backgroundColor: "#000",
//       paddingVertical: 10,
//       borderRadius: 5,
//       alignItems: "center",
//       marginTop: 20,
//     },
//     buttonText: {
//       color: "#FFF",
//       fontWeight: "bold",
//       fontSize: 16,
//     },
//     redirectContainer: {
//       flexDirection: "row",
//       justifyContent: "center",
//       marginTop: 20,
//     },
//     redirectText: {
//       color: "#007BFF",
//       fontWeight: "bold",
//     },
//     actionTextLeft: {
//       fontSize: 25,
//       fontWeight: "bold",
//       textAlign: "left",  
//       marginBottom: 10,
//     },
//   });

// export default Auth;


// // // redirect to popup scr

// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router"; // For navigation

// const Auth = () => {
//   const [activeTab, setActiveTab] = useState("Login");
//   const [isPasswordVisible, setPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const router = useRouter();
//   const [storedCredentials, setStoredCredentials] = useState<{ mobile: string; password: string } | null>(null);

//   // Check if the user is already registered
//   useEffect(() => {
//     const loadCredentials = async () => {
//       const credentials = await AsyncStorage.getItem("userCredentials");
//       if (credentials) {
//         setStoredCredentials(JSON.parse(credentials));
//       }
//     };

//     loadCredentials();
//   }, []);

//   // Switch between Login and Register tabs
//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//     setErrors({ mobile: "", password: "", confirmPassword: "" });
//   };

//   // Validate the input fields
//   const validateForm = () => {
//     let isValid = true;
//     let newErrors = { mobile: "", password: "", confirmPassword: "" };

//     if (mobileNumber.length !== 10) {
//       newErrors.mobile = "Mobile number must be 10 digits.";
//       isValid = false;
//     }

//     if (password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters.";
//       isValid = false;
//     }

//     if (activeTab === "Register" && password !== confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match.";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // Handle the login process
//   const handleLogin = async () => {
//     if (validateForm()) {
//       if (storedCredentials && storedCredentials.mobile === mobileNumber && storedCredentials.password === password) {
//         // Generate a JWT token on successful login (simulation)
//         const mockToken = "mock-jwt-token-12345"; 
//         await AsyncStorage.setItem("jwtToken", mockToken);
        
//         router.push("/home"); // Navigate to the home screen on success
//       } else {
//         Alert.alert("Invalid Credentials", "Please check your mobile number and password.");
//       }
//     }
//   };

//   // Handle the registration process
//   const handleRegister = async () => {
//     if (validateForm()) {
//       // Save user credentials in AsyncStorage (simulation)
//       const userCredentials = { mobile: mobileNumber, password: password };
//       await AsyncStorage.setItem("userCredentials", JSON.stringify(userCredentials));

//       // Generate JWT token for the new user (mocked token)
//       const mockToken = "mock-jwt-token-12345";
//       await AsyncStorage.setItem("jwtToken", mockToken);

//       // After successful registration, redirect to PopupScreen to fill additional details
//       Alert.alert("Registration Successful", "You are now registered. Redirecting to fill additional details.", [
//         {
//           text: "OK",
//           onPress: () => {
//             router.push("/(root)/(tabs)/PopupScreen"); // Redirect to PopupScreen for additional details
//           },
//         },
//       ]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerText}>HVO</Text>
//         <Text style={styles.headerText2}>CONNECT</Text>
//       </View>

//       {/* Toggle for Login/Register */}
//       <View style={styles.toggleButtonContainer}>
//         <TouchableOpacity
//           style={[styles.toggleButton, activeTab === "Login" && styles.activeTab]}
//           onPress={() => handleTabChange("Login")}
//         >
//           <Text style={[styles.toggleButtonText, activeTab === "Login" && styles.activeTabText]}>
//             Login
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.toggleButton, activeTab === "Register" && styles.activeTab]}
//           onPress={() => handleTabChange("Register")}
//         >
//           <Text style={[styles.toggleButtonText, activeTab === "Register" && styles.activeTabText]}>
//             Register
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Action Text */}
//       <Text style={styles.actionTextLeft}>{activeTab}</Text>

//       {/* Mobile Number Input */}
//       <Text style={styles.label}>Mobile No</Text>
//       <View style={styles.inputContainer}>
//         <FontAwesome name="mobile" size={24} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Mobile Number"
//           keyboardType="numeric"
//           maxLength={10}
//           value={mobileNumber}
//           onChangeText={(text) => setMobileNumber(text)}
//         />
//       </View>
//       {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}

//       {/* Password Input */}
//       <Text style={styles.label}>Password</Text>
//       <View style={styles.inputContainer}>
//         <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry={!isPasswordVisible}
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//         />
//         <TouchableOpacity
//           onPress={() => setPasswordVisible(!isPasswordVisible)}
//           style={styles.eyeIcon}
//         >
//           <MaterialIcons
//             name={isPasswordVisible ? "visibility" : "visibility-off"}
//             size={24}
//             color="#888"
//           />
//         </TouchableOpacity>
//       </View>
//       {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

//       {/* Register Specific Inputs */}
//       {activeTab === "Register" && (
//         <>
//           <Text style={styles.label}>Confirm Password</Text>
//           <View style={styles.inputContainer}>
//             <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Confirm Password"
//               secureTextEntry={!isConfirmPasswordVisible}
//               value={confirmPassword}
//               onChangeText={(text) => setConfirmPassword(text)}
//             />
//             <TouchableOpacity
//               onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
//               style={styles.eyeIcon}
//             >
//               <MaterialIcons
//                 name={isConfirmPasswordVisible ? "visibility" : "visibility-off"}
//                 size={24}
//                 color="#888"
//               />
//             </TouchableOpacity>
//           </View>
//           {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
//         </>
//       )}

//       {/* Register/Login Button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={activeTab === "Register" ? handleRegister : handleLogin}
//       >
//         <Text style={styles.buttonText}>{activeTab === "Register" ? "Register" : "Login"}</Text>
//       </TouchableOpacity>

//       {/* Redirect to Switch Tabs */}
//       <View style={styles.redirectContainer}>
//         <Text>
//           {activeTab === "Login" ? "Don’t have an account? " : "Already have an account? "}
//         </Text>
//         <TouchableOpacity onPress={() => handleTabChange(activeTab === "Login" ? "Register" : "Login")}>
//           <Text style={styles.redirectText}>
//             {activeTab === "Login" ? "Create an account" : "Login"}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: "#FFF",
//   },
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 90,
//   },
//   headerText: {
//     fontSize: 40,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   headerText2: {
//     fontSize: 30,
//     fontWeight: "normal",
//     color: "#888",
//     marginLeft: 5,
//   },
//   toggleButtonContainer: {
//     flexDirection: "row",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#000",
//     marginBottom: 20,
//     marginTop: 40,
//     width: 200,
//     marginLeft: 90,
//     backgroundColor: '#E0E0E0',
//   },
//   toggleButton: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//   },
//   activeTab: {
//     backgroundColor: "#000",
//   },
//   toggleButtonText: {
//     color: "#000",
//     fontWeight: "bold",
//   },
//   activeTabText: {
//     color: "#FFF",
//   },
//   label: {
//     fontSize: 15,
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: 5,
//     textAlign: "left",
//     marginTop: 5,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     borderWidth: 1,
//     borderColor: "#B0B0B0",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     marginBottom: 10,
//     backgroundColor: "#F2F2F2",
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//     color: "#000",
//   },
//   icon: {
//     marginRight: 10,
//   },
//   eyeIcon: {
//     position: "absolute",
//     right: 15,
//   },
//   errorText: {
//     color: "red",
//     fontSize: 12,
//     marginBottom: 5,
//   },
//   termsContainer: {
//     marginTop: 10,
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     flexWrap: "nowrap",
//   },
//   termsText: {
//     fontSize: 14,
//     textAlign: "left",
//   },
//   linkText: {
//     color: "#007BFF",
//     textDecorationLine: "underline",
//   },
//   button: {
//     backgroundColor: "#000",
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   redirectContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   redirectText: {
//     color: "#007BFF",
//     fontWeight: "bold",
//   },
//   actionTextLeft: {
//     fontSize: 25,
//     fontWeight: "bold",
//     textAlign: "left",
//     marginBottom: 10,
//   },
// });

// export default Auth;


// these code is offering like databse and non db stuff 

// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router"; // For navigation

// const Auth = () => {
//   const [activeTab, setActiveTab] = useState("Login");
//   const [isPasswordVisible, setPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const router = useRouter();
//   const [storedCredentials, setStoredCredentials] = useState<{ mobile: string; password: string } | null>(null);

//   // Check if the user is already registered (using AsyncStorage for now)
//   useEffect(() => {
//     const loadCredentials = async () => {
//       const credentials = await AsyncStorage.getItem("userCredentials");
//       if (credentials) {
//         setStoredCredentials(JSON.parse(credentials));
//       }
//     };

//     loadCredentials();
//   }, []);

//   // Switch between Login and Register tabs
//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//     setErrors({ mobile: "", password: "", confirmPassword: "" });
//   };

//   // Validate the input fields
//   const validateForm = () => {
//     let isValid = true;
//     let newErrors = { mobile: "", password: "", confirmPassword: "" };

//     if (mobileNumber.length !== 10) {
//       newErrors.mobile = "Mobile number must be 10 digits.";
//       isValid = false;
//     }

//     if (password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters.";
//       isValid = false;
//     }

//     if (activeTab === "Register" && password !== confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match.";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // Handle the login process
//   const handleLogin = async () => {
//     if (validateForm()) {
//       if (storedCredentials && storedCredentials.mobile === mobileNumber && storedCredentials.password === password) {
//         // Generate a JWT token on successful login (simulation)
//         const mockToken = "mock-jwt-token-12345"; 
//         await AsyncStorage.setItem("jwtToken", mockToken);
        
//         router.push("/tabs/Home"); // Navigate to the home screen on success

//         // ----- DATABASE CODE FOR LOGIN (To be implemented in future) -----
//         // 1. Call your backend API to verify credentials against the database
//         // 2. If credentials match, generate JWT token and store it
//         // Example: 
//         // const response = await fetch('your-api-url/login', {
//         //   method: 'POST',
//         //   body: JSON.stringify({ mobile: mobileNumber, password: password }),
//         //   headers: { 'Content-Type': 'application/json' }
//         // });
//         // const data = await response.json();
//         // if (data.success) {
//         //   const token = data.token;
//         //   await AsyncStorage.setItem("jwtToken", token);
//         //   router.push("/home"); // Navigate to home on success
//         // }
//       } else {
//         Alert.alert("Invalid Credentials", "Please check your mobile number and password.");
//       }
//     }
//   };

//   // Handle the registration process
//   const handleRegister = async () => {
//     if (validateForm()) {
//       // Save user credentials in AsyncStorage (simulation)
//       const userCredentials = { mobile: mobileNumber, password: password };
//       await AsyncStorage.setItem("userCredentials", JSON.stringify(userCredentials));

//       // Generate JWT token for the new user (mocked token)
//       const mockToken = "mock-jwt-token-12345";
//       await AsyncStorage.setItem("jwtToken", mockToken);

//       // After successful registration, redirect to PopupScreen to fill additional details
//       Alert.alert("Registration Successful", "You are now registered. Redirecting to fill additional details.", [
//         {
//           text: "OK",
//           onPress: () => {
//             router.push("/screens/popup"); // Redirect to PopupScreen for additional details
//           },
//         },
//       ]);

//       // ----- DATABASE CODE FOR REGISTRATION (To be implemented in future) -----
//       // 1. Call your backend API to register the user and store the data in the database
//       // Example:
//       // const response = await fetch('your-api-url/register', {
//       //   method: 'POST',
//       //   body: JSON.stringify({ mobile: mobileNumber, password: password }),
//       //   headers: { 'Content-Type': 'application/json' }
//       // });
//       // const data = await response.json();
//       // if (data.success) {
//       //   const token = data.token;
//       //   await AsyncStorage.setItem("jwtToken", token);
//       //   router.push("/(root)/(tabs)/PopupScreen"); // Redirect after successful registration
//       // }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerText}>HVO</Text>
//         <Text style={styles.headerText2}>CONNECT</Text>
//       </View>

//       {/* Toggle for Login/Register */}
//       <View style={styles.toggleButtonContainer}>
//         <TouchableOpacity
//           style={[styles.toggleButton, activeTab === "Login" && styles.activeTab]}
//           onPress={() => handleTabChange("Login")}
//         >
//           <Text style={[styles.toggleButtonText, activeTab === "Login" && styles.activeTabText]}>
//             Login
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.toggleButton, activeTab === "Register" && styles.activeTab]}
//           onPress={() => handleTabChange("Register")}
//         >
//           <Text style={[styles.toggleButtonText, activeTab === "Register" && styles.activeTabText]}>
//             Register
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Action Text */}
//       <Text style={styles.actionTextLeft}>{activeTab}</Text>

//       {/* Mobile Number Input */}
//       <Text style={styles.label}>Mobile No</Text>
//       <View style={styles.inputContainer}>
//         <FontAwesome name="mobile" size={24} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Mobile Number"
//           keyboardType="numeric"
//           maxLength={10}
//           value={mobileNumber}
//           onChangeText={(text) => setMobileNumber(text)}
//         />
//       </View>
//       {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}

//       {/* Password Input */}
//       <Text style={styles.label}>Password</Text>
//       <View style={styles.inputContainer}>
//         <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry={!isPasswordVisible}
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//         />
//         <TouchableOpacity
//           onPress={() => setPasswordVisible(!isPasswordVisible)}
//           style={styles.eyeIcon}
//         >
//           <MaterialIcons
//             name={isPasswordVisible ? "visibility" : "visibility-off"}
//             size={24}
//             color="#888"
//           />
//         </TouchableOpacity>
//       </View>
//       {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

//       {/* Register Specific Inputs */}
//       {activeTab === "Register" && (
//         <>
//           <Text style={styles.label}>Confirm Password</Text>
//           <View style={styles.inputContainer}>
//             <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Confirm Password"
//               secureTextEntry={!isConfirmPasswordVisible}
//               value={confirmPassword}
//               onChangeText={(text) => setConfirmPassword(text)}
//             />
//             <TouchableOpacity
//               onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
//               style={styles.eyeIcon}
//             >
//               <MaterialIcons
//                 name={isConfirmPasswordVisible ? "visibility" : "visibility-off"}
//                 size={24}
//                 color="#888"
//               />
//             </TouchableOpacity>
//           </View>
//           {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
//         </>
//       )}

//       {/* Register/Login Button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={activeTab === "Register" ? handleRegister : handleLogin}
//       >
//         <Text style={styles.buttonText}>{activeTab === "Register" ? "Register" : "Login"}</Text>
//       </TouchableOpacity>

//       {/* Redirect to Switch Tabs */}
//       <View style={styles.redirectContainer}>
//         <Text>
//           {activeTab === "Login" ? "Don’t have an account? " : "Already have an account? "}
//         </Text>
//         <TouchableOpacity onPress={() => handleTabChange(activeTab === "Login" ? "Register" : "Login")}>
//           <Text style={styles.redirectText}>
//             {activeTab === "Login" ? "Create an account" : "Login"}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: "#FFF",
//   },
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 90,
//   },
//   headerText: {
//     fontSize: 40,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   headerText2: {
//     fontSize: 30,
//     fontWeight: "normal",
//     color: "#888",
//     marginLeft: 5,
//   },
//   toggleButtonContainer: {
//     flexDirection: "row",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#000",
//     marginBottom: 20,
//     marginTop: 40,
//     width: 200,
//     marginLeft: 90,
//     backgroundColor: '#E0E0E0',
//   },
//   toggleButton: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//   },
//   activeTab: {
//     backgroundColor: "#000",
//   },
//   toggleButtonText: {
//     color: "#000",
//     fontWeight: "bold",
//   },
//   activeTabText: {
//     color: "#FFF",
//   },
//   label: {
//     fontSize: 15,
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: 5,
//     textAlign: "left",
//     marginTop: 5,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     borderWidth: 1,
//     borderColor: "#B0B0B0",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     marginBottom: 10,
//     backgroundColor: "#F2F2F2",
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//     color: "#000",
//   },
//   icon: {
//     marginRight: 10,
//   },
//   eyeIcon: {
//     position: "absolute",
//     right: 15,
//   },
//   errorText: {
//     color: "red",
//     fontSize: 12,
//     marginBottom: 5,
//   },
//   button: {
//     backgroundColor: "#000",
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   redirectContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   redirectText: {
//     color: "#007BFF",
//     fontWeight: "bold",
//   },
//   actionTextLeft: {
//     fontSize: 25,
//     fontWeight: "bold",
//     textAlign: "left",
//     marginBottom: 10,
//   },
// });

// export default Auth;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useTabContext } from "../../context/TabContext"; // Using TabContext for state

const Auth = () => {
  const { activeTab, setActiveTab } = useTabContext(); // Destructure TabContext methods
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const [storedCredentials, setStoredCredentials] = useState(null);

  useEffect(() => {
    const loadCredentials = async () => {
      const credentials = await AsyncStorage.getItem("userCredentials");
      if (credentials) {
        setStoredCredentials(JSON.parse(credentials));
      }
    };
    loadCredentials();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Update active tab using TabContext
    setErrors({ mobile: "", password: "", confirmPassword: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { mobile: "", password: "", confirmPassword: "" };

    if (!/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
      isValid = false;
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      isValid = false;
    }

    if (activeTab === "Register" && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      if (
        storedCredentials &&
        storedCredentials.mobile === mobileNumber &&
        storedCredentials.password === password
      ) {
        const mockToken = "mock-jwt-token-12345";
        await AsyncStorage.setItem("jwtToken", mockToken);
        router.push("/tabs/Home");
      } else {
        Alert.alert("Invalid Credentials", "Please check your mobile number and password.");
      }
    }
  };

  const handleRegister = async () => {
    if (validateForm()) {
      const userCredentials = { mobile: mobileNumber, password: password };
      await AsyncStorage.setItem("userCredentials", JSON.stringify(userCredentials));
      const mockToken = "mock-jwt-token-12345";
      await AsyncStorage.setItem("jwtToken", mockToken);

      Alert.alert("Registration Successful", "You are now registered.", [
        {
          text: "OK",
          onPress: () => router.push("/screens/popup"),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>HVO</Text>
        <Text style={styles.headerText2}>CONNECT</Text>
      </View>

      {/* Toggle Login/Register */}
      <View style={styles.toggleButtonContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, activeTab === "Login" && styles.activeTab]}
          onPress={() => handleTabChange("Login")}
        >
          <Text style={[styles.toggleButtonText, activeTab === "Login" && styles.activeTabText]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, activeTab === "Register" && styles.activeTab]}
          onPress={() => handleTabChange("Register")}
        >
          <Text
            style={[styles.toggleButtonText, activeTab === "Register" && styles.activeTabText]}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <Text style={styles.label}>Mobile No</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="mobile" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="numeric"
          maxLength={10}
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>
      {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIcon}
        >
          <MaterialIcons
            name={isPasswordVisible ? "visibility" : "visibility-off"}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
      </View>
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      {activeTab === "Register" && (
        <>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={!isConfirmPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
              style={styles.eyeIcon}
            >
              <MaterialIcons
                name={isConfirmPasswordVisible ? "visibility" : "visibility-off"}
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>
          {errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}
        </>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={activeTab === "Register" ? handleRegister : handleLogin}
      >
        <Text style={styles.buttonText}>{activeTab}</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Auth;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  headerText2: {
    fontSize: 30,
    fontWeight: "normal",
    color: "#888",
    marginLeft: 5,
  },
  toggleButtonContainer: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 20,
    marginTop: 40,
    width: 200,
    marginLeft: 90,
    backgroundColor: '#E0E0E0',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: "#000",
  },
  toggleButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  activeTabText: {
    color: "#FFF",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    textAlign: "left",
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#B0B0B0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F2F2F2",
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  icon: {
    marginRight: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  redirectContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  redirectText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  actionTextLeft: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
});

