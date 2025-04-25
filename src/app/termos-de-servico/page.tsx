//Components
import Content from '../Components/Content';
import { H1, H2, H3 } from '../Components/Content/Components/Titles';
import Header from '../Components/Content/Components/Header';
import Paragrafo from '../Components/Content/Components/Paragrafo';
import Section from '../Components/Content/Components/Section';
import { Li, Ol } from '../Components/Content/Components/Listas';
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
  title: "Termos de Serviço",
  description: "Confira os termos legais para uso do site InstaSave Hub",
  keywords: ["Termos de Serviço","Termo de Serviço","Termo de Serviço InstaSaverHub"]
}

export const metadata: Metadata = GenerateMetadata(metas);


const page = () => {
  return (
    <Content>
      <Header>
        <div className="mx-auto px-3">
          <H1 text="Termos de Serviço" />
          <Paragrafo text="Confira os termos legais para uso do site InstaSave Hub" />
        </div>
      </Header>

      <Section>
        <H2 text="1. Termos" />
        <Paragrafo>
          Ao acessar o site <Links text="INSTASAVER HUB" url="https://www.instasavehub.com.br/" />, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis, e declara ser responsável pelo cumprimento das leis locais. Se você não concordar com esses termos, está proibido de usar ou acessar este site. Os materiais contidos no site são protegidos pelas leis de direitos autorais e marcas registradas.
        </Paragrafo>
      </Section>

      <Section>
        <H2 text="2. Uso de Licença" />
        <Paragrafo>
          É concedida permissão para baixar temporariamente uma cópia dos materiais no site INSTASAVER HUB apenas para visualização pessoal e não comercial. Esta é uma licença, não uma transferência de título. Sob esta licença, você não pode:
        </Paragrafo>
        <Ol>
          <Li>Modificar ou copiar os materiais;</Li>
          <Li>Usar os materiais para fins comerciais ou exibição pública;</Li>
          <Li>Tentar descompilar ou fazer engenharia reversa de qualquer software do site;</Li>
          <Li>Remover direitos autorais ou outras notificações dos materiais;</Li>
          <Li>Transferir os materiais para outra pessoa ou espelhar em outro servidor.</Li>
        </Ol>
        <Paragrafo>
          Esta licença será automaticamente rescindida se você violar qualquer uma dessas restrições e poderá ser encerrada pelo INSTASAVER HUB a qualquer momento. Ao encerrar a visualização ou ao fim desta licença, você deve apagar todos os materiais baixados, sejam eletrônicos ou impressos.
        </Paragrafo>
      </Section>

      <Section>
        <H2 text="3. Isenção de Responsabilidade" />
        <Ol>
          <Li>Os materiais no site do INSTASAVER HUB são fornecidos <strong>como estão</strong>. O site não oferece garantias, expressas ou implícitas, incluindo garantias de comercialização, adequação a um fim específico ou não violação de direitos.</Li>
          <Li>Além disso, o INSTASAVER HUB não garante a precisão, resultados prováveis ou confiabilidade do uso dos materiais, nem se responsabiliza por sites vinculados.</Li>
        </Ol>
      </Section>

      <Section>
        <H2 text="4. Limitações" />
        <Paragrafo>
          Em nenhuma hipótese o INSTASAVER HUB ou seus fornecedores serão responsáveis por danos (incluindo perda de dados ou lucros) decorrentes do uso ou incapacidade de uso dos materiais, mesmo que avisados da possibilidade. Algumas jurisdições não permitem tais limitações, por isso podem não se aplicar a você.
        </Paragrafo>
      </Section>

      <Section>
        <H2 text="5. Precisão dos Materiais" />
        <Paragrafo>
          Os materiais do site podem conter erros técnicos, tipográficos ou fotográficos. O INSTASAVER HUB não garante que sejam precisos, completos ou atualizados. O conteúdo pode ser alterado a qualquer momento sem aviso, mas não há compromisso de atualização.
        </Paragrafo>
      </Section>

      <Section>
        <H2 text="6. Links" />
        <Paragrafo>
          O INSTASAVER HUB não revisa todos os sites vinculados e não é responsável pelo conteúdo de terceiros. A presença de links não implica endosso. O uso de links externos é por sua conta e risco.
        </Paragrafo>
      </Section>

      <Section>
        <H3 text="Modificações" />
        <Paragrafo>
          O INSTASAVER HUB pode revisar estes termos a qualquer momento, sem aviso prévio. Ao usar o site, você concorda com a versão vigente dos termos.
        </Paragrafo>
      </Section>

      <Section>
        <H3 text="Lei Aplicável" />
        <Paragrafo>
          Estes termos são regidos pelas leis do INSTASAVER HUB, e você se submete à jurisdição exclusiva dos tribunais competentes na localidade da empresa.
        </Paragrafo>
      </Section>
    </Content>
  );
};

export default page;
