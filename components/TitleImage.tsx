"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function TitleImage({
  titleKey,
  subtitleKey,
  imageUrl,
  videoUrl,
  namespace,
}: {
  namespace: string;
  titleKey: string;
  subtitleKey?: string;
  imageUrl: string;
  videoUrl?: string;
}) {
  const t = useTranslations(namespace);

  return (
    <div>
      <div className={""}>
        <ParallaxProvider>
          <Parallax speed={-20}>
            <div>
              <div className={"h-screen w-full bg-primary relative -mt-16"}>
                <Image
                  className={"z-10 absolute top-0"}
                  src={imageUrl}
                  alt={""}
                  layout="fill"
                  objectFit="cover"
                />
                {videoUrl && (
                  <video
                    loop
                    className={"z-20 absolute"}
                    width="100%"
                    height="100%"
                    controls={false}
                    autoPlay
                    muted
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>
      <div
        className={
          "absolute bottom-0 w-screen backdrop-blur-sm bg-white/30 py-8 flex flex-col items-center justify-center gap-2"
        }
      >
        {subtitleKey && (
          <h2 className={"text-3xl text-accent font-light px-8"}>
            {t(subtitleKey)}
          </h2>
        )}
        <h1 className={"text-4xl text-[#001a33] px-8"}>{t(titleKey)}</h1>
      </div>
    </div>
  );
}
