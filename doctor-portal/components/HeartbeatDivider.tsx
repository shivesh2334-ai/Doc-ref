export default function HeartbeatDivider({
  className = "",
  color = "#1B7A72",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 40"
        preserveAspectRatio="none"
        className="w-full h-8"
      >
        <polyline
          points="0,20 120,20 140,20 152,6 164,34 176,20 200,20 220,20 232,10 244,30 256,20 600,20"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
