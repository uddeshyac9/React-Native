import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const MyRadioButton = () => {
    const skills = [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'React.js' },
        { id: 3, name: 'Node.js' },
        { id: 4, name: 'HTML5' },
        { id: 5, name: 'CSS3' },
        { id: 6, name: 'Git & Version Control' },
      ];
      
  const [checked, setChecked] = useState('first');
  const [selectedRadio, setSelectedRadio] =  useState(1)

  return (
    <View>
      {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <Text>First Option</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
        <Text>Second Option</Text>
      </View> */}
         <View style={{ marginTop: 40, flex: 1, alignItems: 'center' }}>
      <Text>Dynamic Radio Button</Text>
      {skills.map((skill) => (
        <View key={skill.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value={skill.name}
            status={selectedRadio === skill.id ? 'checked' : 'unchecked'}
            onPress={() => setSelectedRadio(skill.id)}
          />
          
        </View>
      ))}
    </View>

    </View>
  );
};

export default MyRadioButton;

