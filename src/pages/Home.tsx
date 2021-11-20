import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Ong, OngsList } from '../components/OngsList';
import { OngInput } from '../components/OngInput';
import api from '../services/api';

export function Home() {
  const [ongs, setOngs] = useState<Ong[]>([]);
  const [newOng, setNewOng] = useState<Ong>({
    id: 0,
    nome: ''
  });

  useEffect(() => {
    api.get('/ong').then(response => {
      setOngs(response.data);
    })
  }, [])

  function handleAddOng(newOngTitle: string) {
    if (!newOngTitle) return;

    api.post('/ong', {
      nome: newOngTitle,
    }).then(response => {
      setNewOng(response.data);
    })

    setOngs(oldOngs => [...oldOngs, newOng]);
  }

  function handleRemoveOng(id: number) {
    api.delete(`/ong${id}`);

    api.get('/ong').then(response => {
      setOngs(response.data);
    })
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