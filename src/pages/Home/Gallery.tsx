import {
  PhotoCollection,
  PhotoColletcionProps,
} from "@components/PhotoCollection";
import imageData from "@data/imageData";
import styled from "styled-components";

const GaleryContainer = styled.div`
  padding: 5rem 0;
  padding-bottom: 0; //remover quando seção de sobre estiver inserida
`;

const Separator = styled.hr`
  border: 1px solid var(--gray-600);

  @media (max-width: 769px) {
    margin: 5rem auto 4rem auto;
    max-width: 20rem;
  }

  @media (min-width: 769px) {
    margin: 6rem auto;
    width: 50%;
  }
`;

const photoCollections: Omit<PhotoColletcionProps, "counter">[] = [
  {
    descriptionAlignment: "left",
    photosList: imageData.retratoCorporativo,
    category: "Retrato Corporativo",
    description: (
      <>
        Reposicionamento de imagem, <strong>valorização</strong> de marca e
        ascensão de sua <strong>identidade visual</strong>. Nossa fotografia é
        mais do que captura de <strong>momentos</strong>, é uma ferramenta
        poderosa para transformar e elevar sua expressão no mundo.
      </>
    ),
  },
  {
    descriptionAlignment: "right",
    photosList: imageData.casamentos,
    category: "Casamentos",
    description: (
      <>
        <strong>Celebração</strong> do Amor,{" "}
        <strong>Captura de Memórias</strong> Eternas. Nossas fotos eternizam
        emoções e transformam a celebração do amor em
        <strong>memórias inesquecíveis.</strong> Cada retrato é pensado para
        valorizar a beleza, a emoção e a singularidade do seu grande dia.
      </>
    ),
  },
  {
    descriptionAlignment: "left",
    photosList: imageData.arquiteturaAmbiente,
    category: "Arquitetura e Ambiente",
    description: (
      <>
        Celebrando a beleza e a complexidade da arquitetura. Cada fotografia é
        uma homenagem à visão dos arquitetos e designers, destacando a harmonia.
        Nós capturamos a essência dos espaços, valorizando a grandiosidade das
        estruturas e a sutileza dos detalhes.
      </>
    ),
  },
  {
    descriptionAlignment: "right",
    photosList: imageData.aniversarios,
    category: "Aniversários",
    description: (
      <>
        A <strong>celebração da vida</strong>, repletos de alegria e emoção.
        Nossas fotos capturam os detalhes e sentimentos que tornam cada
        celebração especial, transformando esses momentos em{" "}
        <strong>memórias atemporais</strong>, que refletem a beleza de cada fase
        da vida.
      </>
    ),
  },
  {
    descriptionAlignment: "left",
    photosList: imageData.ensaioFotografico,
    category: "Ensaio Fotográfico",
    description: (
      <>
        <strong>Expressão da sua essência</strong>, além de imagens é sobre
        <strong>capturar quem você é</strong>. Nossas lentes revelam sua
        personalidade, sua beleza e suas emoções de forma autêntica e única.
        Cada clique é pensado para eternizar sua essência em imagens que
        <strong>contam sua história.</strong>
      </>
    ),
  },
  {
    descriptionAlignment: "right",
    photosList: imageData.eventosSociais,
    category: "Eventos Sociais",
    description: (
      <>
        A <strong>celebração das conexões</strong> que transformam momentos em
        histórias inesquecíveis. Mais do que fotografias, criamos memórias que
        eternizam as relações e a magia do momento.
      </>
    ),
  },
];

const Gallery = () => {
  return (
    <GaleryContainer>
      {photoCollections.map((collection, index) => (
        <>
          <div key={index}>
            <PhotoCollection
              descriptionAlignment={collection.descriptionAlignment}
              photosList={collection.photosList}
              category={collection.category}
              description={collection.description}
              counter={index + 1}
            />
          </div>
          {index < photoCollections.length - 1 && <Separator />}
        </>
      ))}
    </GaleryContainer>
  );
};

export default Gallery;
