import * as React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, TextInput, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../components/CakeCard';
import  Button   from 'react-native-elements/dist/buttons/Button';


const sabores = [

  {
      name: 'Bolo de Limão',
      desc: 'Pão de ló branco, chantilly, creme belga, creme de limão e supiro.',
      money: '15,90',
      time: '10-15 min',
      like: '98%',
      image: require('../assets/saborlimao.png'),
      id: 1

  },
  {
      name: 'Bolo Mousse',
      desc: 'Pão de ló escuro, creme de mousse, raspas de chocolate amargo.',
      money: '19,90',
      time: '20-25 min',
      like: '99%',
      image: require('../assets/bolo6.jpeg'),
      id: 2

  },
  {
      name: 'Bolo de Prestigio',
      desc: 'Pão de ló escuro, creme belga, coco, leite condensado, brigadeiro e coco em flocos.',
      money: '19,90',
      time: '15-20 min',
      like: '95%',
      image: require('../assets/bolopre.jpeg'),
      id: 3

  },
  {
      name: 'Bolo de Morango',
      desc: 'Pão de ló branco, creme belga e morangos com cobertura de creme bombonata e flocos de coco.',
      money: '19,90',
      time: '10-15 min',
      like: '97%',
      image: require('../assets/bolomorango.jpeg'),
      id: 4

  },
  {
      name: 'Bolo de Leite',
      desc: 'Pão de ló branco creme milka, raspas de chocolate branco polvilhado com leite em pó.',
      money: '19,90',
      time: '15-20 min',
      like: '100%',
      image: require('../assets/bololeite.jpeg'),
      id: 5,

  },

];


function Feed() {
  return (
      <View>
               <FlatList
                data={sabores}
                renderItem={({ item }) => {
                    return <Card info={item} />;
                }}
                keyExtractor={(sabores) => sabores.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>

    );
};

const estilos = StyleSheet.create({
    input: {
    backgroundColor: "#f5c9c9",
    borderColor: "#000",
    borderWidth: 2,
    flex: 4
  },
  
  texto: {
    flex: 1
  },

  viewTextoInput: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20
  },

  itemLista: {
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 30 
    
  },

  tituloItem: {
    fontWeight: "bold"
  },

  nomeTop: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center'
    
  },

  espaçoTop: {
  marginTop: 30,
  },

  listaConteudoItem: {
  flex: 1
  },

  listaTitulo: { 
    fontWeight: 'bold'
  },

  listaItem: { 
    borderBottomColor: '#33F',
    borderBottomWidth: 2,
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  listaConteudoItem: { 
    flex: 1,
  },
 
  
}

);

function Formulario1() {
  return (
    <View >
    <View style={estilos.espaçoTop}></View>
      <Text style={estilos.nomeTop}> Dados Para a Entrega</Text>
    <View style={estilos.nomeTop}></View>
    <View style={estilos.viewTextoInput}>  
      <Text style={estilos.texto}>Nome</Text>
      <TextInput style={estilos.input}/>
    </View>
    <View style={estilos.viewTextoInput}>    
      <Text style={estilos.texto}>Telefone</Text>
      <TextInput style={estilos.input}/>
    </View>
    <View style={estilos.viewTextoInput}>  
      <Text style={estilos.texto}>Rua</Text>
      <TextInput style={estilos.input}/>
    </View>
    <View style={estilos.viewTextoInput}>  
      <Text style={estilos.texto}>CEP</Text>
      <TextInput style={estilos.input}/>
    </View>
    <View style={estilos.viewTextoInput}>  
      <Text style={estilos.texto}>Referencia</Text>
      <TextInput style={estilos.input}/>
    </View>
    <View style={estilos.viewTextoInput}> 
    <Button 
    title="Gravar" 
    onPress={()=>Alert.alert('MSG','Dados Salvos')}
    />
    </View>
  </View>
  );
}

 
function Lista1() {
  return (
  <View>
  <View style={estilos.espaçoTop}></View>
      <Text style={estilos.nomeTop}>Confirme Dados Inseridos</Text>
  <View style={estilos.itemLista}>
    <Text style={estilos.tituloItem}>Wesley Oliveira</Text>
    <Text>11 987654321</Text>
    <Text>Rua Pera 20 - 06795006 - Prox. a padria pera  </Text>
  </View>
</View>
);
} 

