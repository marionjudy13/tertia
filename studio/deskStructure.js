import S from "@sanity/desk-tool/structure-builder";

// Sets up studio environment
export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("All Pages")
        .child(S.documentTypeList("page").title("Pages")),
      S.listItem()
        .title("Main Navigation")
        .child(S.document().schemaType("navMenu").documentId("mainNavigation")),
      S.listItem()
        .title("Global Settings")
        .child(
          S.document().schemaType("globalSettings").documentId("globalSettings")
        ),
    ]);
