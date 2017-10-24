import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const WinnerModal = (props) => (
  <Modal open={props.openModal} closeIcon onClose={props.handleModal}>
    <Modal.Header>Winner: {props.allMsg.filter((msg) => { return msg[1] === props.winnerId })[0]} By {props.winnerId}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.image_url} />
      <Modal.Description>
        {props.allMsg.map((msg) => {
          return <p>{msg[0]}</p>
        })}
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default WinnerModal

// Figure out modal info return.
