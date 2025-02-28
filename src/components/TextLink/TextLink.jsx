import './TextLink.css';

const TextLink = ({ children: text, link }) => {
  return (
    <a className="text-link" href={link} target="_blank">
      {text}
    </a>
  );
};

export default TextLink;
