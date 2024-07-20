import { useCallback, useEffect } from "react";
import Image from "next/image";

export default function ImagePreview({
  image,
  onClose,
  prev,
  next,
}: {
  onClose: () => void;
  next?: () => void;
  prev?: () => void;
  image: string;
}) {
  const keyListener = useCallback((event: any) => {
    console.log("event.key", event.key, next, prev);
    switch (event.key) {
      case "Escape":
        onClose();
        break;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyListener, false);

    return () => {
      document.removeEventListener("keydown", keyListener, false);
    };
  }, [keyListener]);

  return (
    <div
      className={
        "z-50 h-screen w-screen bg-black/30 backdrop-blur overscroll-contain fixed top-0 left-0 overflow-hidden"
      }
      onClick={() => onClose()}
    >
      <div className={"relative"}>
        <div className={"h-screen w-screen"}>
          <Image
            onClick={(e) => e.stopPropagation()}
            src={image}
            className="transform rounded-lg brightness-90 transition group-hover:brightness-110 p-8 z-50"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
      <div
        className={
          "z-70 fixed h-[40px] w-[40px] cursor-pointer bg-gray-700 hover:bg-gray-900 text-white top-2 right-2 md:top-8 md:right-8 flex justify-center items-center rounded-[50px] text-2xl"
        }
        onClick={() => {
          onClose();
        }}
      >
        X
      </div>
      <div
        className={
          "h-screen w-screen absolute top-0 left-0 flex flex-row justify-between items-center px-2 md:px-8 z-60"
        }
      >
        <div
          className={
            "h-[60px] w-[60px] cursor-pointer bg-gray-700 hover:bg-gray-900 text-white flex justify-center items-center rounded-[50px] text-4xl"
          }
          onClick={(e) => {
            prev?.();
            e.stopPropagation();
          }}
        >
          {"<"}
        </div>
        <div
          className={
            "h-[60px] w-[60px] cursor-pointer bg-gray-700 hover:bg-gray-900 text-white flex justify-center items-center rounded-[50px] text-4xl"
          }
          onClick={(e) => {
            next?.();
            e.stopPropagation();
          }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}
