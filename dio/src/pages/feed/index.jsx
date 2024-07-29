import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header/index';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </Column>
            <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={35} nome={"Matheus Emanuel"} image="https://avatars.githubusercontent.com/u/125470760?s=400&u=eae00e23aee12ffdb4b16cbd7163155a1d11b5a2&v=4'"></UserInfo>
            <UserInfo percentual={27} nome={"Matheus Emanuel"} image="https://avatars.githubusercontent.com/u/125470760?s=400&u=eae00e23aee12ffdb4b16cbd7163155a1d11b5a2&v=4'"></UserInfo>
            <UserInfo percentual={80} nome={"Matheus Emanuel"} image="https://avatars.githubusercontent.com/u/125470760?s=400&u=eae00e23aee12ffdb4b16cbd7163155a1d11b5a2&v=4'"></UserInfo>
            <UserInfo percentual={57} nome={"Matheus Emanuel"} image="https://avatars.githubusercontent.com/u/125470760?s=400&u=eae00e23aee12ffdb4b16cbd7163155a1d11b5a2&v=4'"></UserInfo>
            <UserInfo percentual={12} nome={"Matheus Emanuel"} image="https://avatars.githubusercontent.com/u/125470760?s=400&u=eae00e23aee12ffdb4b16cbd7163155a1d11b5a2&v=4'"></UserInfo>

            </Column>
        </Container>
    </>);
}

export { Feed }