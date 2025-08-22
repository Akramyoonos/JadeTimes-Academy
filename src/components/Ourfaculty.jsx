import React from "react";
import ourfaculty1 from "../assets/Images/ourfaculty1.png";
import ourfaculty2 from "../assets/Images/ourfaculty2.png";
import ourfaculty3 from "../assets/Images/ourfaculty3.png";

/* ====== breakpoint helper (md = 768px by Tailwind default) ====== */
function useBreakpoint(md = 768) {
  const [isMdUp, setIsMdUp] = React.useState(
    typeof window !== "undefined" ? window.innerWidth >= md : true
  );
  React.useEffect(() => {
    const onResize = () => setIsMdUp(window.innerWidth >= md);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [md]);
  return { isMdUp, isMobile: !isMdUp };
}

/** Black/white cutoff height (top banner) */
const BLACK_HEIGHT_MOBILE = 300;
const BLACK_HEIGHT_DESKTOP = 330;

/** Shade defaults (used only when attachTo === "below") */
const SHADE_DEFAULT = {
  attachTo: "below",    // "below" | "image" | "frame"
  widthPct: "100%",
  heightPx: 140,
  gapPx: 10,
  radiusPx: 0,
  topOpacity: 0.95,
  midOpacity: 0.70,
  midAt: 45,
  fadeAt: 100,
  heightPct: 88,        // legacy for "image"/"frame"
};

const COLORS = {
  film: "#3db4ff",
  media: "#ffca1f",
  perform: "#b61f9f",
};

/* ================================================================
   PER‑CARD TUNING (give separate values for mobile vs desktop)
   ================================================================= */
const facultyData = [
  {
    department: "FILM ARTS",
    imageUrl: ourfaculty1,
    color: COLORS.film,
    icon: "film",
    imageFit: "contain",
    imageBox: { aspect: "4/3" },
    imageScale: 2, imageTX: 0, imageTY: -50,
    mobile: {
      frameWidthPct: "92%",
      frameHeight: 120,
      frameBottom: 8,
      iconSize: 40,
      iconNudgeY: 0,
      shade: { widthPct: "96%", heightPx: 190, gapPx: 16 },
      cardOffsetY: 60,
    },
    desktop: {
      frameWidthPct: "100%",
      frameHeight: 116,
      frameBottom: 2,
      iconSize: 36,
      iconNudgeY: 0,
      shade: { widthPct: "109.5%", heightPx: 140, gapPx: 132 },
      cardOffsetY: 96,
    },
  },
  {
    department: "MEDIA ARTS",
    imageUrl: ourfaculty2,
    color: COLORS.media,
    icon: "camera",
    imageFit: "contain",
    imageBox: { aspect: "4/3" },
    imageScale: 2, imageTX: 0, imageTY: -50,
    mobile: {
      frameWidthPct: "92%",
      frameHeight: 120,
      frameBottom: 8,
      iconSize: 40,
      iconNudgeY: 0,
      shade: { widthPct: "96%", heightPx: 190, gapPx: 16 },
      cardOffsetY: 60,
    },
    desktop: {
      frameWidthPct: "100%",
      frameHeight: 116,
      frameBottom: 2,
      iconSize: 36,
      iconNudgeY: 0,
      shade: { widthPct: "109.5%", heightPx: 140, gapPx: 132 },
      cardOffsetY: 96,
    },
  },
  {
    department: "PERFORMING ARTS",
    imageUrl: ourfaculty3,
    color: COLORS.perform,
    icon: "masks",
    imageFit: "contain",
    imageBox: { aspect: "4/3" },
    imageScale: 2, imageTX: 0, imageTY: -50,
    mobile: {
      frameWidthPct: "92%",
      frameHeight: 120,
      frameBottom: 8,
      iconSize: 40,
      iconNudgeY: 0,
      shade: { widthPct: "96%", heightPx: 190, gapPx: 16 },
      cardOffsetY: 60,
    },
    desktop: {
      frameWidthPct: "100%",
      frameHeight: 116,
      frameBottom: 2,
      iconSize: 36,
      iconNudgeY: 0,
      shade: { widthPct: "109.5%", heightPx: 140, gapPx: 132 },
      cardOffsetY: 96,
    },
  },
];

/* Small arrow for "Learn more" */
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

/* ---- Split-line icons (transparent) ---- */
const IconFilm = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6zM7 6.5A1.5 1.5 0 1 0 7 9a1.5 1.5 0 0 0 0-2.5zm10 0A1.5 1.5 0 1 0 17 9a1.5 1.5 0 0 0 0-2.5zM7 16.5A1.5 1.5 0 1 0 7 19a1.5 1.5 0 0 0 0-2.5zm10 0A1.5 1.5 0 1 0 17 19a1.5 1.5 0 0 0 0-2.5z"/>
  </svg>
);
const IconCamera = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
    <path d="M9 7l1.5-2h3L15 7h3a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h3zm3 3.5A4.5 4.5 0 1 0 16.5 15 4.5 4.5 0 0 0 12 10.5zm0 2A2.5 2.5 0 1 1 9.5 15 2.5 2.5 0 0 1 12 12.5z"/>
  </svg>
);
const IconMasks = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
    <path d="M3 4h8v6a4 4 0 0 1-8 0V4zm10 0h8v8a4 4 0 0 1-8 0V4zM6.5 7A1.5 1.5 0 1 0 8 8.5 1.5 1.5 0 0 0 6.5 7zm4 0A1.5 1.5 0 1 0 12 8.5 1.5 1.5 0 0 0 10.5 7zm5 2A1.5 1.5 0 1 0 17 10.5 1.5 1.5 0 0 0 15.5 9zm4 0A1.5 1.5 0 1 0 21 10.5 1.5 1.5 0 0 0 19.5 9z"/>
  </svg>
);

