import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const SectionListExample = () => {
  const users = [
    {
      id: 1,
      name: 'Uddeshya',
      data: ['JavaScript', 'React', 'Node', 'ReactNative'],
    },
    {
      id: 2,
      name: 'John',
      data: ['Python', 'Django', 'Flask'],
    },
    {
      id: 3,
      name: 'Jane',
      data: ['Java', 'Spring', 'Hibernate'],
    },
    // Add more users as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>List with Section List</Text>
      <SectionList
        sections={users}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={styles.sectionHeader}>{name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  item: {
    fontSize: 20,
    marginLeft: 20,
    color:'black'
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
    color:'black',
    textAlign:'center'
  },
});

export default SectionListExample;
