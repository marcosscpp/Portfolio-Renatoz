import { useState } from "react";
import {
  EditorSection,
  EditorContainer,
  EditorTitle,
  EditorDescription,
  EditorMenu,
  EditorMenuItem,
  EditorHeader,
  EditorSliderContainer,
} from "./styles";

import PaintBrushIcon from "@/assets/icons/paintbrush.svg";
import MagnifyingGlassIcon from "@/assets/icons/magnifying-glass.svg";
import PaletteIcon from "@/assets/icons/palette.svg";
import WandMagicIcon from "@/assets/icons/wand-magic.svg";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const imageCategories = {
  colorCorrection: {
    before:
      "../images/comparativo/cor-e-contraste/crianca-sorridente-escola-original.JPG",
    after:
      "../images/comparativo/cor-e-contraste/crianca-sorridente-escola-editada.JPG",
    alt: "Criança loira de cabelos cacheados sorrindo para a câmera, vestindo uma camiseta branca com gola amarela, ao lado de outra criança em um ambiente escolar colorido.",
  },
  imperfectionCorrection: {
    before:
      "../images/comparativo/imprefeicoes/cantor-palco-luzes-azuis-original.JPG",
    after:
      "../images/comparativo/imprefeicoes/cantor-palco-luzes-azuis-editado.JPG",
    alt: "Cantor segurando um microfone e performando em um palco iluminado por luzes azuis e envolto em névoa, com um clima intenso e energético.",
  },
  detailEnhancement: {
    before:
      "../images/comparativo/detalhes/casal-idoso-evento-ao-ar-livre-original.JPG",
    after:
      "../images/comparativo/detalhes/casal-idoso-evento-ao-ar-livre-editada.JPG",
    alt: "Casal de idosos sentado entre outras pessoas em um evento ao ar livre, com expressões sérias. A mulher olha diretamente para a câmera, enquanto o homem parece estar conversando.",
  },
  uniqueAtmospheres: {
    before:
      "../images/comparativo/atmosferas-unicas/cantor-palco-luzes-azuis-original.JPG",
    after:
      "../images/comparativo/atmosferas-unicas/cantor-palco-luzes-azuis-editado.JPG",
    alt: "Cantor segurando um microfone e performando em um palco iluminado por luzes azuis e envolto em névoa, com um clima intenso e energético.",
  },
};

const Editor = () => {
  const [selectedCategory, setSelectedCategory] = useState("colorCorrection");

  return (
    <EditorSection className="container">
      <EditorHeader>
        <EditorTitle>
          A <strong className="purple-text">Edição</strong> Como Parte da Nossa
          Arte
        </EditorTitle>
        <EditorDescription>
          Cada imagem capturada por nós passa por um processo de edição
          exclusivo, onde transformamos o que já é belo em algo extraordinário.
          Seja para realçar a identidade de uma marca ou eternizar memórias,
          nossa edição é feita com cuidado e dedicação, sempre alinhada à visão
          e às necessidades dos nossos clientes.
        </EditorDescription>
      </EditorHeader>
      
      <EditorContainer>
        <EditorMenu>
          <EditorMenuItem
            onClick={() => setSelectedCategory("colorCorrection")}
            className={selectedCategory === "colorCorrection" ? "active" : ""}
          >
            <img src={PaletteIcon} alt="" /> Ajuste de Cores e Contraste
          </EditorMenuItem>
          <EditorMenuItem
            onClick={() => setSelectedCategory("imperfectionCorrection")}
            className={
              selectedCategory === "imperfectionCorrection" ? "active" : ""
            }
          >
            <img src={WandMagicIcon} alt="" /> Correção de Imperfeições
          </EditorMenuItem>
          <EditorMenuItem
            onClick={() => setSelectedCategory("detailEnhancement")}
            className={selectedCategory === "detailEnhancement" ? "active" : ""}
          >
            <img src={MagnifyingGlassIcon} alt="" /> Valorização de Detalhes
          </EditorMenuItem>
          <EditorMenuItem
            onClick={() => setSelectedCategory("uniqueAtmospheres")}
            className={selectedCategory === "uniqueAtmospheres" ? "active" : ""}
          >
            <img src={PaintBrushIcon} alt="" /> Criação de Atmosferas Únicas
          </EditorMenuItem>
        </EditorMenu>

        <EditorSliderContainer>
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={imageCategories[selectedCategory].before}
                alt={imageCategories[selectedCategory].alt}
                loading="lazy"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={imageCategories[selectedCategory].after}
                alt={imageCategories[selectedCategory].alt}
                loading="lazy"
              />
            }
          />
        </EditorSliderContainer>
      </EditorContainer>
    </EditorSection>
  );
};

export default Editor;
