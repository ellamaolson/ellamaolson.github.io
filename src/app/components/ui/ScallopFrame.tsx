type ScallopFrameProps = {
  /** Number of scallop bumps along the top and bottom edges */
  topN?: number;
  /** Number of scallop bumps along the left and right edges */
  sideN?: number;
  /** Inset distance of the inner cutout from the image edge, in viewBox units */
  innerOffset?: number;
  /** Corner radius of the inner cutout */
  innerCornerRadius?: number;
  /** Protrusion of each bump: 1 = full semicircle, <1 = shallower */
  scallopDepth?: number;
  /** CSS color string for the frame fill */
  color: string;
  className?: string;
};

function buildScallopPath(
  topN: number,
  sideN: number,
  innerOffset: number,
  innerCornerRadius: number,
  scallopDepth: number
): string {
  const W = topN * 2;
  const H = sideN * 2;
  const o = innerOffset;
  const icr = innerCornerRadius;
  const sd = scallopDepth;

  let d = 'M0,0';
  for (let i = 0; i < topN; i++) d += ` a1,${sd} 0 0,1 2,0`;
  for (let i = 0; i < sideN; i++) d += ` a${sd},1 0 0,1 0,2`;
  for (let i = 0; i < topN; i++) d += ` a1,${sd} 0 0,1 -2,0`;
  for (let i = 0; i < sideN; i++) d += ` a${sd},1 0 0,1 0,-2`;
  d += ' Z';

  if (icr > 0) {
    d += ` M${o + icr},${o} L${W - o - icr},${o}`;
    d += ` A${icr},${icr} 0 0,1 ${W - o},${o + icr}`;
    d += ` L${W - o},${H - o - icr}`;
    d += ` A${icr},${icr} 0 0,1 ${W - o - icr},${H - o}`;
    d += ` L${o + icr},${H - o}`;
    d += ` A${icr},${icr} 0 0,1 ${o},${H - o - icr}`;
    d += ` L${o},${o + icr}`;
    d += ` A${icr},${icr} 0 0,1 ${o + icr},${o} Z`;
  } else {
    d += ` M${o},${o} L${W - o},${o} L${W - o},${H - o} L${o},${H - o} Z`;
  }

  return d;
}

export function ScallopFrame({
  topN = 10,
  sideN = 10,
  innerOffset = 0,
  innerCornerRadius = 0,
  scallopDepth = 1,
  color,
  className,
}: ScallopFrameProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className ?? ''}`}
      viewBox={`0 0 ${topN * 2} ${sideN * 2}`}
      preserveAspectRatio="none"
      style={{ overflow: 'visible' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={buildScallopPath(topN, sideN, innerOffset, innerCornerRadius, scallopDepth)}
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}
