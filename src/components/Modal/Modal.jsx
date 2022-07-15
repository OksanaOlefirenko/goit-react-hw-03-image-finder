import { Overlay, ModalImg } from './Modal.styled';
import { Component } from 'react';

export class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalImg>
          <img src="" alt="" />
        </ModalImg>
      </Overlay>
    );
  }
}
