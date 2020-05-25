import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import uuid from 'react-native-uuid';
import lista from './src/lista';

import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import ListaItemSwipe from './src/components/ListaItemSwipe';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Listagem = styled.FlatList`
  flex:1;
`;

export default () => {

  const [items, setItems] = useState(lista);

  function addNewItem(value) {
    let newItems = [...items, {id:uuid(), task:value, done: false}]; 

    setItems(newItems);
  }

  function toggleDone(index) {
    let newItems = [...items]; 
    
    newItems[index].done = !newItems[index].done;

    setItems(newItems);
  }

  function deleteItem(itemId) {
    let newItems = [...items]; 
    
    newItems = newItems.filter((item) => item.id != itemId);

    setItems(newItems);
  }

  return (
    <Page>
      <AddItemArea onAdd={addNewItem}/>
      <SwipeListView 
        data={items}
        renderItem={({ item, index }) => <ListaItem onPress={() => toggleDone(index)} data={item} />}
        renderHiddenItem={() => <ListaItemSwipe/>}
        keyExtractor={(item) => item.id}
        
        leftOpenValue={Dimensions.get('window').width}
        onRowDidOpen={deleteItem}
        disableLeftSwipe={true}

        restSpeedThreshold={100}
        restDisplacementThreshold={40}
      />
    </Page>
  );
  
}
