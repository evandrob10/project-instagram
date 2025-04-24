import Image from "next/image";
//COMPONENTS:
import Pagination from "../Components/Pagination";
import Content from '../Components/Content';
import { H1, H2, H3 } from '../Components/Content/Components/Titles';
import Header from '../Components/Content/Components/Header';
import Paragrafo from '../Components/Content/Components/Paragrafo';
import Section from '../Components/Content/Components/Section';
import { Li, Ol, Ul } from '../Components/Content/Components/Listas';
import Links from '../Components/Content/Components/Links';
import Quests from '../Components/Content/Components/Quests';

export default function page() {
  return (
    <>
      <Pagination />
      <Content>
        <Header>
          <div className="mx-auto px-3">
            <H1 text="Como Baixar Vídeos e Imagens de Carrosséis do Instagram com o InstaSave Hub" />
            <Paragrafo text="Guia Simples para Download de Conteúdo de Carrosséis do Instagram" />
          </div>
        </Header>
        <Section>
          <Paragrafo>
            O <strong>InstaSave Hub</strong> é uma ferramenta online gratuita que facilita o download de vídeos e imagens de carrosséis do Instagram de maneira rápida e prática. Seja para salvar conteúdo para visualização offline ou para uso em projetos criativos, o processo é extremamente simples. Neste guia, explicamos como baixar vídeos e imagens de carrosséis do Instagram em poucos passos.
          </Paragrafo>
        </Section>
        <Section>
          <H2 text="Como Baixar Vídeos e Imagens de Carrosséis do Instagram" />
          <Paragrafo text="O processo para baixar vídeos ou imagens de carrosséis com o InstaSave Hub é intuitivo. Siga o passo a passo abaixo:" />
          <H3 text="Passo 1: Copie o Link do Carrossel" />
          <Ol>
            <Li>Abra o Instagram no aplicativo ou no navegador.</Li>
            <Li>Encontre o carrossel que contém os vídeos ou imagens que deseja baixar.</Li>
            <Li>Clique nos três pontos no canto superior direito da postagem e selecione <strong>Copiar Link</strong>.</Li>
          </Ol>
          <H3 text="Passo 2: Cole o Link no InstaSave Hub" />
          <Ol>
            <Li>Acesse o site do InstaSave Hub.</Li>
            <Li>Cole o link copiado no campo de input disponível na página inicial.</Li>
            <Li>Clique no botão para processar o link.</Li>
          </Ol>
          <H3 text="Passo 3: Escolha o Conteúdo para Download" />
          <Ol>
            <Li>Você será redirecionado para uma página que lista todos os vídeos e imagens do carrossel.</Li>
            <Image
              height={1080}
              width={720}
              src={"/imagens/page-carrosseis/pagina-download.png"}
              alt='Pagina de download do modulo carrosseis.'
            />
            <Li>Selecione o vídeo ou imagem que deseja baixar clicando no botão <strong>Baixar</strong> correspondente.</Li>
          </Ol>
          <H3 text="Passo 4: Salve o Vídeo ou Imagem" />
          <Ol>
            <Li>Após clicar em <strong>Baixar</strong>, você será redirecionado para uma página com o vídeo ou imagem escolhido.</Li>
            <Li>Para vídeos, clique nos três pontinhos no canto do vídeo e selecione a opção <strong>Salvar</strong> ou <strong>Download</strong>.</Li>
            <Image
              height={400}
              width={300}
              src={"/imagens/page-video/pagina-download-tutorial.png"}
              alt='pagina de download, trés pontos.'
              className='mb-2'
            />
            <Li>Para imagens, clique com o botão direito e selecione <strong>Salvar Imagem Como</strong> ou use o botão de download fornecido.</Li>
            <Image
              height={400}
              width={300}
              src={"/imagens/page-carrosseis/pagina-imagem-download.png"}
              alt='pagina de download, trés pontos.'
              className='mb-2'
            />
          </Ol>
        </Section>
        <Section>
          <H2 text="Vantagens de Usar o InstaSave Hub" />
          <Paragrafo>
            O InstaSave Hub oferece uma experiência prática e eficiente para baixar conteúdo do Instagram. Confira os principais benefícios:
          </Paragrafo>
          <Ul>
            <Li><strong>Simplicidade</strong>: Interface intuitiva, ideal para usuários de todos os níveis.</Li>
            <Li><strong>Versatilidade</strong>: Suporta download de vídeos e imagens de carrosséis, além de outros formatos do Instagram.</Li>
            <Li><strong>Qualidade Original</strong>: Baixe vídeos e imagens na resolução original.</Li>
            <Li><strong>Sem Login</strong>: Não é necessário criar conta ou fornecer informações pessoais.</Li>
            <Li><strong>Gratuito</strong>: A ferramenta é totalmente gratuita e acessível.</Li>
          </Ul>
        </Section>
        <Section>
          <H2 text="Dicas para um Download Eficiente" />
          <Ol>
            <Li><strong>Verifique o Link</strong>: Certifique-se de que o link copiado é de um carrossel público.</Li>
            <Li><strong>Conexão Estável</strong>: Use uma boa conexão de internet para evitar interrupções.</Li>
            <Li><strong>Organize os Arquivos</strong>: Salve os arquivos baixados em pastas específicas para fácil acesso.</Li>
            <Li><strong>Use Navegadores Atualizados</strong>: Navegadores modernos garantem melhor compatibilidade com o site.</Li>
          </Ol>
        </Section>
        <Section>
          <H2 text="Por que Baixar Carrosséis do Instagram?" />
          <Paragrafo>
            Baixar vídeos e imagens de carrosséis pode ser útil para diversas finalidades, como:
          </Paragrafo>
          <Ul>
            <Li>Salvar memórias importantes de postagens temporárias.</Li>
            <Li>Assistir vídeos offline durante viagens ou em locais sem internet.</Li>
            <Li>Coletar inspiração para projetos criativos, como design ou edição de vídeos.</Li>
            <Li>Compartilhar conteúdo com pessoas que não têm acesso ao Instagram.</Li>
          </Ul>
        </Section>
        <Section>
          <H2 text="Segurança ao Usar o InstaSave Hub" />
          <Paragrafo>
            O InstaSave Hub é projetado para oferecer uma experiência segura:
          </Paragrafo>
          <Ul>
            <Li><strong>Sem Armazenamento</strong>: Os arquivos baixados não são salvos nos servidores da ferramenta.</Li>
            <Li><strong>Conexão Segura</strong>: O site usa HTTPS para proteger seus dados.</Li>
            <Li><strong>Privacidade</strong>: Não é necessário login ou compartilhamento de informações pessoais.</Li>
          </Ul>
        </Section>
        <Section>
          <Paragrafo>
            Com o <strong>InstaSave Hub</strong>, baixar vídeos e imagens de carrosséis do Instagram é um processo simples e rápido. Basta copiar o link, colar no site, escolher o conteúdo e salvar. Experimente hoje e aproveite seus conteúdos favoritos offline!
          </Paragrafo>
          <Links text='Veja como baixar um vídeo do Instagram.' url='/'/>
        </Section>
        <Section>
          <Quests />
        </Section>
      </Content>
    </>
  );
}
