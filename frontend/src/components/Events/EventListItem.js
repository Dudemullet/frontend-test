import React from 'react';
import ShareButton from '../ShareButton/ShareButton';
import { withRouter } from "react-router-dom";

const ViewButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/event/1') }}
  >
    Click Me!
  </button>
))

const EventListItem = (props, context) => {
  const {event} = props
  const { id,
  title,
  eventImage: image,
  dates } = event;

  const ViewBtn = withRouter(<ViewButton />);

  return <div className="event-element-wrapper">
      <header>
        <span>{dates[0]}</span>
        <ShareButton title={title} date={dates[0]} />
        <p>{title}</p>
      </header>
      <main>
        <img src={image} />
      </main>
      <footer>
        <ViewButton />
      </footer>
    </div>;
};

export default EventListItem;