import path from "path";
import fs from "fs";

const validExtensions = ["png", "jpg", "jpeg"];

export async function getGalleryImageFileNames() {
  const dir = "/gallery";

  const galleryImageDir = path.join(process.cwd(), `/public/${dir}`);

  try {
    // Read the contents of the folder
    const files = fs.readdirSync(galleryImageDir, { withFileTypes: true });

    const images = files.filter((file) => {
      const filePath = path.join(galleryImageDir, file.name);
      const fileNameComponents = filePath.split(".");
      const fileExt = fileNameComponents[fileNameComponents.length - 1];

      return (
        validExtensions.includes(fileExt) && fs.statSync(filePath).isFile()
      );
    });

    console.log(
      "images",
      images.map((image) => `${dir}/image`),
    );

    return images.map((image) => `${dir}/${image.name}`);
  } catch (error) {
    console.error("Error reading folder:", error);
    return [];
  }
}
