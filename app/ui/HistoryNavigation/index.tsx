'use client';

import { Wrapper } from './wrapper';

interface Props {
  lastDate: Date;
  firstDate: Date;
}

const HistoryNavigation = (props: Props) => {
  const { lastDate, firstDate } = props;

  return (
    <Wrapper>
      <div className="dates">
        <span>2024</span>
        <span>2023</span>
        <span>2022</span>
      </div>
      <div className="slider--bar">
        <div className="slider-circle__outer">
          <div className="slider-circle__inner"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HistoryNavigation;
