import { useNavigate, useParams, Outlet } from 'react-router';
import Article from '../Article/Article.jsx';

// TODO: Can I fetch from the server? For now just hardcode these.
const names = ['hello_world'];

const Articles = () => {
  let navigate = useNavigate();
  let { article } = useParams();

  const handleClick = (name) => navigate(`/articles/${name}`);

  return (
    <>
      {article ? (
        <Article name={article} />
      ) : (
        names.map((name) => (
          <button key={name} onClick={() => handleClick(name)}>
            {name}
          </button>
        ))
      )}
    </>
  );
};

export default Articles;
