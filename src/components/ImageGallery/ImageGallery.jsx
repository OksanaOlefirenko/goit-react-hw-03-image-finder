import { GalleryList } from './ImageGallery.styled';
// import { ImageGalleryItem } from '../ImageGalleryItem';

export const ImageGallery = ({ images, onSelect }) => {
  return (
    <GalleryList>
      {/* {images.map(image => (
        <ImageGalleryItem key={image.id} onClick={() => onSelect(image.link)}>
          {image.link}
        </ImageGalleryItem>
      ))} */}
    </GalleryList>
  );
};
