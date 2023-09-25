import {
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import CenteredContainer from "../components/CenteredContainer";
import DateTime from "../components/DateTime";
import FAQsAccordion from "../components/FAQsAccordion";
import GridContainer from "../components/GridContainer";
import HeaderSimple from "../components/HeaderSimple";
import Headline from "../components/Headline";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import VStack from "../components/VStack";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    localization: { locales: ["en"], primary: false },
    filter: { entityTypes: ["ce_ppc_landing"] },
    fields: [
      "name",
      "richTextDescriptionV2",
      "c_whystudy",
      "c_title_arden",
      "c_desc_arden",
      "c_image_arden",
      "shortDescriptionV2",
      "c_course",
      "c_startJourney",
      "c_footerImage",
      "slug",
      "logo",
      "websiteUrl",
      "landingPageUrl",
    ],
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
//     <PageLayout backgroundColor="#FFFFFF">
//       <HeaderSimple
//         logo={`https://a.mktgcdn.com/p-sandbox/nmnGsL23rnIAqGIkx0J1Jej4Bdh-i7zlbjADi08Qfd8/1500x1100.jpg`}
//       />
//       <CenteredContainer>
//         <GridContainer>
//           <VStack>
//             <Headline
//               value={`${document.name}`}
//               textSize="3xl"
//               fontWeight="semibold"
//             />
//             <Paragraph
//               value={`${document.description}`}
//               textSize="base"
//               fontWeight="normal"
//             />
//             <Headline
//               value={`${document.c_title_arden}`}
//               textSize="xl"
//               fontWeight="medium"
//       />
//           // </VStack>
//           // <ProductImage
//           //   src={`${document.photoGallery[0].image.url}`}
//           //   alt="Light green backpack with black canvas straps and front zipper pouch."
//           // />
//         </GridContainer>
//         // <FAQsAccordion
//         //   faqs={[
//         //     {
//         //       question: `${document.c_featuredFAQs[0].question}`,
//         //       answer: `${document.c_featuredFAQs[0].answer}`,
//         //     },
//         //     {
//         //       question: `${document.c_featuredFAQs[1].question}`,
//         //       answer: `${document.c_featuredFAQs[1].answer}`,
//         //     },
//         //   ]}
//         //   title={`Häufig gestellte Fragen`}
//         // />
//       </CenteredContainer>
//     </PageLayout>
  );
};
export default EventPage;