const SplitIcon = ({ kind, color, size = 28, nudgeY = 0 }) => {
  const Icon = kind === "film" ? IconFilm : kind === "camera" ? IconCamera : IconMasks;
  return (
    <div className="pointer-events-none" style={{ color, lineHeight: 0, transform: `translateY(${nudgeY}px)` }} aria-hidden>
      <Icon size={size} />
    </div>
  );
};

/** Build gradient CSS from a shade config */
function buildShade(shade) {
  const s = { ...SHADE_DEFAULT, ...(shade || {}) };
  const background = `linear-gradient(0deg,
    rgba(0,0,0,${s.topOpacity}) 0%,
    rgba(0,0,0,${s.midOpacity}) ${s.midAt}%,
    rgba(0,0,0,0) ${s.fadeAt}%)`;
  return { ...s, background };
}

const FacultyCard = ({
  department,
  imageUrl,
  color,
  icon,
  conf, // chosen (mobile|desktop) config
  imageFit,
  imageBox,
  imageScale,
  imageTX,
  imageTY,
  shade,
}) => {
  const useAspect = imageBox?.aspect;
  const aspectClass = useAspect ? `aspect-[${imageBox.aspect}]` : "";
  const fixedHeightStyle = !useAspect && imageBox?.heightPx ? { height: `${imageBox.heightPx}px` } : undefined;

  const overflowClass = imageFit === "contain" ? "overflow-visible" : "overflow-hidden";
  const S = buildShade({ ...shade, ...(conf?.shade || {}) });

  return (
    <div className="relative w-full overflow-visible" style={{ transform: `translateY(${conf?.cardOffsetY || 0}px)` }}>
      {/* IMAGE */}
      <div className={`relative w-full ${overflowClass} bg-black ${aspectClass} z-[1]`} style={fixedHeightStyle}>
        <img
          src={imageUrl}
          alt={department}
          className={`absolute inset-0 h-full w-full ${imageFit === "contain" ? "object-contain" : "object-cover"} grayscale will-change-transform`}
          style={{
            objectPosition: "50% 50%",
            transform: `translate(${imageTX || 0}px, ${imageTY || 0}px) scale(${imageScale ?? 1})`,
            transformOrigin: "50% 50%",
          }}
        />
        {S.attachTo === "image" && (
          <div className="absolute left-0 right-0 bottom-0 pointer-events-none" style={{ height: `${S.heightPct}%`, background: S.background }} />
        )}
      </div>

      {/* Shade BELOW the frame */}
      {S.attachTo === "below" && (
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-[2]"
          style={{
            width: S.widthPct,
            height: `${S.heightPx}px`,
            bottom: `calc(${conf.frameBottom}px + ${S.gapPx}px - ${S.heightPx}px)`,
            borderRadius: S.radiusPx ? `${S.radiusPx}px` : undefined,
            background: S.background,
          }}
        />
      )}

      {/* FRAME + TEXT */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-[3] overflow-visible" style={{ bottom: `${conf.frameBottom}px`, width: conf.frameWidthPct }}>
        <div className="relative pointer-events-auto overflow-visible" style={{ height: `${conf.frameHeight}px` }}>
          {/* Frame */}
          <span className="absolute left-0 right-0 bottom-0 h-[4px]" style={{ backgroundColor: color }} />
          <span className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: color }} />
          <span className="absolute right-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: color }} />
          {/* split top */}
          <span className="absolute left-0 top-0 h-[4px] w-[36%]" style={{ backgroundColor: color }} />
          <span className="absolute right-0 top-0 h-[4px] w-[36%]" style={{ backgroundColor: color }} />

          {/* Text — left & middle */}
          <div className="absolute inset-y-0 left-6 right-6 flex flex-col justify-center text-left">
            <div className="text-white text-[20px] font-semibold leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              {department}
            </div>
            <a href="#" className="mt-1 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[.22em]" style={{ color }}>
              Learn More <ChevronRight />
            </a>
          </div>
        </div>
      </div>

      {/* ICON SUPER LAYER (z‑9999) — stays above everything */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-[9999] overflow-visible" style={{ bottom: `${conf.frameBottom}px`, width: conf.frameWidthPct }}>
        <div className="relative" style={{ height: `${conf.frameHeight}px` }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <SplitIcon kind={icon} color={color} size={conf.iconSize} nudgeY={conf.iconNudgeY || 0} />
          </div>
        </div>
      </div>

      {/* Shade INSIDE frame (optional legacy) */}
      {S.attachTo === "frame" && (
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-[2]" style={{ bottom: `${conf.frameBottom}px`, width: conf.frameWidthPct }}>
          <div className="relative" style={{ height: `${conf.frameHeight}px` }}>
            <div className="absolute inset-[4px] overflow-hidden rounded-[1px]">
              <div className="absolute left-0 right-0 bottom-0" style={{ height: `${S.heightPct}%`, background: S.background }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function OurFaculty() {
  const { isMobile } = useBreakpoint(); // switch values for mobile vs desktop

  return (
    <section className="relative bg-white">
      {/* Black strip on top only */}
      <div className="absolute top-0 left-0 right-0 bg-[#0a0a0a] z-0 md:hidden" style={{ height: BLACK_HEIGHT_MOBILE }} />
      <div className="absolute top-0 left-0 right-0 bg-[#0a0a0a] z-0 hidden md:block" style={{ height: BLACK_HEIGHT_DESKTOP }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 pt-16 md:pt-24">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Headline */}
          <div className="w-full md:w-[30%]">
            <div className="flex items-start gap-6">
              <span className="block w-[4px] h-[115px] bg-[#b61f9f]" />
              <div className="leading-[1.0]">
                <div className="text-[56px] md:text-[64px] font-light text-white">OUR</div>
                <div className="text-[56px] md:text-[64px] font-light text-white">FACULTY</div>
              </div>
            </div>
            <a href="/FacultyDirectoryPage" className="mt-8 inline-block bg-[#b61f9f] hover:bg-[#9c1988] px-8 py-4 text-[14px] font-bold uppercase tracking-wide text-white">
              MEET OUR FACULTY
            </a>
          </div>

          {/* Cards (stacks on mobile exactly like your screenshot) */}
          <div className="w-full md:flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            {facultyData.map((f) => (
              <FacultyCard
                key={f.department}
                department={f.department}
                imageUrl={f.imageUrl}
                color={f.color}
                icon={f.icon}
                imageFit={f.imageFit}
                imageBox={f.imageBox}
                imageScale={f.imageScale}
                imageTX={f.imageTX}
                imageTY={f.imageTY}
                shade={SHADE_DEFAULT}
                conf={isMobile ? f.mobile : f.desktop}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Space below */}
      <div className="h-10 md:h-14" />
    </section>
  );
}