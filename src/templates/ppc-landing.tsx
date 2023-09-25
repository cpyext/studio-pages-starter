import {
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Label from "../components/Label";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-4",
    localization: { locales: ["en_GB"], primary: false },
    filter: { entityTypes: ["ce_ppcLanding"] },
    fields: ["name", "slug"],
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
  return <Label value={`Label ${document.name}`} />;
};
export default EventPage;
