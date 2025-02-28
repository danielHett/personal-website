import { useNavigate, useParams } from 'react-router';
import Markdown from 'markdown-to-jsx';

import './Article.css';

import { articles } from '../../data/articles.js';

const Article = () => {
  let navigate = useNavigate();
  let { articleKey } = useParams();

  // We find the matching article.
  const article = articles.find((article) => article.articleKey === articleKey);

  return (
    <>
      <a className="go-back button" onClick={() => navigate('/articles')}>
        ↩️ go back
      </a>

      <div className="article-container">
        {article ? (
          <>
            <div className="title">{article.title}</div>
            <div className="publish-date">{article.publishDate}</div>
            <Markdown
              options={{
                overrides: {
                  h1: {
                    props: {
                      className: 'article-content',
                    },
                  },
                  p: {
                    props: {
                      className: 'article-content',
                    },
                  },
                },
              }}
            >
              {article.content}
            </Markdown>
          </>
        ) : (
          <div className="article-content">The article you are looking for could not be found...</div>
        )}
      </div>
    </>
  );
};

export default Article;
