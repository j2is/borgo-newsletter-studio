// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import newsletter from "./newsletter";

import normal from "./blocks/normal";
import blockQuote from "./blocks/blockquote";
import headingThree from "./blocks/headingThree";
import headingThreeNormal from "./blocks/headingThreeNormal";
import headingThreeNormalSmall from "./blocks/headingThreeNormalSmall";
import headingTwo from "./blocks/headingTwo";
import headingTwoThreeNormalSmall from "./blocks/headingTwoThreeNormalSmall";

import link from "./objects/link";
import textEmail from "./objects/textEmail";
import twoColumn from "./objects/twoColumn";
import quote from "./objects/quote";
import statistic from "./objects/statistic";
import contactBlock from "./objects/contactBlock";
import slideshow from "./objects/slideshow";
import body from "./objects/body";
import menuLink from "./objects/menuLink";
import legalText from "./objects/legalText";
import videoBlock from "./objects/videoBlock";
import videoEmailBlock from "./objects/videoEmailBlock";
import imageBlock from "./objects/imageBlock";
import colour from "./objects/colour";
import colourBlock from "./objects/colourBlock";
import paragraph from "./objects/paragraph";
import editorialParagraph from "./objects/editorialParagraph";
import vcard from "./objects/vcard";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    newsletter,
    textEmail,
    normal,
    blockQuote,
    headingThree,
    headingThreeNormal,
    headingThreeNormalSmall,
    headingTwo,
    headingTwoThreeNormalSmall,
    colourBlock,
    contactBlock,
    legalText,
    imageBlock,
    videoBlock,
    videoEmailBlock,
    colour,
    paragraph,
    menuLink,
    quote,
    slideshow,
    editorialParagraph,
    statistic,
    twoColumn,
    link,
    body,
    vcard,
  ]),
});
