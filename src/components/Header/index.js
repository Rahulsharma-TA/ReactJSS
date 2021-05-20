import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Header = ({ fields }) => (
  <React.Fragment>
    <Text tag="h2" className="display-4" field={fields.heading} />
    <Image tag="image" className="img-fluid" field={fields.logo} />
  </React.Fragment>
);

export default Header;
