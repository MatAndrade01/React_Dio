import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button';
import { IHeader } from './types';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';
const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da Dio'></img>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/125470760?s=400&u=eae00e23aee12ffdb4b16cbd7163155a1d11b5a2&v=4'></UserPicture>
                ) : (
                    <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title='Entrar'></Button>
                        <Button title='Cadastrar'></Button>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }