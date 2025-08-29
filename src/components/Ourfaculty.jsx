// src/components/OurFaculty.jsx
import React from "react";
import ourfaculty1 from "../assets/Images/ourfaculty1.png";
import ourfaculty2 from "../assets/Images/ourfaculty2.png";
import ourfaculty3 from "../assets/Images/ourfaculty3.png";

/* ====== breakpoint helper (md = 768px) ====== */
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

/** Only main black strip stays (you set this) */
const BLACK_HEIGHT_MOBILE = 1708; // 1700
const BLACK_HEIGHT_DESKTOP = 320;

/** Shade (if you still want the dark fade below the frame) */
const SHADE_DEFAULT = {
  attachTo: "below",   // "below" | "image" | "frame"
  widthPct: "100%",
  heightPx: 140,
  gapPx: 10,
  radiusPx: 0,
  topOpacity: 0.95,
  midOpacity: 0.7,
  midAt: 45,
  fadeAt: 100,
  heightPct: 88,
};

/** Adjustable WHITE BAND */
const BAND_DEFAULT = {
  enabled: true,
  widthPct: "88%",
  heightPx: 160,
  opacity: 1,
  radiusPx: 0,
  tx: 0,
  ty: 0,
  scale: 1,
};

const COLORS = {
  film: "#3db4ff",
  media: "#ffca1f",
  perform: "#b61f9f",
};

/* ================================================================
   PER-CARD TUNING
   - mobile band shown on card 1 & 2 only (card 3 disabled)
   - ALL desktop bands disabled
   - last card sets reserveBottom: 0 to pull "Follow Us" up
   ================================================================ */
