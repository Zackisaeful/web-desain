import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import allArticles from "./data.js";
import "./Article.css";

const Article = () => {
  const { slug } = useParams();
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <section>
      <div className="article-container" id="top">
        <div className="article-content">
          <div className="article-header">
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
              <span className="author">By {article.author}</span>
              <span className="date">Published on {article.date}</span>
            </div>
          </div>

          <div className="article-image">
            <img src={article.image} alt={article.title} />
            <p className="image-caption">{article.imageCaption}</p>
          </div>

          <div className="article-body">
            <ReactMarkdown>{article.body}</ReactMarkdown>
          </div>
        </div>

        <aside className="article-sidebar">
          <h3>More Articles</h3>
          <div className="related-articles">
            {allArticles
              .filter((a) => a.slug !== slug)
              .map((a) => (
                <div key={a.id} className="related-article">
                  <Link to={`/article/${a.slug}`}>
                    <h4>{a.title}</h4>
                  </Link>
                  <div className="related-meta">
                    <span>{a.date}</span>
                  </div>
                </div>
              ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Article;
