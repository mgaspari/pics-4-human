import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const WinnerModal = (props) => (
  <Modal open={props.openModal} closeIcon onClose={props.handleModal}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Singapore_Botanic_Gardens_Cactus_Garden_2.jpg/225px-Singapore_Botanic_Gardens_Cactus_Garden_2.jpg' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>Weve found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default WinnerModal
