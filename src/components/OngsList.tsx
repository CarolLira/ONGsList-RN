import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { ItemWrapper } from './ItemWrapper';

export interface Ong {
  id: number;
  title: string;
  done: boolean;
}

interface OngListProps {
  ongs: Ong[];
  removeOng: (id: number) => void;
}

export function OngsList({ ongs, removeOng }: OngListProps) {
  return (
    <FlatList
      data={ongs}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <View>
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.container}
              >
                <Text
                  style={styles.ongText}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingHorizontal: 24 }}
              onPress={() => removeOng(item.id)}
            >
              <Feather name="trash" size={22} color="#B2B2B2" />
            </TouchableOpacity>
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  ongText: {
    color: '#666',
    fontSize: 15
  },
})