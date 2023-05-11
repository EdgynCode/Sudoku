import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const Settings = ({ navigation }) => {
  const [difficulty, setDifficulty] = useState('easy');
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [hintEnabled, setHintEnabled] = useState(true);

  const handleDifficultyChange = (value) => {
    setDifficulty(value);
  };

  const handleTimerToggle = () => {
    setTimerEnabled(!timerEnabled);
  };

  const handleHintToggle = () => {
    setHintEnabled(!hintEnabled);
  };

  const handleSave = () => {
    // save the settings
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Difficulty</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Easy</Text>
          <Switch
            value={difficulty === 'easy'}
            onValueChange={() => handleDifficultyChange('easy')}
          />
          <Text style={styles.switchLabel}>Medium</Text>
          <Switch
            value={difficulty === 'medium'}
            onValueChange={() => handleDifficultyChange('medium')}
          />
          <Text style={styles.switchLabel}>Hard</Text>
          <Switch
            value={difficulty === 'hard'}
            onValueChange={() => handleDifficultyChange('hard')}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Timer</Text>
        <Switch
          value={timerEnabled}
          onValueChange={handleTimerToggle}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hint</Text>
        <Switch
          value={hintEnabled}
          onValueChange={handleHintToggle}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#4287f5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Settings;
