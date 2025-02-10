import closeImage from "@/assets/images/renato-close.jpg";
import portraitImage from "@/assets/images/renato-sitting.jpg";
import {
  AboutSection,
  AboutContainer,
  AboutTitle,
  AboutDescription,
  AboutQuote,
  AboutImage,
  ImageContainer,
} from "./styles";

const About = () => {
  return (
    <AboutSection className="container">
      <AboutContainer>
        <AboutTitle>
          <div>Prazer!</div> Eu sou <strong className="purple-text">Paulo Renato</strong>
        </AboutTitle>
        <AboutDescription>
          Mas você também pode me chamar de <strong>Renato</strong>. Um
          fotógrafo apaixonado em uma missão de congelar momentos no tempo e
          criar memórias que durem uma vida inteira. Espero que você goste do
          meu trabalho e das narrativas que cada imagem conta. Caso queira
          trabalhar comigo, fique à vontade para entrar em contato.
        </AboutDescription>
        <AboutQuote>
          Estou sempre à disposição para transformar momentos especiais em
          lembranças eternas.
        </AboutQuote>
        <AboutImage src={closeImage} alt="" />
      </AboutContainer>
      <ImageContainer>
        <AboutImage src={portraitImage} alt="" />
      </ImageContainer>
    </AboutSection>
  );
};

export default About;
