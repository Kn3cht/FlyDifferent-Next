import PageSection from "@/components/layout/PageSection";
import UsageFee from "@/components/landing-site/UsageFee";
import LandingSiteRules from "@/components/landing-site/LandingSiteRules";
import LandingSiteHeader from "@/components/landing-site/LandingSiteHeader";
import { use } from "react";
import {
  getLandingSiteChecklist,
  getLandingSiteInfo,
  getLandingSiteRules,
} from "@/utils/md-utils";
import LandingSiteInfo from "@/components/landing-site/LandingSiteInfo";
import Transportation from "@/components/landing-site/Transportation";
import Checklist from "@/components/landing-site/Checklist";
import LandingSiteContact from "@/components/landing-site/LandingSiteContact";

export default function LandingSitePage({
  params,
}: {
  params: { flight: string; locale: string };
}) {
  const { htmlContent: rulesHtmlContent } = use(
    getLandingSiteRules(params.locale),
  );
  const { htmlContent: infoHtmlContent } = use(
    getLandingSiteInfo(params.locale),
  );
  const { htmlContent: checklistHtmlContent } = use(
    getLandingSiteChecklist(params.locale),
  );

  return (
    <div>
      <PageSection>
        <div className={"flex flex-col gap-8"}>
          <div className={"flex flex-col gap-8"}>
            <LandingSiteHeader />
            <div className={"grid grid-cols-1 gap-8"}>
              <UsageFee />
              <LandingSiteRules htmlContent={rulesHtmlContent} />
            </div>
          </div>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
            <LandingSiteInfo htmlContent={infoHtmlContent} />
            <Transportation />
            <Checklist htmlContent={checklistHtmlContent} />
            <LandingSiteContact />
          </div>
        </div>
      </PageSection>
    </div>
  );
}
