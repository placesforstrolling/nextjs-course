import Link from 'next/link'

import DateIcon from '../icons/DateIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import AddressIcon from '../icons/AddressIcon';

import classes from './eventItem.module.css';
import Button from '../ui/button';

function EventItem(props) {

    const {title, image, date, location, id} = props;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',

    });
    const formatAddress = location.replace(',', '\n');
    const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image}></img>
      <div className={classes.content}>
        <div className={classes.summary}>
            <h2>Title: {title}</h2>
            <div className={classes.date}>
                <DateIcon />
                <time>Date: {readableDate}</time>
            </div>
            <div className={classes.address}>
                <AddressIcon />
                <address>Adress: {formatAddress}</address>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                  
                  <span>Explore Event</span>
                  <span className={classes.icon}><ArrowRightIcon/></span>
                  </Button>
            </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;