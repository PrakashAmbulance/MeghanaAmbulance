import NextImage, { type ImageProps } from "next/image";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function StaticImage({ src, ...props }: ImageProps) {
  const prefixed =
    typeof src === "string" && src.startsWith("/") ? `${base}${src}` : src;
  return <NextImage src={prefixed} {...props} />;
}
