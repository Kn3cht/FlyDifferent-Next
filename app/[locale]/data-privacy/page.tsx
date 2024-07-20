import TitleImage from "@/components/TitleImage";
import MarkdownSection from "@/components/MarkdownSection";
import { use } from "react";
import { getDataPrivacy } from "@/utils/md-utils";
import BookingSection from "@/components/BookingSection";

export default function Imprint({
  params,
}: {
  params: { flight: string; locale: string };
}) {
  const { htmlContent } = use(getDataPrivacy(params.locale));

  return (
    <div>
      <TitleImage
        namespace={"Privacy"}
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
