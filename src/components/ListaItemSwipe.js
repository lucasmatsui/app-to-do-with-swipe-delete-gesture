import React from 'react';
import styled from 'styled-components/native';

const ListaItemSwipe = styled.TouchableHighlight`
    width: 100%;
    height: 50px;
    background-color: #ff4444;
    justify-content: center;
    padding-left: 15px;
`;

const ListaItemIcon = styled.View`
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
`;

const IconBarRed = styled.View`
    width: 20px;
    height: 3px;
    background-color: #ff1111;
`;

const IconTopbar = styled.View`
    width: 20px;
    height: 5px;
    background-color: #fff;
    
`;


export default (props) => {
    return (
        <ListaItemSwipe underlayColor="#ff4444">
            <ListaItemIcon>
                <IconTopbar/>
                <IconBarRed/>
            </ListaItemIcon>
        </ListaItemSwipe>
    );
}