import {
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import HeaderSimple from "../components/HeaderSimple";
import Label from "../components/Label";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-4",
    localization: { locales: ["en_GB"], primary: false },
    filter: { entityTypes: ["ce_ppcLanding"] },
    fields: ["logo", "name", "slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
};
const EventPage: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  return (
    <>
      <HeaderSimple
        backgroundColor="#FFFFFF"
        logo={`${document.logo.image.url}`}
      />
      <Label value={`Label ${document.name}`} />
    </>
  );
};
export default EventPage;
