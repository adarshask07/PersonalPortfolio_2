import React from "react";

import { Heading, Column, RevealFx, Text, Flex } from "@/once-ui/components";
import { FeedbackCarousel } from "@/once-ui/components/FeedbackCarousel";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = "Feedback & Recognition | " + person.name;
  const description = "Read what colleagues and leaders say about my work.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/feedback`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function FeedbackPage() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              Voices & Validation
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              Real feedback from the incredible people I've had the pleasure to work with.
            </Text>
          </RevealFx>
        </Column>

        <RevealFx translateY="16" delay={0.4} fillWidth>
          <Flex fillWidth paddingY="l">
             <FeedbackCarousel />
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
