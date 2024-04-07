import { ReactNode } from "react";
import {
  BannerContent,
  BannerImage,
  BannerDetails
} from "./application/Banner";

import {
  HeaderContent
} from './application/Header'

import { FileText, Github, BadgeInfo, SquareArrowOutUpRight } from 'lucide-react'
import Image from "next/image";

interface BannerComplitProps {
  children: ReactNode,
  link: string,
  src: string
}

function BannerComplit({ children, link, src }: BannerComplitProps) {
  return (
    <BannerContent>
      <a href={link} target="_blank" rel="noopener noreferrer" >
        <BannerImage
          className="w-full rounded-md h-44 hover:shadow-md hover:shadow-cyan-500/45 transition-all"
          src={src}
        />
      </a>
      <BannerDetails>
        {children}
      </BannerDetails>
    </BannerContent>
  )
}

interface LinkIconsProps {
  link: string
}

function LinkIcons({ link }: LinkIconsProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <BadgeInfo />
        <p className="text-md font-bold">Informações</p>
      </div>
      <div className="flex gap-2 items-center">
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center hover:text-cyan-400 transition-all">
          <SquareArrowOutUpRight size={16} />
          <p className="text-md font-bold">Link para acesso</p>
        </a>
      </div>
    </div>
  )
}

