import React, { useState } from 'react';
import styled from 'styled-components/native';

const AddItemArea = styled.View`
  padding: 10px;
`;

const AddItemInput = styled.TextInput`
  background-color: #eee;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
`;

export default ({ onAdd }) => {
  const [item , setItem] = useState('');

  function handleSubmit() {
    if (item.trim() == '') {
      alert("O campo está vazio!");
      return false;
    }
    
    onAdd(item.trim());
    setItem('');
  }

  return (
    <AddItemArea>
        <AddItemInput 
          placeholder="Digite um nome Item"
          value={item}
          onChangeText={(e) => setItem(e)}
          onSubmitEditing={handleSubmit}
          returnKeyType="send"
        />
    </AddItemArea>
  );
}