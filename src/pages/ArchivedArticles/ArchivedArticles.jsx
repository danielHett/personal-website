import { useNavigate } from 'react-router';

import './ArchivedArticles.css';

import { articles } from '../../data/articles.js';

const ArchivedArticles = () => {
  let navigate = useNavigate();

  const handleClick = (requestedTitle) => navigate(`/articles/${requestedTitle}`);

  return (
    <>
      <div className="archived_articles_list-header">Archived Articles</div>
      <div className="archived_articles_article-container">
        {articles.map(({ articleKey, title, publishDate }) => (
          <a className="archived_articles_article-link button" key={articleKey} onClick={() => handleClick(articleKey)}>
            <span className="archived_articles_publish-date">{publishDate}</span>{' '}
            <span className="archived_articles_title">{title}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default ArchivedArticles;
