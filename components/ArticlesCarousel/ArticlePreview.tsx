import { SlArrowRight } from 'react-icons/sl';
import { articleType } from '.';
import { ArticlePreviewWrapper, Flex, ImageDiv, ReadingTime } from './wrappers';

interface ComponentPropsType {
  article: articleType;
}

const ArticlePreview = ({ article }: ComponentPropsType) => {
  return (
    <ArticlePreviewWrapper href={`/articles/${article.id}`}>
      <ImageDiv className="img-div" url={article.img_preview} />
      <div className="content">
        <ReadingTime>
          <div className="center">
            {article.read_time}
            <span>min</span>
          </div>
        </ReadingTime>
        <h6>{article.title}</h6>
        <span className="date">{article.date.toLocaleDateString('fr-BE')}</span>
        <p>{article.description}</p>
        <Flex>
          <div className="line" />
          <span className="read">Lire</span>
          <SlArrowRight />
        </Flex>
      </div>
    </ArticlePreviewWrapper>
  );
};

export default ArticlePreview;
