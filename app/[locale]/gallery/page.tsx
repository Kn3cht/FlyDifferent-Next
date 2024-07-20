import { use } from "react";
import { getGalleryImageFileNames } from "@/utils/gallery-utils";
import GalleryImages from "@/components/gallery/GalleryImages";
import GalleryVideos from "@/components/gallery/GalleryVideos";

export default function Gallery() {
  const images = use(getGalleryImageFileNames());

  return (
    <div>
      <GalleryImages images={images} />
      <GalleryVideos />
    </div>
  );
}
