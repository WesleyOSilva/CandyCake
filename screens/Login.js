import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';




export default function Login({navigation}) {

  
  const [email, setEmail] = useState(null)
  const [password, setpassword] = useState(null)

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "CandyCake"}]
    })
  }

  return(
      <View style={[styles.container, specificStyle.specificContainer]}>
        <Text h3>Acesse Candy Cake</Text>
        <Input
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={value => setEmail (value)}
          keyboardType='email-address'
          />
          <Input
          placeholder="Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => setpassword (value)}
          secureTextEntry={true}
          />
        <Button
          icon={
            <Icon
              name="check"
              size={15}
              color="white"
            />
          }
          title="Entrar"
          onPress={() => entrar()}
          />
      </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: '#fff'
  }
})