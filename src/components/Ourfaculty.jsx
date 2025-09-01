import React from 'react';
import ourfaculty1 from "../assets/Images/ourfaculty1.png";
import ourfaculty2 from "../assets/Images/ourfaculty2.png";
import ourfaculty3 from "../assets/Images/ourfaculty3.png";

const BLACK_HEIGHT_DESKTOP = 320;
// A sensible height for the black background on mobile
const BLACK_HEIGHT_MOBILE = 240;


const SHADE_DEFAULT = {
  attachTo: "below",
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
    conf: {
      frameWidthPct: "100%",
      frameHeight: 118,
      frameBottom: 19,
      iconSize: 36,
      cardOffsetY: 0,
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
    conf: {
      frameWidthPct: "100%",
      frameHeight: 118,
      frameBottom: 19,
      iconSize: 36,
      cardOffsetY: 0,
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
    conf: {
      frameWidthPct: "100%",
      frameHeight: 118,
      frameBottom: 19,
      iconSize: 36,
      cardOffsetY: 0,
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
      band: { ...BAND_DEFAULT, enabled: false },
      shade: { widthPct: "110%", heightPx: 140, gapPx: 132 },
    },
  },
];

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const IconFilm = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6zM7 6.5A1.5 1.5 0 1 0 7 9a1.5 1.5 0 0 0 0-2.5zm10 0A1.5 1.5 0 1 0 17 9a1.5 1.5 0 0 0 0-2.5zM7 16.5A1.5 1.5 0 1 0 7 19a1.5 1.5 0 0 0 0-2.5zm10 0A1.5 1.5 0 1 0 17 19a1.5 1.5 0 0 0 0-2.5z" />
  </svg>
);
const IconCamera = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M9 7l1.5-2h3L15 7h3a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h3zm3 3.5A4.5 4.5 0 1 0 16.5 15 4.5 4.5 0 0 0 12 10.5zm0 2A2.5 2.5 0 1 1 9.5 15 2.5 2.5 0 0 1 12 12.5z" />
  </svg>
);
const IconMasks = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M3 4h8v6a4 4 0 0 1-8 0V4zm10 0h8v8a4 4 0 0 1-8 0V4zM6.5 7A1.5 1.5 0 1 0 8 8.5 1.5 1.5 0 0 0 6.5 7zm4 0A1.5 1.5 0 1 0 12 8.5 1.5 1.5 0 0 0 10.5 7zm5 2A1.5 1.5 0 1 0 17 10.5 1.5 1.5 0 0 0 15.5 9zm4 0A1.5 1.5 0 1 0 21 10.5 1.5 1.5 0 0 0 19.5 9z" />
  </svg>
);

const SplitIcon = ({ kind, color, size = 28 }) => {
  const Icon = kind === "film" ? IconFilm : kind === "camera" ? IconCamera : IconMasks;
  return (
    <div className="pointer-events-none" style={{ color, lineHeight: 0 }} aria-hidden="true">
      <Icon size={size} />
    </div>
  );
};

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

  const imgScale = conf?.imageScale ?? imageScale ?? 1;
  const imgTX = conf?.imageTX ?? imageTX ?? 0;
  const imgTY = conf?.imageTY ?? imageTY ?? 0;

  const frameTransform = tCenterX(conf?.frameTX || 0, conf?.frameTY || 0, conf?.frameScale || 1);
  const shadeTransform = tCenterX(conf?.shadeTX || 0, conf?.shadeTY || 0, conf?.shadeScale || 1);

  const spill = Math.max(0, -(conf?.frameBottom || 0));
  const shadeSpill = S.attachTo === "below" ? Math.max(0, (S.heightPx || 0) - (S.gapPx || 0)) : 0;
  const autoReserveBottom = spill + shadeSpill + 8;
  const reserveBottom = conf?.reserveBottom !== undefined ? conf.reserveBottom : autoReserveBottom;

  return (
    <div
      className="relative w-full overflow-visible pt-36"
      style={{
        marginTop: conf?.cardOffsetY || 0,
        marginBottom: reserveBottom,
      }}
    >
      <div className={`relative w-full ${overflowClass} z-[1]`} style={{...aspectStyle}}>
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
          <span className="absolute left-0 right-0 bottom-0 h-[4px]" style={{ backgroundColor: color }} />
          <span className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: color }} />
          <span className="absolute right-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: color }} />
          <span className="absolute left-0 top-0 h-[4px] w-[36%]" style={{ backgroundColor: color }} />
          <span className="absolute right-0 top-0 h-[4px] w-[36%]" style={{ backgroundColor: color }} />

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

const OurFaculty = () => {
  return (
    <section className="relative bg-white">
      {/* Black background for the top section */}
      <div className="absolute top-0 left-0 right-0 bg-black z-0 h-[240px] md:h-[320px]" />

       {/* Main content container with responsive padding */}
      <div className="relative z-10 max-w-[1280px]  px-5 sm:px-8 lg:px-16 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column: Title and Button */}
          <div className="  md:w-[30%] -mr-10">
            <div className="flex  items-start gap-6">
              <span className="block w-[5px] h-[72px] md:h-[88px] bg-[#b61f9f]" />
              <div className="leading-[1.0]">
                <div className="text-[32px] md:text-[36px] font-light text-white">OUR</div>
                <div className="text-[32px] md:text-[36px] font-light text-white">FACULTY</div>
              </div>
            </div>
            <a
              href="/FacultyDirectoryPage"
              className="mt-7 ml-7 inline-block bg-pink-500 hover:bg-white px-5 py-3 text-[14px] font-semibold uppercase tracking-wide text-white hover:text-pink-500 "
            >
              MEET OUR FACULTY
            </a>
          </div>

          {/* Right Column: Faculty Cards */}
          <div className="flex-2 md:pr-1 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {facultyData.map((f) => {
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
                    conf={f.conf}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFaculty;