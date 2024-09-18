import { StyleSheet, Text, View } from "react-native";
import Login from "../components/Login";
import { auth } from "../configs/FirebaseConfig";
import { Redirect } from "expo-router";

export default function Index() {
  const redirectLink: any = "/mytrip";

  const user = auth.currentUser; // it tells if the user is logged in or not

  return (
    <View style={styles.container}>
      {user ? <Redirect href={redirectLink} /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
