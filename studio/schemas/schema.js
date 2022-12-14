// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import page from "./page";
import globalSettings from "./globalSettings";
import navMenu from "./navMenu";
import homePage from "./homePage";
import aboutPage from "./aboutPage";
import richText from "./richText";
import imageBanner from "./imageBanner";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    page,
    homePage,
    globalSettings,
    navMenu,
    richText,
    imageBanner,
    aboutPage,
  ]),
});
