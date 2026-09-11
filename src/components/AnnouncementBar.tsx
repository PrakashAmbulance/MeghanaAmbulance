import { business, buildTelUrl } from "@/lib/business";
import { SirenIcon } from "@/components/icons";

/**
 * Slim urgency strip above the header. Reinforces 24/7 availability and
 * gives an immediate call path before a visitor even reaches the nav.
 */
export default function AnnouncementBar() {
  return (
    <div className="bg-navy-950 text-white">
      <div className="container-page flex items-center justify-center gap-2 py-2 text-center text-xs font-semibold sm:text-sm">
        <SirenIcon
          className="h-4 w-4 shrink-0 animate-pulse text-emergency-500"
          aria-hidden="true"
        />
        <span className="hidden sm:inline">
          24/7 Emergency Ambulance Service in Bangalore —
        </span>
        <a
          href={buildTelUrl(business.phone)}
          className="font-extrabold text-emergency-500 hover:text-emergency-400 hover:underline"
        >
          Call Right Away: {business.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
