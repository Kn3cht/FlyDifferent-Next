"use client";

import { Flight } from "@/data/flights/types";
import React from "react";
import Image from "next/image";
import YouTubeIcon from "@/components/icons/YouTubeIcon";

interface FlightImageGalleryItem {
  type: "image" | "video";
  src: string;
}

export default function FlightImageGallery({ flight }: { flight: Flight }) {
  const youTubeVideo = flight.youTubeLink;
  const images = flight.images;

  const imageItems: FlightImageGalleryItem[] = images.map((image) => ({
    type: "image",
    src: image,
  }));

  const items: FlightImageGalleryItem[] = [
    {
      type: "video",
      src: youTubeVideo,
    },
    ...imageItems,
  ];

  const [activeItem, setActiveItem] = React.useState<FlightImageGalleryItem>(
    () => ({
      type: "video",
      src: youTubeVideo,
    }),
  );

  /**/

  return (
    <div className="grid gap-4">
      <div className={"relative h-[300px]"}>
        {activeItem.type === "video" ? (
          <iframe
            className="w-full aspect-video rounded-lg"
            src={activeItem.src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <Image
            src={activeItem.src}
            alt={""}
            layout="fill"
            objectFit="cover"
            className={"rounded-lg"}
          />
        )}
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        {items.map((item) => (
          <div
            key={item.src}
            className={
              "w-full h-full relative rounded cursor-pointer" +
              (item.src === activeItem.src
                ? " rounded border-2 border-primary"
                : "")
            }
            onClick={() => setActiveItem({ type: item.type, src: item.src })}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={""}
                className={"rounded"}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <div
                className={
                  "w-full h-[80px] relative bg-gray-200 rounded flex justify-center items-center text-[#FF0000]"
                }
              >
                <YouTubeIcon />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
