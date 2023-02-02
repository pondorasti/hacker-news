"use client"
import { LazyMotion } from "framer-motion"

const loadFeatures = () => import("./features").then((res) => res.default)

export default function FramerContext({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  )
}
