import { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { Container } from './App.styled';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export class App extends Component {
  state = {
    showModal: false,
    selectedImage: null,
  };

  selectedImage = link => {
    this.setState({ selectedImage: link });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <Searchbar onSubmit></Searchbar>
        <ImageGallery onSelect={this.selectedImage}>
          <ImageGalleryItem onClick={this.toggleModal}></ImageGalleryItem>
        </ImageGallery>
        <Button></Button>
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            url={this.state.selectedImage}
          ></Modal>
        )}
      </Container>
    );
  }
}
