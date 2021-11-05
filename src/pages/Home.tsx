import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Ong, OngsList } from '../components/OngsList';
import { OngInput } from '../components/OngInput';

export function Home() {
  const [ongs, setOngs] = useState<Ong[]>([]);

  function handleAddOng(newOngTitle: string) {
    if (!newOngTitle) return;

    const newOng = {
      id: new Date().getTime(),
      title: newOngTitle,
      done: false,
    }

    setOngs(oldOngs => [...oldOngs, newOng]);
  }

  function handleRemoveOng(id: number) {
    setOngs(ongs => {
      return ongs.filter(ong => ong.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Header ongsCounter={ongs.length} />

      <OngInput addOng={handleAddOng} />

      <OngsList
        ongs={ongs}
        removeOng={handleRemoveOng}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})