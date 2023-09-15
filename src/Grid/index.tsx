interface GridProps {
  rows?: number;
  columns?: number;
  gap?: number;
  gapX?: number;
  gapY?: number;
}

export default function Grid({
  rows = 1,
  columns = 1,
  gap = 0,
  gapX,
  gapY,
}: GridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: `${gap}px`,
        rowGap: gapY ? `${gapY}px` : '',
        columnGap: gapX ? `${gapX}px` : '',
      }}
    ></div>
  );
}
