import TitleImage from "@/components/TitleImage";
import React, { use } from "react";
import PageSection from "@/components/layout/PageSection";
import { getCV } from "@/utils/md-utils";
import Pilot from "@/components/contact/Pilot";
import Contact from "@/components/contact/Contact";
import CV from "@/components/contact/CV";
import Qualifications from "@/components/contact/Qualifications";
import Gear from "@/components/contact/Gear";
import BookingSection from "@/components/BookingSection";

export default function AboutUs({
  params,
}: {
  params: { flight: string; locale: string };
}) {
  const { htmlContent } = use(getCV(params.locale));

  return (
    <div>
      <TitleImage
        titleKey={"title"}
        subtitleKey={"subtitle"}
        imageUrl={"/about-us.jpg"}
        namespace={"Contact"}
      />
      <div className={"z-10 relative"}>
        <PageSection>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
            <Pilot />
            <Contact />
          </div>
        </PageSection>
        <PageSection>
          <div className={"grid grid-cols-1 gap-8"}>
            <CV content={htmlContent} />
            <Qualifications />
            <Gear />
          </div>
        </PageSection>
        <BookingSection />
      </div>
    </div>
  );
}
