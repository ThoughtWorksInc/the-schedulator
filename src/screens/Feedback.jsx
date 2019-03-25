import React from "react";
import { Container } from "semantic-ui-react";

const Feedback = () => {
  return (
    <Container data-testid="google-feedback-container">
      <iframe
        title="GoogleFeedback"
        src="https://docs.google.com/forms/d/e/1FAIpQLSd-n4Mt1t4AT-sNe44qNe0tQ8hgDzByopVkXJAYTo8S12WhSw/viewform?embedded=true"
        width="100%"
        height="2618"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>
    </Container>
  );
};

export default Feedback;