const facultyData = [
  {
    department: "FILM ARTS",
    imageUrl: ourfaculty1,
    color: COLORS.film,
    icon: "film",
    imageFit: "contain",
    imageBox: { aspect: "4 / 3" },

    imageScale: 2,
    imageTX: 0,
    imageTY: -50,

    mobile: {
      frameWidthPct: "103%",
      frameHeight: 124,
      frameBottom: 6,
      iconSize: 44,

      cardOffsetY: 62,

      frameTX: 0,
      frameTY: 106,
      frameScale: 1,

      shadeTX: 0,
      shadeTY: -47,
      shadeScale: 1,

      iconTX: 0,
      iconTY: 0,
      iconScale: 1,

      imageScale: 1.8,
      imageTX: 0,
      imageTY: 0,

      // mobile band (keep)
      band: { ...BAND_DEFAULT, ty: 270, heightPx: 30, widthPct: "115%" },

      shade: { widthPct: "113%", heightPx: 190, gapPx: 10 },
    },
    tablet: {
      frameWidthPct: "100%",
      frameHeight: 118,
      frameBottom: 2,
      iconSize: 36,

      cardOffsetY: 98,

      frameTX: 0,
      frameTY: 32,
      frameScale: 1,

      shadeTX: 0,
      shadeTY: 35,
      shadeScale: 1,

      iconTX: 0,
      iconTY: 0,
      iconScale: 1,

      imageScale: 2,
      imageTX: 0,
      imageTY: -50,

      // DESKTOP BAND DISABLED
      band: { ...BAND_DEFAULT, enabled: false },

      shade: { widthPct: "110%", heightPx: 140, gapPx: 132 },
    },
    desktop: {
      frameWidthPct: "100%",
      frameHeight: 118,
      frameBottom: 2,
      iconSize: 36,

      cardOffsetY: 98,

      frameTX: 0,
      frameTY: 32,
      frameScale: 1,

      shadeTX: 0,
      shadeTY: 35,
      shadeScale: 1,

      iconTX: 0,
      iconTY: 0,
      iconScale: 1,

      imageScale: 2,
      imageTX: 0,
      imageTY: -50,

      // DESKTOP BAND DISABLED
      band: { ...BAND_DEFAULT, enabled: false },

      shade: { widthPct: "110%", heightPx: 140, gapPx: 132 },
    },
  },
  {
    department: "MEDIA ARTS",
    imageUrl: ourfaculty2,
    color: COLORS.media,
    icon: "camera",
    imageFit: "contain",
    imageBox: { aspect: "4 / 3" },

    imageScale: 2,
    imageTX: 0,
    imageTY: -50,

    mobile: {
      frameWidthPct: "103%",
      frameHeight: 124,
      frameBottom: -80,
      iconSize: 44,

      cardOffsetY: 240,

      frameTX: 0,
      frameTY: -140,
      frameScale: 1,

      shadeTX: 0,
      shadeTY: -300,
      shadeScale: 1,

      iconTX: 0,
      iconTY: 0,
      iconScale: 1,

      imageScale: 1.8,
      imageTX: 0,
      imageTY: -170,

      // mobile band (keep)
      band: { ...BAND_DEFAULT, ty: 115, heightPx: 30, widthPct: "115%" },

      shade: { widthPct: "113%", heightPx: 190, gapPx: 10 },
    },
    tablet: {
      frameWidthPct: "100%",
      frameHeight: 118,
      frameBottom: 3,
      iconSize: 36,

      cardOffsetY: 98,

      frameTX: 0,
      frameTY: 32,
      frameScale: 1,

      shadeTX: 0,
      shadeTY: 35,
      shadeScale: 1,

      iconTX: 0,
      iconTY: 0,
      iconScale: 1,

      imageScale: 2,
      imageTX: 0,
      imageTY: -50,

      // DESKTOP BAND DISABLED
      band: { ...BAND_DEFAULT, enabled: false },

      shade: { widthPct: "110%", heightPx: 140, gapPx: 132 },
    },
    desktop: {
      frameWidthPct: "100%",
      frameHeight: 118,
      frameBottom: 3,
      iconSize: 36,

      cardOffsetY: 98,

      frameTX: 0,
      frameTY: 32,
      frameScale: 1,

      shadeTX: 0,
      shadeTY: 35,
      shadeScale: 1,

      iconTX: 0,
      iconTY: 0,
      iconScale: 1,

      imageScale: 2,
      imageTX: 0,
      imageTY: -50,

      // DESKTOP BAND DISABLED
      band: { ...BAND_DEFAULT, enabled: false },

      shade: { widthPct: "110%", heightPx: 140, gapPx: 132 },
    },
  },
  {
    department: "PERFORMING ARTS",
    imageUrl: ourfaculty3,
    color: COLORS.perform,
    icon: "masks",
    imageFit: "contain",
    imageBox: { aspect: "4 / 3" },

    imageScale: 2,
    imageTX: 0,
    imageTY: -50,

    mobile: {
      frameWidthPct: "103%",
      frameHeight: 124,
      frameBottom: -180,
      iconSize: 44,

      cardOffsetY: 330,

      frameTX: 0,
      frameTY: -650,
      frameScale: 1,

      shadeTX: 0,
      shadeTY: -810,
      shadeScale: 1,

      iconTX: 0,
      iconTY: 0,
      iconScale: 1,

      imageScale: 1.8,
      imageTX: 0,
      imageTY: -590,

      // MOBILE LAST BAND DISABLED
      band: { ...BAND_DEFAULT, enabled: false },

      // pull next section up (no extra bottom reserve)
      reserveBottom: 0,

      shade: { widthPct: "113%", heightPx: 190, gapPx: 10 },
    },
    tablet: {
      frameWidthPct: "100%",
      frameHeight: 118,
      frameBottom: 19,
      iconSize: 36,

      cardOffsetY: 98,

      frameTX: 0,
      frameTY: 32,
      frameScale: 1,

      shadeTX: 0,
      shadeTY: 35,
      shadeScale: 1,

      iconTX: 0,
      iconTY: 0,
      iconScale: 1,

      imageScale: 2,
      imageTX: 0,
      imageTY: -50,

      // DESKTOP BAND DISABLED
      band: { ...BAND_DEFAULT, enabled: false },

      // also keep desktop tight just in case
      reserveBottom: 0,

      shade: { widthPct: "110%", heightPx: 140, gapPx: 132 },
    },
    desktop: {
      frameWidthPct: "100%",
      frameHeight: 118,
      frameBottom: 19,
      iconSize: 36,

      cardOffsetY: 98,

      frameTX: 0,
      frameTY: 32,
      frameScale: 1,

      shadeTX: 0,
      shadeTY: 35,
      shadeScale: 1,

      iconTX: 0,
      iconTY: 0,
      iconScale: 1,

      imageScale: 2,
      imageTX: 0,
      imageTY: -50,

      // DESKTOP BAND DISABLED
      band: { ...BAND_DEFAULT, enabled: false },

      // also keep desktop tight just in case
      reserveBottom: 0,

      shade: { widthPct: "110%", heightPx: 140, gapPx: 132 },
    },
  },
];

/* Small arrow for "Learn more" */
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

