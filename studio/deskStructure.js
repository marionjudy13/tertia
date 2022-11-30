import S from "@sanity/desk-tool/structure-builder";

// Sets up studio environment
export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("All Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home Page")
                .child(
                  S.document().schemaType("homePage").documentId("homePage")
                ),
              S.listItem()
                .title("About Page")
                .child(
                  S.document().schemaType("aboutPage").documentId("aboutPage")
                ),
            ])
        ),
      S.listItem()
        .title("Main Navigation")
        .child(S.document().schemaType("navMenu").documentId("mainNavigation")),
      S.listItem()
        .title("Global Settings")
        .child(
          S.document().schemaType("globalSettings").documentId("globalSettings")
        ),
    ]);
