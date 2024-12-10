// // app/secondPage.tsx
// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { RadioButton } from "react-native-paper";
// import { useRouter } from "expo-router";

// const SecondPage = () => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const router = useRouter();

//   // Handle submit
//   const handleSubmit = () => {
//     if (selectedOption === "Option1") {
//       router.push("/(auth)/Auth"); // Redirect to PageOne
//     } else if (selectedOption === "Option2") {
//       router.push("/(auth)/Auth"); // Redirect to PageTwo
//     } else {
//       alert("Please select an option.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Choose an Option</Text>

//       <View style={styles.radioGroup}>
//         <View style={styles.radioOption}>
//           <RadioButton
//             value="Option1"
//             status={selectedOption === "Option1" ? "checked" : "unchecked"}
//             onPress={() => setSelectedOption("Option1")}
//           />
//           <Text style={styles.radioLabel}>Already An Member
//           </Text>
//         </View>

//         <View style={styles.radioOption}>
//           <RadioButton
//             value="Option2"
//             status={selectedOption === "Option2" ? "checked" : "unchecked"}
//             onPress={() => setSelectedOption("Option2")}
//           />
//           <Text style={styles.radioLabel}>I Want To Regester</Text>
//         </View>
//       </View>

//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 30,
//     color: "#333",
//   },
//   radioGroup: {
//     marginBottom: 30,
//   },
//   radioOption: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   radioLabel: {
//     fontSize: 18,
//     marginLeft: 10,
//     color: "#333",
//   },
//   submitButton: {
//     backgroundColor: "#6200ea",
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     borderRadius: 30,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   submitButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default SecondPage;


// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";
// import { useTabContext } from "../../../context/TabContext";

// const SecondPage = () => {
//   const router = useRouter();
//   const { setActiveTab } = useTabContext();
//   const [selectedOption, setSelectedOption] = useState("existing");

//   const handleSelection = () => {
//     if (selectedOption === "existing") {
//       setActiveTab("Login");
//     } else {
//       setActiveTab("Register");
//     }
//     router.push("/Auth");
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Choose Your Role</Text>
//       <View style={styles.radioContainer}>
//         <TouchableOpacity
//           style={styles.radioButton}
//           onPress={() => setSelectedOption("existing")}
//         >
//           <Text style={styles.radioText}>
//             {selectedOption === "existing" ? "✓" : " "} Existing Member
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.radioButton}
//           onPress={() => setSelectedOption("new")}
//         >
//           <Text style={styles.radioText}>
//             {selectedOption === "new" ? "✓" : " "} New Member
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleSelection}>
//         <Text style={styles.buttonText}>Proceed</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   header: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
//   radioContainer: { flexDirection: "column", marginBottom: 30 },
//   radioButton: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
//   radioText: { fontSize: 16 },
//   button: { backgroundColor: "blue", padding: 10, borderRadius: 5 },
//   buttonText: { color: "white", fontWeight: "bold" },
// });

// export default SecondPage;


// final 


import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useTabContext } from "../../../context/TabContext";

const SecondPage = () => {
  const router = useRouter();
  const { setActiveTab } = useTabContext();
  const [selectedOption, setSelectedOption] = useState("existing");

  const handleSelection = () => {
    if (selectedOption === "existing") {
      setActiveTab("Login");
    } else {
      setActiveTab("Register");
    }
    router.push("/Auth");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Role</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedOption === "existing" && styles.radioButtonSelected,
          ]}
          onPress={() => setSelectedOption("existing")}
        >
          <Text
            style={[
              styles.radioText,
              selectedOption === "existing" && styles.radioTextSelected,
            ]}
          >
            Existing Member
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedOption === "new" && styles.radioButtonSelected,
          ]}
          onPress={() => setSelectedOption("new")}
        >
          <Text
            style={[
              styles.radioText,
              selectedOption === "new" && styles.radioTextSelected,
            ]}
          >
            New Member
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.proceedButton} onPress={handleSelection}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
    color: "#343a40",
    marginBottom: 30,
    textAlign: "center",
  },
  radioContainer: {
    width: "100%",
    marginBottom: 40,
  },
  radioButton: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ced4da",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  radioButtonSelected: {
    backgroundColor: "#007bff",
    borderColor: "#0056b3",
  },
  radioText: {
    fontSize: 16,
    color: "#495057",
  },
  radioTextSelected: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  proceedButton: {
    width: "100%",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#007bff",
    alignItems: "center",
  },
  proceedButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
});

export default SecondPage;