/* ---- icons ---- */
const IconFilm = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6zM7 6.5A1.5 1.5 0 1 0 7 9a1.5 1.5 0 0 0 0-2.5zm10 0A1.5 1.5 0 1 0 17 9a1.5 1.5 0 0 0 0-2.5zM7 16.5A1.5 1.5 0 1 0 7 19a1.5 1.5 0 0 0 0-2.5zm10 0A1.5 1.5 0 1 0 17 19a1.5 1.5 0 0 0 0-2.5z" />
  </svg>
);
const IconCamera = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
    <path d="M9 7l1.5-2h3L15 7h3a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h3zm3 3.5A4.5 4.5 0 1 0 16.5 15 4.5 4.5 0 0 0 12 10.5zm0 2A2.5 2.5 0 1 1 9.5 15 2.5 2.5 0 0 1 12 12.5z" />
  </svg>
);
const IconMasks = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
    <path d="M3 4h8v6a4 4 0 0 1-8 0V4zm10 0h8v8a4 4 0 0 1-8 0V4zM6.5 7A1.5 1.5 0 1 0 8 8.5 1.5 1.5 0 0 0 6.5 7zm4 0A1.5 1.5 0 1 0 12 8.5 1.5 1.5 0 0 0 10.5 7zm5 2A1.5 1.5 0 1 0 17 10.5 1.5 1.5 0 0 0 15.5 9zm4 0A1.5 1.5 0 1 0 21 10.5 1.5 1.5 0 0 0 19.5 9z" />
  </svg>
);
const SplitIcon = ({ kind, color, size = 28 }) => {
  const Icon = kind === "film" ? IconFilm : kind === "camera" ? IconCamera : IconMasks;
  return (
    <div className="pointer-events-none" style={{ color, lineHeight: 0 }} aria-hidden>
      <Icon size={size} />
    </div>
  );
};

/** helpers */
function buildShade(shade) {
  const s = { ...SHADE_DEFAULT, ...(shade || {}) };
  const background = `linear-gradient(0deg,
    rgba(0,0,0,${s.topOpacity}) 0%,
    rgba(0,0,0,${s.midOpacity}) ${s.midAt}%,
    rgba(0,0,0,0) ${s.fadeAt}%)`;
  return { ...s, background };
}
const tCenterX = (tx = 0, ty = 0, scale = 1) =>
  `translate(-50%, 0) translate(${Number(tx)}px, ${Number(ty)}px) scale(${Number(scale)})`;

