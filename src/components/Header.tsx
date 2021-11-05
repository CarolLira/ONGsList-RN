import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface HeaderProps {
  ongsCounter: number;
}

export function Header({ ongsCounter }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ONGs</Text>
      <View style={styles.ongs}>
        <Text style={styles.ongsCounter}>Total: {ongsCounter}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 16,
    paddingHorizontal: 24,
    paddingBottom: 40,
    backgroundColor: '#1abd9c',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
  },
  ongs: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  ongsCounter: {
    fontSize: 15,
    color: '#FFF',
  },
});