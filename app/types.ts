export interface Article {
  id: number;
  read_time: number;
  title: string;
  description: string;
  img_preview: string;
  date: Date;
}

export type Category = {
  id: string;
  name: string;
};

export type DiaryDay = {
  id: number;
  date: Date;
  title: string;
  text: string;
  pictures: Picture[];
};

export type Picture = {
  id: number;
  url: string;
  create_date: Date;
  location: {
    longitude: number;
    latitude: number;
  };
};
