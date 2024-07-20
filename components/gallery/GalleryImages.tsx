"use client";
import PageSection from "@/components/layout/PageSection";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ImagePreview from "@/components/gallery/ImagePreview";
import { useTranslations } from "next-intl";

export default function GalleryImages({ images }: { images: string[] }) {
  const imageArrays = splitArrayIntoSubArrays(images, 3);

  const t = useTranslations("Gallery");

  const [activeImageIndex, setActiveImageIndex] = useState<number>();
  const activeImage =
    activeImageIndex !== undefined ? images[activeImageIndex] : undefined;

  const next =
    activeImageIndex !== undefined && activeImageIndex < images.length - 1
      ? () => setActiveImageIndex(activeImageIndex + 1)
      : undefined;

  const prev =
    activeImageIndex !== undefined && activeImageIndex > 0
      ? () => setActiveImageIndex(activeImageIndex - 1)
      : undefined;

  const keyListener = useCallback(
    (event: any) => {
      if (activeImageIndex !== undefined) {
        switch (event.key) {
          case "ArrowLeft":
            prev?.();
            break;
          case "ArrowRight":
            next?.();
            break;
        }
      }
    },
    [next, prev, activeImageIndex],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyListener, false);

    return () => {
      document.removeEventListener("keydown", keyListener, false);
    };
  }, [keyListener]);

  console.log("index", activeImageIndex);
  return (
    <PageSection title={t("images")}>
      <div className={"w-full text-center"}>
        <h2 className={"mb-8 text-2xl"}>{t("subtitle")}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageArrays.map((arr, arrayIndex) => (
          <div className="grid gap-4" key={arrayIndex}>
            {arr.map((image, index) => (
              <div key={index} className={"relative h-[200px] w-full"}>
                <Image
                  onClick={() => {
                    const ind = index + arrayIndex * 3;
                    setActiveImageIndex(ind);
                  }}
                  src={image}
                  className="transform rounded-lg brightness-90 transition group-hover:brightness-110 cursor-pointer"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      {activeImage && (
        <ImagePreview
          next={next}
          prev={prev}
          image={activeImage}
          onClose={() => setActiveImageIndex(undefined)}
        />
      )}
    </PageSection>
  );
}

export function splitArrayIntoSubArrays(array: string[], size: number) {
  if (!Array.isArray(array) || size <= 0) {
    throw new Error(
      "Invalid input: array must be an array and size must be a positive number.",
    );
  }

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    const subArray = array.slice(i, i + size);
    result.push(subArray);
  }
  return result;
}
