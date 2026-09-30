import { createFileRoute } from "@tanstack/react-router";
import v03Css from "@/components/v03/v03.css?url";
import { V03Home } from "@/components/v03/V03Home";

export const Route = createFileRoute("/reference-ora")({
  head: () => ({
    meta: [
      { title: "BARCODE Living | Interior design in Dubai" },
      {
        name: "description",
        content:
          "BARCODE Living designs apartments, holiday homes and short-stay properties in Dubai with a fashion eye and a designer's discipline.",
      },
    ],
    links: [{ rel: "stylesheet", href: v03Css }],
  }),
  component: V03Home,
});
