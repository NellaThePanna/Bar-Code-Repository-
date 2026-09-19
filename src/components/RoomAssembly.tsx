import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

import emptyRoom from "@/assets/assembly-empty-room.jpg";
import sofa from "@/assets/assembly-sofa.png";
import rug from "@/assets/assembly-rug.png";
import table from "@/assets/assembly-table.png";
import plant from "@/assets/assembly-plant.png";
import art from "@/assets/assembly-art.png";
import lamp from "@/assets/assembly-lamp.png";

const pieces = [
  { name: "Rug", src: rug, className: "left-[19%] bottom-[1%] z-[1] w-[61%]", delay: "0ms" },
  { name: "Wall art", src: art, className: "left-[46%] top-[11%] z-[2] w-[12%]", delay: "190ms" },
  { name: "Sofa", src: sofa, className: "left-[25%] bottom-[10%] z-[3] w-[54%]", delay: "380ms" },
  { name: "Plant", src: plant, className: "left-[8%] bottom-[7%] z-[4] w-[15%]", delay: "570ms" },
  { name: "Floor lamp", src: lamp, className: "right-[9%] bottom-[8%] z-[4] w-[11%]", delay: "760ms" },
  { name: "Coffee table", src: table, className: "left-[40%] bottom-[1%] z-[5] w-[22%]", delay: "950ms" },
];

export function RoomAssembly() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.38 });

  return (
    <section className="px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1480px]">
        <RevealHeading />

        <div ref={ref} className="mt-14 md:mt-20">
          <div
            className="relative aspect-video w-full overflow-hidden bg-muted"
            role="img"
            aria-label="An empty living room filling with a rug, art, sofa, plant, lamp, and coffee table"
          >
            <img
              src={emptyRoom}
              alt="Empty warm minimalist living room"
              loading="lazy"
              width={1536}
              height={864}
              className="photo-grade absolute inset-0 h-full w-full object-cover"
            />
            {pieces.map((piece) => (
              <img
                key={piece.name}
                src={piece.src}
                alt=""
                aria-hidden
                loading="lazy"
                className={cn("assembly-piece absolute h-auto", piece.className, inView && "is-assembled")}
                style={{ animationDelay: piece.delay }}
              />
            ))}
            <div className="absolute right-3 bottom-3 z-10 bg-background px-3 py-1.5 sm:right-5 sm:bottom-5">
              <span className="eyebrow">Concept assembly · 01—06</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <p className="eyebrow">From empty room to lived-in space</p>
            <p className="eyebrow opacity-60">Motion study</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RevealHeading() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("reveal", inView && "is-visible")}>
      <p className="eyebrow">[ A Room, Assembled ]</p>
      <h2 className="font-display mt-6 max-w-3xl text-3xl leading-[1.1] font-bold tracking-tight md:text-5xl">
        Watch the room find its rhythm, one piece at a time.
      </h2>
    </div>
  );
}