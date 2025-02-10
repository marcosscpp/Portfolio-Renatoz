import styled from "styled-components";

const ButtonLink = styled.a`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid var(--white);
  border-radius: 99px;
  color: var(--white);
  display: inline-block;
  margin-top: 2.5rem;
  font-size: 1.125rem;
  padding: 1rem 1.75rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: background .3s ease-in-out, color .3s ease-in-out;

  &:hover {
    color: var(--purple-600);
    background: var(--white);
  }
`;

const ContactButton = () => {
  const url = "https://api.whatsapp.com/send?phone=5511976654616";
  const message = "Entrar em Contato";

  return (
    <ButtonLink href={url} target="_blank" rel="noopener noreferrer">
      {message}
    </ButtonLink>
  );
};

export default ContactButton;
