import { DiaryDay as DiaryDayType } from 'constants/global';
import { ImageDiv, Wrapper } from './wrappers';

interface Props {
  day: DiaryDayType;
}

const DiaryDay = (props: Props) => {
  const { day } = props;

  return (
    <Wrapper>
      <div className="date">
        <p>{day.date.toLocaleDateString()}</p>
      </div>
      <h4>{day.title}</h4>
      <div className="content">
        <div className="pictures">
          {day.pictures.map((pic) => (
            <div key={pic} className="image-wrapper">
              <ImageDiv url={pic} />
            </div>
          ))}
        </div>
        <div className="text">
          <p>{day.text}</p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DiaryDay;
