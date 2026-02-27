"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flex, Text, IconButton, Button, Column, Row } from "@/once-ui/components";
import feedbacksData from "../../data/feedbacks.json";

interface FeedbackItem {
  id: number;
  from: string;
  date: string;
  en: string;
  mr: string;
}

const feedbacks: FeedbackItem[] = feedbacksData;

export const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [language, setLanguage] = useState<"en" | "mr">("en");

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"));
  };

  const currentFeedback = feedbacks[currentIndex];

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95,
      };
    },
  };

  // Derived direction could be passed dynamically, but sticking to simple fade/slide for robustness
  return (
    <Column
      fillWidth
      padding="xl"
      gap="24"
      background="surface"
      border="neutral-strong"
      radius="xl"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <Flex fillWidth horizontal="space-between" vertical="center" marginBottom="16">
        <Text variant="display-strong-s">Feedback & Recognition</Text>
        <Button variant="secondary" size="s" onClick={toggleLanguage}>
          {language === "en" ? "मराठीत वाचा" : "Read in English"}
        </Button>
      </Flex>

      <Flex
        fillWidth
        position="relative"
        horizontal="center"
        vertical="center"
        style={{ minHeight: "16rem" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentFeedback.id}-${language}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: "100%", textAlign: "center" }}
          >
            <Column gap="24" horizontal="center">
              <Text
                variant="body-default-l"
                onBackground="neutral-strong"
                style={{
                  fontFamily: "var(--font-google-sans)",
                  fontOpticalSizing: "auto",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariationSettings: '"GRAD" 0',
                  lineHeight: "1.8",
                  letterSpacing: "0.2px",
                  whiteSpace: "pre-line",
                }}
              >
                &quot;{language === "en" ? currentFeedback.en : currentFeedback.mr}&quot;
              </Text>
              
              <Column gap="4" horizontal="center" marginTop="24">
                <Text
                  variant="heading-strong-s"
                  onBackground="brand-strong"
                  style={{
                    fontFamily: "var(--font-google-sans)",
                    fontOpticalSizing: "auto",
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontVariationSettings: '"GRAD" 0',
                    letterSpacing: "0.5px",
                  }}
                >
                  {currentFeedback.from}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {currentFeedback.date}
                </Text>
              </Column>
            </Column>
          </motion.div>
        </AnimatePresence>
      </Flex>

      <Flex fillWidth horizontal="center" gap="16" marginTop="32">
        <IconButton
          icon="chevronLeft"
          variant="tertiary"
          size="l"
          onClick={handlePrev}
          aria-label="Previous feedback"
        />
        <Text variant="body-default-s" onBackground="neutral-weak" style={{ alignSelf: "center" }}>
          {currentIndex + 1} / {feedbacks.length}
        </Text>
        <IconButton
          icon="chevronRight"
          variant="tertiary"
          size="l"
          onClick={handleNext}
          aria-label="Next feedback"
        />
      </Flex>
    </Column>
  );
};