const FacultyCard = ({
  department,
  imageUrl,
  color,
  icon,
  conf,
  imageFit,
  imageBox,
  imageScale,
  imageTX,
  imageTY,
  shade,
}) => {
  const aspectStyle = imageBox?.aspect ? { aspectRatio: imageBox.aspect, minHeight: 160 } : undefined;
  const overflowClass = imageFit === "contain" ? "overflow-visible" : "overflow-hidden";
  const S = buildShade({ ...shade, ...(conf?.shade || {}) });
  const band = { ...BAND_DEFAULT, ...(conf?.band || {}) };

  // per-breakpoint image transform (fallback to top-level)
  const imgScale = conf?.imageScale ?? imageScale ?? 1;
  const imgTX = conf?.imageTX ?? imageTX ?? 0;
  const imgTY = conf?.imageTY ?? imageTY ?? 0;

  // transforms
  const frameTransform = tCenterX(conf?.frameTX || 0, conf?.frameTY || 0, conf?.frameScale || 1);
  const shadeTransform = tCenterX(conf?.shadeTX || 0, conf?.shadeTY || 0, conf?.shadeScale || 1);

  // auto bottom space so nothing overlaps the next section
  const spill = Math.max(0, -(conf?.frameBottom || 0));
  const shadeSpill = S.attachTo === "below" ? Math.max(0, (S.heightPx || 0) - (S.gapPx || 0)) : 0;
  const autoReserveBottom = spill + shadeSpill + 8; // tiny buffer
  const reserveBottom = conf?.reserveBottom !== undefined ? conf.reserveBottom : autoReserveBottom;

  return (
    <div
      className="relative w-full overflow-visible"
      style={{
        marginTop: conf?.cardOffsetY || 0,
        marginBottom: reserveBottom, // controls how close "Follow Us" sits
      }}
    >
      {/* IMAGE container (no per-card black bg anymore) */}
      <div className={`relative w-full ${overflowClass} z-[1]`} style={aspectStyle}>
        <img
          src={imageUrl}
          alt={department}
          loading="eager"
          decoding="async"
          className={`absolute inset-0 h-full w-full ${imageFit === "contain" ? "object-contain" : "object-cover"} grayscale will-change-transform`}
          style={{
            objectPosition: "50% 50%",
            transform: `translate(${imgTX}px, ${imgTY}px) scale(${imgScale})`,
            transformOrigin: "50% 50%",
          }}
        />
      </div>

      {/* WHITE BAND (mobile card 1&2 only, desktop disabled via config) */}
      {band.enabled && (
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none z-[2]"
          style={{
            width: band.widthPct,
            height: `${band.heightPx}px`,
            background: `rgba(255,255,255,${band.opacity})`,
            borderRadius: band.radiusPx ? `${band.radiusPx}px` : undefined,
            transform: `translate(-50%, -50%) translate(${band.tx}px, ${band.ty}px) scale(${band.scale})`,
          }}
        />
      )}

      {/* Shade BELOW the frame (optional) */}
      {S.attachTo === "below" && (
        <div
          className="absolute left-1/2 pointer-events-none z-[2]"
          style={{
            width: S.widthPct,
            height: `${S.heightPx}px`,
            bottom: `calc(${conf.frameBottom}px + ${S.gapPx}px - ${S.heightPx}px)`,
            borderRadius: S.radiusPx ? `${S.radiusPx}px` : undefined,
            background: S.background,
            transform: shadeTransform,
            transformOrigin: "50% 50%",
          }}
        />
      )}

      {/* FRAME + TEXT */}
      <div
        className="absolute left-1/2 pointer-events-none z-[3] overflow-visible"
        style={{
          bottom: `${conf.frameBottom}px`,
          width: conf.frameWidthPct,
          transform: frameTransform,
          transformOrigin: "50% 50%",
        }}
      >
        <div className="relative pointer-events-auto overflow-visible" style={{ height: `${conf.frameHeight}px` }}>
          {/* Frame */}
          <span className="absolute left-0 right-0 bottom-0 h-[4px]" style={{ backgroundColor: color }} />
          <span className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: color }} />
          <span className="absolute right-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: color }} />
          {/* split top */}
          <span className="absolute left-0 top-0 h-[4px] w-[36%]" style={{ backgroundColor: color }} />
          <span className="absolute right-0 top-0 h-[4px] w-[36%]" style={{ backgroundColor: color }} />

          {/* Text */}
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

      {/* ICON layer */}
      <div
        className="absolute left-1/2 pointer-events-none z-[4] overflow-visible"
        style={{
          bottom: `${conf.frameBottom}px`,
          width: conf.frameWidthPct,
          transform: tCenterX(conf?.frameTX || 0, conf?.frameTY || 0, conf?.frameScale || 1),
          transformOrigin: "50% 50%",
        }}
      >
        <div className="relative" style={{ height: `${conf.frameHeight}px` }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <SplitIcon kind={icon} color={color} size={conf.iconSize} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OurFaculty() {
  const { isLgUp, isMdUp } = useBreakpoint();

  return (
    <section className="relative bg-white">
      {/* Main black strip only */}
      <div className="absolute top-0 left-0 right-0 bg-[#0a0a0a] z-0 md:hidden" style={{ height: BLACK_HEIGHT_MOBILE }} />
      <div className="absolute top-0 left-0 right-0 bg-[#0a0a0a] z-0 hidden md:block" style={{ height: BLACK_HEIGHT_DESKTOP }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 pt-14 md:pt-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Headline / CTA */}
          <div className="w-full md:w-[30%]">
            <div className="flex items-start gap-4">
              <span className="block w-[3px] h-[72px] md:h-[88px] bg-[#b61f9f]" />
              <div className="leading-[1.0]">
                <div className="text-[28px] md:text-[36px] font-light text-white">OUR</div>
                <div className="text-[28px] md:text-[36px] font-light text-white">FACULTY</div>
              </div>
            </div>
            <a
              href="/FacultyDirectoryPage"
              className="mt-4 inline-block bg-[#b61f9f] hover:bg-[#9c1988] px-5 py-2 text-[12px] font-semibold uppercase tracking-wide text-white rounded-[2px]"
            >
              MEET OUR FACULTY
            </a>
          </div>

          {/* Cards */}
          <div className="w-full md:flex-1 md:pr-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-8">
              {facultyData.map((f) => {
                const conf = isLgUp ? f.desktop : isMdUp ? f.tablet : f.mobile;
                return (
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
                    conf={conf}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* No extra spacer to avoid wasted gap */}
    </section>
  );
}