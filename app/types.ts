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
  id: string;
  date: Date;
  title: string;
  text: string;
  pictures: Picture[];
};

export type Picture = {
  id: string;
  url: string;
  create_date: string;
  diary_id: string;
  name: string;
  location: {
    longitude: number | null;
    latitude: number | null;
  };
  description?: string | null;
  blur_url?: string;
};
