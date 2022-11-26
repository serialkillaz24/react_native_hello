import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Linking,
  Platform,
  Alert
} from "react-native";

import Communications from "react-native-communications";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodayText: ""
    };
  }

 
  /*Function to send the mail function(to, cc, bcc, subject, body)*/
  openEmail = () => {
    Communications.email(
      ["sarutigupta@cdac.in"],
      null,
      null,
      "Enter Subject",
      "Enter body for the mail"
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{ textAlign: "center", fontSize: 20, paddingVertical: 30 }}
        >
          Send Email from React-native App
        </Text>
        <TextInput
          value={this.state.bodayText}
          onChangeText={bodayText => this.setState({ bodayText })}
          placeholder={"Enter Body"}
          style={styles.input}
        />
        <View style={{ marginTop: 20 }}>
          <Button onPress={this.openEmail} title="Send Email" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    backgroundColor: "#ffffff"
  },
  input: {
    width: 255,
    height: 44,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderRadius: 0.5,
    borderWidth: 0.5
  }
});