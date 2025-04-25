import Content from '../Components/Content';
import { H1, H2, H3 } from '../Components/Content/Components/Titles';
import Header from '../Components/Content/Components/Header';
import Paragrafo from '../Components/Content/Components/Paragrafo';
import Section from '../Components/Content/Components/Section';
import { Li, Ul } from '../Components/Content/Components/Listas';
import Links from '../Components/Content/Components/Links';

//Metadata
import { Metadata } from 'next';
import GenerateMetadata from '../Metadata';



interface MetaType {
  title: string | null
  description: string | null
  keywords: string[] | null
}

const metas: MetaType = {
  title: "Política de Privacidade",
  description: "Saiba como protegemos suas informações no InstaSaver Hub",
  keywords: ["Politica de privacidade","Politicas de privacidade da InstaSaver Hub","Politicas da Instasaver Hub"]
}

export const metadata: Metadata = GenerateMetadata(metas);


export default function page() {
    return (
        <Content>
            <Header>
                <div className="mx-auto px-3">
                    <H1 text="Política de Privacidade" />
                    <Paragrafo text="Saiba como protegemos suas informações no InstaSave Hub" />
                </div>
            </Header>

            <Section>
                <H2 text="Política de Privacidade" />
                <Paragrafo>
                    A sua privacidade é importante para nós. É política do <strong>INSTASAVER HUB</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <Links text="INSTASAVER HUB" url="https://www.instasavehub.com.br/" />, e outros sites que possuímos e operamos.
                </Paragrafo>
                <Paragrafo>
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemos isso por meios justos e legais, com o seu conhecimento e consentimento.
                </Paragrafo>
                <Paragrafo>
                    Apenas retemos as informações pelo tempo necessário para fornecer o serviço. Protegemos os dados armazenados com práticas comerciais aceitáveis para evitar perdas, roubos ou acesso não autorizado.
                </Paragrafo>
                <Paragrafo>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </Paragrafo>
                <Paragrafo>
                    Nosso site pode conter links para sites externos que não são operados por nós. Não temos controle sobre o conteúdo e práticas desses sites e não nos responsabilizamos por suas respectivas <Links text="políticas de privacidade" url="https://politicaprivacidade.com/" target="_blank" />.
                </Paragrafo>
                <Paragrafo>
                    Você pode recusar nossa solicitação de dados pessoais, ciente de que talvez não possamos fornecer alguns serviços.
                </Paragrafo>
                <Paragrafo>
                    O uso continuado do nosso site será considerado como aceitação das nossas práticas de privacidade. Se tiver dúvidas, entre em contato conosco.
                </Paragrafo>

                <Ul>
                    <Li>Usamos o Google AdSense que utiliza o cookie DoubleClick para mostrar anúncios relevantes e limitar repetições.</Li>
                    <Li>Consulte as FAQs do Google AdSense para mais informações sobre privacidade.</Li>
                    <Li>Utilizamos anúncios para cobrir os custos operacionais e financiar melhorias futuras.</Li>
                    <Li>Cookies de afiliados ajudam a identificar se você chegou através de parceiros para fins de crédito e promoções.</Li>
                </Ul>
            </Section>

            <Section>
                <H3 text="Compromisso do Usuário" />
                <Paragrafo>
                    O usuário se compromete a fazer uso adequado dos conteúdos e das informações oferecidas pelo INSTASAVER HUB, incluindo:
                </Paragrafo>
                <Ul>
                    <Li><strong>A)</strong> Não se envolver em atividades ilegais ou contrárias à boa fé e à ordem pública.</Li>
                    <Li><strong>B)</strong> Não difundir conteúdo racista, xenofóbico, de jogos de azar, pornografia ilegal, apologia ao terrorismo ou violação dos direitos humanos.</Li>
                    <Li><strong>C)</strong> Não causar danos a sistemas físicos (hardware) e lógicos (software) do INSTASAVER HUB, seus fornecedores ou terceiros.</Li>
                </Ul>
            </Section>

            <Section>
                <H3 text="Mais Informações" />
                <Paragrafo>
                    Esperamos que essas informações estejam claras. Se você tiver dúvidas, é geralmente mais seguro manter os cookies ativados, especialmente se usa recursos do nosso site.
                </Paragrafo>
                <Paragrafo>
                    Esta política é efetiva a partir de <strong>25 de abril de 2025, às 19:53</strong>.
                </Paragrafo>
            </Section>
        </Content>
    );
}
