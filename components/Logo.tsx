import type { SVGProps } from "react";

type LogoProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  /** "full" = mark + wordmark, "icon" = mark only */
  variant?: "full" | "icon";
  /** Height in px. Width scales automatically. */
  size?: number;
  /** Mark background color */
  markColor?: string;
  /** Small dot color at the end of the middle bar */
  accentColor?: string;
  /** Accessible label. Pass an empty string to hide from screen readers. */
  title?: string;
};

export function Logo({
  variant = "full",
  size = 32,
  markColor = "#5B5BD6",
  accentColor = "#7EE0C3",
  title = "FlowDesk",
  className,
  ...props
}: LogoProps) {
  const isFull = variant === "full";
  const viewBoxWidth = isFull ? 340 : 96;
  const width = (size / 96) * viewBoxWidth;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} 96`}
      width={width}
      height={size}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title || undefined}
      className={className}
      {...props}
    >
      <rect width="96" height="96" rx="22" fill={markColor} />
      <path
        d="M32 74 V38 Q32 30 40 30 H72"
        fill="none"
        stroke="#fff"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 54 H58"
        fill="none"
        stroke="#fff"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="74" cy="54" r="6" fill={accentColor} />

      {isFull && (
        <text
          x="122"
          y="66"
          fill="currentColor"
          fontSize="52"
          letterSpacing="-1.5"
          fontFamily="inherit"
        >
          <tspan fontWeight={500}>Flow</tspan>
          <tspan fontWeight={400}>Desk</tspan>
        </text>
      )}
    </svg>
  );
}

export default Logo;