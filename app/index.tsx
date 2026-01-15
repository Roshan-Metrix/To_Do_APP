import { StyleSheet,Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={style.container}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