function Formulario2() {
      return (
        <View >
        <View style={estilos.espaçoTop}></View>
          <Text style={estilos.nomeTop}> Dados Para a Entrega</Text>
        <View style={estilos.nomeTop}></View>
        <View style={estilos.viewTextoInput}>  
          <Text style={estilos.texto}>Nome</Text>
          <TextInput style={estilos.input}/>
        </View>
        <View style={estilos.viewTextoInput}>    
          <Text style={estilos.texto}>Telefone</Text>
          <TextInput style={estilos.input}/>
        </View>
        <View style={estilos.viewTextoInput}>  
          <Text style={estilos.texto}>Rua</Text>
          <TextInput style={estilos.input}/>
        </View>
        <View style={estilos.viewTextoInput}>  
          <Text style={estilos.texto}>CEP</Text>
          <TextInput style={estilos.input}/>
        </View>
        <View style={estilos.viewTextoInput}>  
          <Text style={estilos.texto}>Referencia</Text>
          <TextInput style={estilos.input}/>
        </View>
        <View style={estilos.viewTextoInput}> 
        <Button title="Gravar"></Button>
        </View>
      </View>

  );
}

function Lista2() {
      return (
        <View>
        <View style={estilos.espaçoTop}></View>
            <Text style={estilos.nomeTop}>Confirme Dados Inseridos</Text>
        <View style={estilos.itemLista}>
          <Text style={estilos.tituloItem}>Eliane</Text>
          <Text>11 912345678</Text>
          <Text>Rua Uva 25 - 06795006 - Prox. a padaria uva </Text>
        </View>
       </View>
      );
   } 

function Formulario3() {
  return (
    <View >
    <View style={estilos.espaçoTop}></View>
      <Text style={estilos.nomeTop}> Dados Para a Entrega</Text>
    <View style={estilos.nomeTop}></View>
    <View style={estilos.viewTextoInput}>  
      <Text style={estilos.texto}>Nome</Text>
      <TextInput style={estilos.input}/>
    </View>
    <View style={estilos.viewTextoInput}>    
      <Text style={estilos.texto}>Telefone</Text>
      <TextInput style={estilos.input}/>
    </View>
    <View style={estilos.viewTextoInput}>  
      <Text style={estilos.texto}>Rua</Text>
      <TextInput style={estilos.input}/>
    </View>
    <View style={estilos.viewTextoInput}>  
      <Text style={estilos.texto}>CEP</Text>
      <TextInput style={estilos.input}/>
    </View>
    <View style={estilos.viewTextoInput}>  
      <Text style={estilos.texto}>Referencia</Text>
      <TextInput style={estilos.input}/>
    </View>
    <View style={estilos.viewTextoInput}> 
    <Button title="Gravar"></Button>
    </View>
  </View>
  );
}

function Lista3() {
  return (
    <View>
    <View style={estilos.espaçoTop}></View>
        <Text style={estilos.nomeTop}>Confirme Dados Inseridos</Text>
    <View style={estilos.itemLista}>
      <Text style={estilos.tituloItem}>Guilherme</Text>
      <Text>11 999999999</Text>
      <Text>Rua Maça 30 - 06795006 - Prox. ao mercado maça </Text>
    </View>
   
  </View>
  );
}

const Tab = createBottomTabNavigator();

export default function CandyCake() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Formulario1"
        component={Formulario1}
        options={{
          tabBarLabel: 'Wesley',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen
          name="Lista1"
          component={Lista1}
          options={{
            tabBarLabel: 'Lista',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen
        name="Formulario2"
        component={Formulario2}
        options={{
          tabBarLabel: 'Eliane',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lista2"
        component={Lista2}
        options={{
            tabBarLabel: 'Lista',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen
        name="Formulario3"
        component={Formulario3}
        options={{
          tabBarLabel: 'Guilherme',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lista3"
        component={Lista3}
        options={{
          tabBarLabel: 'Lista',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
            ),
          }}
      />
    </Tab.Navigator>
  );

}