import { ReactNode } from "react";
import {
  BannerContent,
  BannerImage,
  BannerDetails
} from "./application/Banner";

import {
  HeaderContent
} from './application/Header'

import { FileText, Github } from 'lucide-react'

interface BannerComplitProps {
  children: ReactNode,
  link: string
}

function BannerComplit({ children, link }: BannerComplitProps) {
  return (
    <BannerContent>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <BannerImage
          className="w-full rounded-md h-44"
          src="/Banner.jpg"
        />
      </a>
      <BannerDetails>
        <div className="flex gap-2 items-center">
          <FileText />
          <p className="text-md font-bold">Documentos</p>
        </div>
        <p>Descrição do Componente</p>
        {children}
      </BannerDetails>
    </BannerContent>
  )
}

export default function Home() {
  return (
    <div>
      <HeaderContent>
        <a href="https://www.bc.sc.gov.br/servicos.cfm" target="_blank" rel="noopener noreferrer">
          <img src="/Balneario.png" alt="" className="h-20" />
        </a>
        <div className="flex flex-col items-center  ">
          <p className="text-3xl text-cyan-700 font-extrabold">Serviços da Prefeitura</p>
          <p className="text-xl text-zinc-800 font-bold">Balneário Camboriú</p>
        </div>
        <a href="https://github.com/Andre-Oliveiraa?tab=repositories" target="_blank" rel="noopener noreferrer" className="bg-zinc-400 w-12 h-12 flex justify-center items-center rounded-full hover:bg-zinc-800 hover:text-zinc-300 transition-all">
          <Github />
        </a>
      </HeaderContent>
      <div className=" grid grid-cols-3 grid-rows-4 p-10 gap-7">
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
        <BannerComplit link='https://google.com'>
          <p></p>
        </BannerComplit>
      </div>
      <footer className="p-3 dark:text-zinc-200">
        <p className="font-bold">By Development <a href="https://github.com/Robson-oliveiraa?tab=repositories" target="_blank" rel="noopener noreferrer">Robson</a> ©</p>
      </footer>
    </div>
  );
}
