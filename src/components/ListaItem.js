import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
  flex-direction: row;
  height: 50px;
  background-color: #EEE;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid ${props => props.done ? '#FFF': '#FFF'};
  background-color: ${props => props.done ? '#42bff5': '#DDD'};
`;

export default (props) => {
    return (
        <Item onPress={props.onPress} underlayColor="#DDD" activeOpacity={0.7}>
        <>
            <ItemText>{props.data.task}</ItemText>
            <ItemCheck done={props.data.done}></ItemCheck>
        </>
        </Item> 
    );
}