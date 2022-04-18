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
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {asyncSetMessage, setMessage} from './app.slice';
import {persistor, RootState, store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const message = useSelector<RootState>(state => state.app.message) as string;

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
            <Form />
          </View>
          <OptionList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const handleSubmit = () => dispatch(setMessage(value));

  return (
    <>
      <Input onChange={setValue} />
      <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Show me</Text>
      </TouchableOpacity>
    </>
  );
}

function Input({onChange}: {onChange: (value: string) => void}) {
  const defaultValue = useSelector<RootState>(
    state => state.app.message,
  ) as string;

  return (
    <TextInput
      placeholder="Enter message"
      style={styles.input}
      defaultValue={defaultValue}
      onChangeText={value => onChange(value)}
    />
  );
}

function OptionList() {
  const list = ['Haha', 'Hihi', 'Hello', 'Welcome'];

  const dispatch = useDispatch();

  const message = useSelector<RootState>(state => state.app.message) as string;

  const handleOnsetMessage = (item: string) =>
    dispatch<any>(asyncSetMessage(item));

  return (
    <View style={styles.wrapBtn}>
      {list.map(item => (
        <TouchableOpacity
          style={message === item ? styles.setBtn : styles.setBtnActive}
          key={item}
          onPress={() => handleOnsetMessage(item)}>
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
