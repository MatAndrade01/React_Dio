import { useNavigate } from 'react-router-dom';

import bannerImagem from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header/index';
import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {

    const naviate = useNavigate();

    const handleClickSignIn = () => {
        naviate('/login')
    }

    return (<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br/>
                    </TitleHighlight> 
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={bannerImagem} alt='Imagem Principal'></img>
            </div>
        </Container>
    </>);
}

export { Home }