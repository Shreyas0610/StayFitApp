import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button } from 'react-native';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [result, setResult] = useState(0);

  const calculate = () => {
    let BMR;
    if (gender === 'male') {
      BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    const calorieNeeds = BMR * activityLevel;
    setResult(calorieNeeds);
  };

  return (
    <View>
      <Text>Weight (kg)</Text>
      <TextInput
        value={weight}
        onChangeText={text => setWeight(text)}
        keyboardType='numeric'
      />

      <Text>Height (cm)</Text>
      <TextInput
        value={height}
        onChangeText={text => setHeight(text)}
        keyboardType='numeric'
      />

      <Text>Age</Text>
      <TextInput
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='numeric'
      />

      <Text>Gender</Text>
      <View>
        <Text onPress={() => setGender('male')}>Male</Text>
        <Text onPress={() => setGender('female')}>Female</Text>
      </View>

      <Text>Activity Level</Text>
      <View>
        <Text onPress={() => setActivityLevel(1.2)}>Sedentary</Text>
        <Text onPress={() => setActivityLevel(1.375)}>Lightly Active</Text>
        <Text onPress={() => setActivityLevel(1.55)}>Moderately Active</Text>
        <Text onPress={() => setActivityLevel(1.725)}>Very Active</Text>
        <Text onPress={() => setActivityLevel(1.9)}>Extra Active</Text>
      </View>

      <Button title='Calculate' onPress={calculate} />

      <Text>Calorie Needs: {result}</Text>
    </View>
  );
};

export default CalorieCalculator;