function DocumentIcon() {
  return (
    <div className="flex gap-2 items-center">
      <FileText />
      <p className="text-md font-bold">Documentos / Procedimentos</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="invisible xl:visible">
      <HeaderContent>
        <a href="https://www.bc.sc.gov.br/servicos.cfm" target="_blank" rel="noopener noreferrer">
          <Image
          width={80}
          height={100}
          src="/Balneario.png" 
          alt="" 
          className="h-20" />
        </a>
        <div className="flex flex-col items-center  ">
          <p className="text-3xl text-cyan-700 font-extrabold">Serviços da Prefeitura</p>
          <p className="text-xl text-zinc-800 font-bold">Balneário Camboriú</p>
        </div>
        <a href="https://github.com/Andre-Oliveiraa?tab=repositories" target="_blank" rel="noopener noreferrer" className="bg-zinc-400 w-12 h-12 flex justify-center items-center rounded-full hover:bg-zinc-800 hover:text-zinc-300 transition-all">
          <Github />
        </a>
      </HeaderContent>
      <div className="flex justify-center items-center visible xl:invisible">
        <p className="font-bold text-3xl">Site Feito Somente para Dispositivos Desktop</p>
      </div>
      <div className=" grid grid-cols-3 grid-rows-3 p-10 gap-7">
        <BannerComplit
          link='https://aprovafacilbc.com.br/'
          src="/Aprova.png"
        >
          <LinkIcons link="https://aprovafacilbc.com.br/" />
          <p className="font-semibold">O Aprova Fácil é um sistema utilizado pela Prefeitura de Balneário Camboriú para facilitar e agilizar o processo de análise e aprovação de projetos de construção civil. Esse sistema é uma ferramenta digital que permite aos cidadãos e profissionais da área submeterem seus projetos de obras de forma online, eliminando a necessidade de deslocamento até os órgãos municipais responsáveis.</p>
          <DocumentIcon />
          <ul className="pl-5 list-disc font-semibold">
            <li>Formulários de requerimento específicos</li>
            <li>Projeto arquitetônico</li>
            <li>Projeto estrutural</li>
            <li>Projeto elétrico</li>
            <li>Projeto hidros sanitário</li>
            <li>ART ou RRT</li>
            <li>Memorial descritivo</li>
            <li>Comprovante de pagamento das taxas</li>
            <li>Documentação pessoal</li>
          </ul>
        </BannerComplit>
        <BannerComplit
          link="https://www.bc.sc.gov.br/atualizacao-de-cadastro.cfm"
          src="/Cadastro.png"
        >
          <LinkIcons link="https://www.bc.sc.gov.br/atualizacao-de-cadastro.cfm" />
          <p className="font-semibold">A Atualização de Cadastro da Prefeitura de Balneário Camboriú é um procedimento realizado para manter atualizadas as informações dos contribuintes e cidadãos que possuem cadastro junto aos órgãos municipais. Esse processo é importante para garantir a correta identificação e comunicação com os contribuintes, além de subsidiar a gestão municipal com dados atualizados sobre a população e os imóveis do município.</p>
          <DocumentIcon />
          <div className="grid grid-cols-2 gap-2">
            <ul className="pl-5 list-disc font-semibold">
              <p className="font-bold text-sm">Pessoa Física</p>
              <li>Documento de identificação oficial com foto</li>
              <li>CPF (Cadastro de Pessoa Física)</li>
              <li>Comprovante de residência atualizado</li>
              <p className="text-red-700 font-semibold">Em alguns casos pode-se pedir outros documentos</p>
            </ul>
            <ul className="pl-5 list-disc font-semibold">
              <p className="font-bold text-sm">Pessoa Jurídica</p>
              <li>Documentos da empresa</li>
              <li>Documento de identificação do representante legal</li>
              <li>Comprovante de endereço da empresa</li>
              <p className="text-red-700 font-semibold">Em alguns casos pode-se pedir outros documentos</p>
            </ul>
          </div>
        </BannerComplit>
        <BannerComplit
          link="http://tributos.bc.sc.gov.br:8080/sefaz/jsp/cnd/index.jsp"
          src="/Certidao.png"
        >
          <LinkIcons link="http://tributos.bc.sc.gov.br:8080/sefaz/jsp/cnd/index.jsp" />
          <p className="font-semibold">A Certidão Negativa de Débito de Balneário Camboriú é um documento emitido pela Prefeitura Municipal de Balneário Camboriú, localizada no estado de Santa Catarina, Brasil. Esta certidão atesta a inexistência de débitos fiscais, como IPTU (Imposto Predial e Territorial Urbano), ISS (Imposto Sobre Serviços) e outras taxas municipais, em nome de uma pessoa física ou jurídica naquele município.</p>
          <DocumentIcon />
          <ul className="pl-5 list-disc font-semibold">
            <li>Requerimento Padrão</li>
            <li>Documentos de Identificação</li>
            <li>Comprovante de Residência</li>
            <li>Comprovante de Regularidade Fiscal</li>
            <p className="text-red-700 font-semibold">Pode-se cobrar algumas taxas</p>
          </ul>
        </BannerComplit>
        <BannerComplit
          src="/Coleta.png"
          link="https://reciclabc.com.br/coletaderesiduos/"
        >
          <LinkIcons link="https://reciclabc.com.br/coletaderesiduos/" />
          <p className="font-semibold">A Coleta de Resíduos em Balneário Camboriú refere-se ao processo de recolhimento e disposição adequada dos resíduos sólidos gerados pela população, empresas e outras entidades dentro dos limites do município de Balneário Camboriú, localizado no estado de Santa Catarina, Brasil.</p>
          <DocumentIcon />
          <ul className="pl-5 list-disc font-semibold">
            <li>Separar os Resíduos Adequadamente</li>
            <li>Acondicionar os Resíduos Corretamente</li>
            <li>Respeitar os Horários de Coleta</li>
            <li>Seguir as Regras Locais </li>
          </ul>
        </BannerComplit>
        <BannerComplit
          src="/COSIP2024.png"
          link="http://tributos.bc.sc.gov.br:8080/sefaz/jsp/externo/debitoContigencia/consulta.jsp"
        >
          <LinkIcons link="http://tributos.bc.sc.gov.br:8080/sefaz/jsp/externo/debitoContigencia/consulta.jsp" />
          <p className="font-semibold">COSIP é a Contribuição para Custeio do Serviço de Iluminação Pública, que é um tributo cobrado pelas prefeituras municipais no Brasil para financiar os serviços de iluminação pública nas cidades. Cada município pode ter sua própria legislação e regulamentação sobre o COSIP, incluindo taxas e formas de arrecadação.</p>
          <DocumentIcon />
          <ul className="pl-5 list-disc font-semibold">
            <li>Identificação pessoal</li>
            <li>Comprovante de endereço </li>
            <li>Informações sobre o imóvel</li>
            <li>Seguir as Regras Locais </li>
            <p className="text-red-700 font-semibold">Em alguns casos pode-se pedir outros documentos</p>
          </ul>
        </BannerComplit>
        <BannerComplit
          link="http://tributos.bc.sc.gov.br:8080/sefaz/jsp/externo/debitoContigencia/consulta.jsp"
          src="/Boletim.png"
        >
          <LinkIcons link="http://tributos.bc.sc.gov.br:8080/sefaz/jsp/externo/debitoContigencia/consulta.jsp" />
          <p className="font-semibold">O Emissão Boletim de Débitos de Balneário Camboriú é um documento fornecido pela prefeitura de Balneário Camboriú, situada em Santa Catarina. Esse boletim é elaborado para apresentar detalhes sobre os débitos vinculados a impostos, taxas ou serviços municipais de propriedades localizadas dentro da área de jurisdição da prefeitura. Ele é uma ferramenta importante para os proprietários de imóveis verificarem e acompanharem quaisquer obrigações fiscais pendentes relacionadas às suas propriedades, como IPTU e taxas de serviços municipais. Ao emitir esse boletim, a prefeitura fornece transparência e facilidade para os contribuintes gerenciarem suas responsabilidades financeiras em relação ao município.</p>
          <DocumentIcon />
          <ul className="pl-5 list-disc font-semibold">
            <li>Documento de identificação pessoal do solicitante</li>
            <li>Comprovante de propriedade ou posse do imóvel</li>
            <li>Número de inscrição do imóvel</li>
            <li>Informações sobre o imóvel</li>
            <li>Formulário de solicitação específico</li>
          </ul>
        </BannerComplit>
        <BannerComplit
          link="http://tributos.bc.sc.gov.br:8080/sefaz/jsp/externo/debitoContigencia/consulta.jsp"
          src="/Emissao.png"
        >
          <LinkIcons link="http://tributos.bc.sc.gov.br:8080/sefaz/jsp/externo/debitoContigencia/consulta.jsp" />
          <p className="font-semibold">A Emissão de Guias para Pagamento de Balneário Camboriú é um procedimento administrativo que envolve a emissão de documentos ou guias detalhando valores a serem pagos, como impostos, taxas ou tarifas, destinados a serem pagos na cidade de Balneário Camboriú.</p>
          <DocumentIcon />
          <ul className="pl-5 list-disc font-semibold">
            <li>Identificação pessoal</li>
            <li>Comprovante de propriedade ou posse</li>
            <li>Documentos específicos relacionados ao pagamento</li>
            <p className="text-red-700 font-semibold">Em alguns casos pode-se pedir outros documentos</p>
          </ul>
        </BannerComplit>
        <BannerComplit
          link="https://www.bc.sc.gov.br/conteudo.cfm?caminho=fila-unica"
          src="/Fila.png"
        >
          <LinkIcons link="https://www.bc.sc.gov.br/conteudo.cfm?caminho=fila-unica" />
          <p className="font-semibold">A Fila Única em Balneário Camboriú se refere a um sistema adotado pela prefeitura da cidade para a gestão e organização das filas de espera em serviços públicos, como é o caso de consultas médicas e procedimentos de saúde. O objetivo principal desse sistema é promover a eficiência, transparência e equidade no acesso aos serviços de saúde oferecidos pelo município.</p>
          <DocumentIcon />
          <ul className="pl-5 list-disc font-semibold">
            <li>Documento de identidade</li>
            <li>Cartão do Sistema Único de Saúde (SUS)</li>
            <li>Comprovante de residência</li>
            <p className="text-red-700 font-semibold">Encaminhamento médico (quando necessário)</p>
          </ul>
        </BannerComplit>
        <BannerComplit
          link="http://tributos.bc.sc.gov.br:8080/eiptu/"
          src="/IPTU2024.png"
        >
          <LinkIcons link="http://tributos.bc.sc.gov.br:8080/eiptu/" />
          <p className="font-semibold">O IPTU (Imposto Predial e Territorial Urbano) de Balneário Camboriú é um imposto municipal cobrado anualmente aos proprietários de imóveis localizados na cidade. Este imposto incide sobre a propriedade predial e territorial urbana, ou seja, sobre imóveis edificados (prediais) e terrenos sem construção (territoriais) situados na área urbana do município.</p>
          <DocumentIcon />
          <ul className="pl-5 list-disc font-semibold">
            <li>Carnê ou guia de pagamento do IPTU</li>
            <li>Documento de identificação</li>
            <li>Cadastro do Imóvel</li>
            <li>Comprovante de residência</li>
            <p className="text-red-700 font-semibold">Em alguns casos pode-se pedir outros documentos</p>
          </ul>
        </BannerComplit>
      </div>
      <footer className="p-3 dark:text-zinc-200 visible">
        <p className="font-bold">By Development <a href="https://github.com/Robson-oliveiraa?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-red-600/60 transition-all">Robson</a> ©</p>
      </footer>
    </div>
  );
}
