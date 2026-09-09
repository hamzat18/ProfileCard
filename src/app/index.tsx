import { Image } from "expo-image";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.topSection}>
          <Image
            style={styles.profileImage}
            source={require("@/assets/images/profile-pic.jpg")}
          />
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.name}>Hamza Tai</Text>
          <Text style={styles.bio}>Aspiring Software Engineer</Text>

          <View style={styles.divider} />

          <View style={styles.facts}>
            <Text style={styles.fact}>
              • I'm a Computer Science student at IU
            </Text>
            <Text style={styles.fact}>
              • I'm currently learning Linux and WireShark
            </Text>
            <Text style={styles.fact}>• I love to play Cricket</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6C63FF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 320,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#2b2545",
  },
  topSection: {
    backgroundColor: "#f2f0fb",
    paddingVertical: 45,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  bottomSection: {
    padding: 20,
    alignItems: "center",
  },
  name: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: "#c9c4e0",
    textAlign: "center",
  },
  divider: {
    width: "100%",
    height: 3,
    backgroundColor: "#453d6b",
    marginVertical: 16,
  },
  facts: {
    width: "100%",
    gap: 8,
    alignItems: "center",
  },
  fact: {
    fontSize: 14,
    color: "#c9c4e0",
    textAlign: "center",
  },
});
