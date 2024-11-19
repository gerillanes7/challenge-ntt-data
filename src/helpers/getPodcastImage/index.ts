type PodcastImageArray = {
  label: string;
  attributes: Attributes;
};

type Attributes = {
  height: string;
};

export const getPodcastImage = (imgArray: PodcastImageArray[]) =>
  imgArray[2].label;
