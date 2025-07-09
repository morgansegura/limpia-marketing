import { Metadata } from "next";
import { MEDIA_FILE, SITE_CONFIG } from "@/lib/constants";

export function getBaseMetadata({
  title,
  description,
  path = "",
  imagePath = "/default-og.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  imagePath?: string;
}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.identity.name;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: SITE_CONFIG.identity.name,
      images: [
        {
          url: `${MEDIA_FILE}${imagePath}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${MEDIA_FILE}${imagePath}`],
    },
  };
}
