import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Markdown from 'markdown-to-jsx';

const Article = ({ name }) => {
  const [content, setContent] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (!content)
      fetch(`/writings/${name}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
  });

  return (
    <>
      <button onClick={() => navigate('/articles')}>back</button>
      {content ? <Markdown>{content}</Markdown> : 'Loading...'}
    </>
  );
};

export default Article;
