import TitleImage from "@/components/TitleImage";
import MarkdownSection from "@/components/MarkdownSection";
import { use } from "react";
import { getImprint } from "@/utils/md-utils";
import BookingSection from "@/components/BookingSection";

export default function Imprint({
  params,
}: {
  params: { flight: string; locale: string };
}) {
  const { htmlContent } = use(getImprint(params.locale));

  return (
    <div>
      <TitleImage
        namespace={"Imprint"}
        titleKey={"title"}
        imageUrl={"/main-header.jpg"}
      />
      <div className={"relative z-10"}>
        <MarkdownSection content={htmlContent} />
        <BookingSection />
      </div>
    </div>
  );
}
