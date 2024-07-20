import PageSection from "@/components/layout/PageSection";
import { useTranslations } from "next-intl";
import { videos } from "@/data/gallery/videos";

export default function GalleryVideos() {
  const t = useTranslations("Gallery");

  return (
    <PageSection title={t("videos")} bgColor={"#07427d"} color={"white"}>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
        {videos.map((video) => (
          <div key={video} className={"relative h-[300px]"}>
            <iframe
              className="w-full aspect-video rounded-lg"
              width="1254"
              height="300"
              src={video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
