// 회사 법인 도장 (인라인 SVG) — 문서 인쇄/PDF에 그대로 포함됨
const SealStamp = ({ size = 56, company = "주식회사 비에이알", label = "대표이사" }: {
  size?: number;
  company?: string;
  label?: string;
}) => {
  const id = `seal-${company.length}-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="inline-block opacity-80 mix-blend-multiply"
      style={{ transform: "rotate(-7deg)" }}
    >
      <defs>
        <path id={id} d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
      </defs>
      <circle cx="50" cy="50" r="47" fill="none" stroke="#c00" strokeWidth="3" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="#c00" strokeWidth="1" />
      <text fill="#c00" fontSize="12.5" fontWeight="700" letterSpacing="1.5">
        <textPath href={`#${id}`} startOffset="2%">
          {company}
        </textPath>
      </text>
      <text x="50" y="58" textAnchor="middle" fill="#c00" fontSize="17" fontWeight="800" letterSpacing="2">
        {label}
      </text>
    </svg>
  );
};

export default SealStamp;
