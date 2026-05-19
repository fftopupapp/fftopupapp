"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductGrid({ products }: { products: any[] }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 pb-8">
      {products.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.03 }}
          className="group"
        >
          <Link href={`/topup/${item.code}`} className="block">
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-cyan-500/0
                  to-blue-500/0
                  group-hover:from-cyan-500/10
                  group-hover:to-blue-500/10
                  transition-all
                  duration-500
                  z-10
                "
              />

              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/storage/products/${item.gallery}`}
                  alt={item.display_title || "Product"}
                  className="
                    w-full
                    aspect-square
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Bottom Overlay */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  h-16
                  bg-gradient-to-t
                  from-black/80
                  to-transparent
                "
              />
            </div>

            {/* Title */}
            <h2
              className="
                mt-2
                text-center
                text-[11px]
                md:text-sm
                font-semibold
                text-white
                leading-tight
                transition-all
                duration-300
                group-hover:text-cyan-300
              "
            >
              {item.display_title}
            </h2>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}