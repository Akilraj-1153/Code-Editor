import * as React from 'react';
import { Html, Button, Text, Img } from "@react-email/components";

export function Email(props) {
  const { senderName, senderEmail, message, image } = props;

  return (
    <Html lang="en">
      <div>
        <Text>Hello,</Text>
        <Text>You have received a new message from:</Text>
        <Text>Name: {senderName}</Text>
        <Text>Email: {senderEmail}</Text>
        <Text>Message: {message}</Text>
        {image && (
          <Img src={image} alt="Attached Image" />
        )}
        <Button href="https://google.com">Click me</Button>
      </div>
    </Html>
  );
}

export default Email;
