// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";

// export default function PopupScreen() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [fatherName, setFatherName] = useState("");
//   const [motherName, setMotherName] = useState("");
//   const router = useRouter();

//   const handleSaveDetails = async () => {
//     try {
//       const userDetails = {
//         name,
//         email,
//         fatherName,
//         motherName,
//       };

//       await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
//       alert("Details saved successfully!");
//       router.replace("/tabs/Home");
//     } catch (error) {
//       console.error("Error saving user details:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Details</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Your Full Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email Address"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Father's Name"
//         value={fatherName}
//         onChangeText={setFatherName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mother's Name"
//         value={motherName}
//         onChangeText={setMotherName}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSaveDetails}>
//         <Text style={styles.buttonText}>Save & Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
//   title: { fontSize: 20, marginBottom: 20 },
//   input: {
//     borderWidth: 1,
//     borderColor: "#aaa",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     width: "100%",
//   },
//   button: {
//     backgroundColor: "#000",
//     padding: 12,
//     borderRadius: 5,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   buttonText: { color: "#FFF", fontSize: 16 },
// });


// greta uppar wala but gpt ne diya upade ho rha a

// implement new popup stuff implementing

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const PopupScreen = () => {
  const [step1Data, setStep1Data] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
  });
  const [step2Data, setStep2Data] = useState({
    motherName: "",
    fatherName: "",
    siblings: "",
  });
  const [step3Data, setStep3Data] = useState({
    hobbies: "",
    skills: "",
    additionalInfo: "",
  });

  const router = useRouter();

  // Handle Submit - Store firstName into AsyncStorage and navigate to home
  const handleSubmit = async () => {
    if (!step1Data.firstName) {
      Alert.alert("Error", "Please enter your first name.");
      return;
    }

    try {
      // Save the first name only into AsyncStorage
      await AsyncStorage.setItem("firstName", step1Data.firstName);
      Alert.alert("Success", "Data saved successfully!", [
        {
          text: "OK",
          onPress: () => router.replace("/home"), // Redirect to home screen
        },
      ]);
    } catch (error) {
      console.error("Error saving data:", error);
      Alert.alert("Error", "Could not save data. Please try again!");
    }
  };

  return (
    <View style={styles.container}>
      <ProgressSteps onSubmit={handleSubmit}>
        {/* Step 1 - Personal Details */}
        <ProgressStep label="Personal Details">
          <View style={styles.stepContent}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={step1Data.firstName}
              onChangeText={(text) => setStep1Data({ ...step1Data, firstName: text })}
            />
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={step1Data.lastName}
              onChangeText={(text) => setStep1Data({ ...step1Data, lastName: text })}
            />
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Age"
              keyboardType="numeric"
              value={step1Data.age}
              onChangeText={(text) => setStep1Data({ ...step1Data, age: text })}
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={step1Data.address}
              onChangeText={(text) => setStep1Data({ ...step1Data, address: text })}
            />
          </View>
        </ProgressStep>

        {/* Step 2 - Family Details */}
        <ProgressStep label="Family Details">
          <View style={styles.stepContent}>
            <Text style={styles.label}>Mother's Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Mother's Name"
              value={step2Data.motherName}
              onChangeText={(text) => setStep2Data({ ...step2Data, motherName: text })}
            />
            <Text style={styles.label}>Father's Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Father's Name"
              value={step2Data.fatherName}
              onChangeText={(text) => setStep2Data({ ...step2Data, fatherName: text })}
            />
            <Text style={styles.label}>Number of Siblings</Text>
            <TextInput
              style={styles.input}
              placeholder="Number of Siblings"
              keyboardType="numeric"
              value={step2Data.siblings}
              onChangeText={(text) => setStep2Data({ ...step2Data, siblings: text })}
            />
          </View>
        </ProgressStep>

        {/* Step 3 - Miscellaneous Details */}
        <ProgressStep label="Miscellaneous Details">
          <View style={styles.stepContent}>
            <Text style={styles.label}>Hobbies</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Hobbies"
              value={step3Data.hobbies}
              onChangeText={(text) => setStep3Data({ ...step3Data, hobbies: text })}
            />
            <Text style={styles.label}>Skills</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Skills"
              value={step3Data.skills}
              onChangeText={(text) => setStep3Data({ ...step3Data, skills: text })}
            />
            <Text style={styles.label}>Additional Info</Text>
            <TextInput
              style={styles.input}
              placeholder="Add any additional details"
              value={step3Data.additionalInfo}
              onChangeText={(text) => setStep3Data({ ...step3Data, additionalInfo: text })}
            />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  stepContent: { paddingVertical: 10 },
  label: { fontSize: 14, marginBottom: 5 },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default PopupScreen;
