import {
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import HeaderSimple from "../components/HeaderSimple";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    localization: { locales: ["en_GB"], primary: false },
    filter: { entityTypes: ["ce_ppcLanding"] },
    fields: ["logo", "slug"],
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
    <HeaderSimple
      backgroundColor="#FFFFFF"
      logo={`${document.logo.image.url}`}
    />
  );
};
export default EventPage;
