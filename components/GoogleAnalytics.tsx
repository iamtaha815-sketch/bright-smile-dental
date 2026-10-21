"use client";

import Script from "next/script";
import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/config";

function PageViewTracker({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    const query = searchParams.toString();
    window.gtag("config", measurementId, {
      page_path: query ? `${pathname}?${query}` : pathname,
    });
  }, [pathname, searchParams, measurementId]);

  return null;
}

export default function GoogleAnalytics() {
  const measurementId = siteConfig.analytics.ga4MeasurementId;
  if (!measurementId) return null; // no-op until NEXT_PUBLIC_GA4_MEASUREMENT_ID is set

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker measurementId={measurementId} />
      </Suspense>
    </>
  );
}
