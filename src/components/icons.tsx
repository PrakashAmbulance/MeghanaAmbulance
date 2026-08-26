import type { SVGProps } from "react";
import type { ServiceIconName } from "@/lib/business";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />
    </Base>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function AmbulanceRequestIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 17h1a2 2 0 0 0 4 0h6a2 2 0 0 0 4 0h1a1 1 0 0 0 1-1v-3l-3-4H14V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9Z" />
      <path d="M14 10h4l2 3" />
      <path d="M9 5v6M6 8h6" />
    </Base>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
      <path d="M16 21v-9h4a1 1 0 0 1 1 1v8" />
      <path d="M8 8h1M11 8h1M8 12h1M11 12h1M8 16h1M11 16h1" />
    </Base>
  );
}

const serviceIcons: Record<ServiceIconName, (props: IconProps) => React.ReactElement> = {
  emergency: (props) => (
    <Base {...props}>
      <path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6l-9-4Z" />
      <path d="M9 12h6M12 9v6" />
    </Base>
  ),
  icu: (props) => (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M7 4v14M3 10h4M17 4v14M17 10h4" />
      <path d="M10 8h4M12 6v4" />
    </Base>
  ),
  nicu: (props) => (
    <Base {...props}>
      <rect x="4" y="9" width="16" height="8" rx="2" />
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
      <circle cx="12" cy="13" r="1.5" />
    </Base>
  ),
  picu: (props) => (
    <Base {...props}>
      <circle cx="12" cy="7" r="3" />
      <path d="M6 21v-3a6 6 0 0 1 12 0v3" />
      <path d="M10 13h4" />
    </Base>
  ),
  ccu: (props) => (
    <Base {...props}>
      <path d="M20.8 8.6c0 4-4.4 7.4-8.8 10.9-4.4-3.5-8.8-6.9-8.8-10.9a4.9 4.9 0 0 1 8.8-3 4.9 4.9 0 0 1 8.8 3Z" />
      <path d="M4 12h3l2-4 2 8 2-6 1.5 2H20" />
    </Base>
  ),
  transfer: (props) => (
    <Base {...props}>
      <path d="M3 7h11l4 4v6H3V7Z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      <path d="M14 7v4h4" />
    </Base>
  ),
  longDistance: (props) => (
    <Base {...props}>
      <path d="M3 12h18M3 12a9 9 0 0 1 9-9m-9 9a9 9 0 0 0 9 9m9-9a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9" />
      <path d="M12 3v18" />
    </Base>
  ),
  patient: (props) => (
    <Base {...props}>
      <circle cx="12" cy="6" r="3" />
      <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
    </Base>
  ),
};

export function ServiceIcon({
  name,
  ...props
}: { name: ServiceIconName } & IconProps) {
  const Icon = serviceIcons[name];
  return <Icon {...props} />;
}

export function ClockIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Base>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Base>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </Base>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m6 9 6 6 6-6" />
    </Base>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Base>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Base>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 13l4 4L19 7" />
    </Base>
  );
}

export function StaffIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v2" />
      <path d="M17 8h3m-1.5-1.5v3" />
      <circle cx="18" cy="6" r="0" />
    </Base>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Base>
  );
}
