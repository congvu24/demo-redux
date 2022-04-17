/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [message, setMessage] = useState('');

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.wrap}>
            <Text>Your text will be here: {message} </Text>
            <Form defaultValue={message} onSubmit={setMessage} />
          </View>
          <OptionList message={message} onSetMessage={setMessage} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function Form({
  defaultValue,
  onSubmit,
}: {
  defaultValue: string;
  onSubmit: (value: string) => void;
}) {
  const [value, setValue] = useState('');
  const handleSubmit = () => onSubmit(value);

  return (
    <>
      <Input defaultValue={defaultValue} onChange={setValue} />
      <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Show me</Text>
      </TouchableOpacity>
    </>
  );
}

function Input({
  defaultValue,
  onChange,
}: {
  defaultValue: string;
  onChange: (value: string) => void;
}) {
  return (
    <TextInput
      placeholder="Enter message"
      style={styles.input}
      defaultValue={defaultValue}
      onChangeText={value => onChange(value)}
    />
  );
}

function OptionList({
  message,
  onSetMessage,
}: {
  message: string;
  onSetMessage: (value: string) => void;
}) {
  const list = ['Haha', 'Hihi', 'Hello', 'Welcome'];

  return (
    <View style={styles.wrapBtn}>
      {list.map(item => (
        <TouchableOpacity
          style={message == item ? styles.setBtn : styles.setBtnActive}
          key={item}
          onPress={() => onSetMessage(item)}>
          <Text style={styles.btnText}>Set: {item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  wrap: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    marginVertical: 10,
    borderWidth: 0.5,
    width: '100%',
  },
  setBtn: {
    borderRadius: 5,
    padding: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'green',
    marginVertical: 10,
  },
  setBtnActive: {
    borderRadius: 5,
    padding: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'orange',
    marginVertical: 10,
  },
  saveBtn: {
    borderRadius: 5,
    padding: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
    marginVertical: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
