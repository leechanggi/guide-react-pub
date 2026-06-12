import { useParams } from 'react-router';

const PagesArticle = () => {
  const { articleId } = useParams();

  return <div>PagesArticle {articleId}</div>;
};

export default PagesArticle;
