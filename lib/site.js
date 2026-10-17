export const EMAIL = "linedesignerboards@gmail.com";

export const PHONES = [
  { display: "95050 21007", tel: "+919505021007" },
  { display: "83286 07857", tel: "+918328607857" },
];

export const ADDRESS = [
  "Beside Neha Suiting & Shirting, Opp. MRM Stone",
  "Gaganpahad, Shamshabad Road",
  "Hyderabad, Rangareddy, Telangana",
];

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Beside%20Neha%20Suiting%20and%20Shirting%20Opp%20MRM%20Stone%20Gaganpahad%20Shamshabad%20Road%20Hyderabad";

export const WHATSAPP_URL =
  "https://wa.me/919505021007?text=Hello%20LINE%20Designer%20Boards%2C%20I%20would%20like%20to%20enquire%20about%20a%20cut.";

export const NAV = [
  { href: "#craft", label: "Craft" },
  { href: "#materials", label: "Materials" },
  { href: "#work", label: "Work" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

export const MARQUEE =
  "MDF    ·    PVC    ·    ACP    ·    Acrylic    ·    Teak wood    ·    Plywood    ·    Mild steel    ·    Stainless steel    ·    Corian    ·    Sandstone    ·    ";

export const STATS = [
  { value: "10", label: "Materials in the shop" },
  { value: "2", label: "Router and laser" },
  { value: "1", label: "Architect-led studio" },
];

export const CRAFT = [
  {
    index: "01",
    title: "CNC routing",
    copy: "Profiles, grooves, pockets, and repeatable cuts through wood, board, and composite. The spindle follows the file.",
    image: "/images/hero-cnc-teak.jpg",
    alt: "Close view of a router bit carving a curve in teak",
    reverse: false,
  },
  {
    index: "02",
    title: "Laser cutting",
    copy: "A fine beam for acrylic, letters, patterns, and edges that need to stay sharp. Detail work, without the wander of a hand tool.",
    image: "/images/laser-acrylic.jpg",
    alt: "A laser cutting a geometric pattern into clear acrylic",
    reverse: true,
  },
  {
    index: "03",
    title: "Carving",
    copy: "Relief and flute in teak, and cut detail in stone. The grain stays. The depth is deliberate.",
    image: "/images/carved-teak.jpg",
    alt: "Fluted teak carving with a soft side light on the grain",
    reverse: false,
  },
];

export const MATERIALS = [
  { no: "01", value: "MDF", name: "MDF", note: "Fibreboard for routed panels, grooves, and paint-ready faces.", image: "/images/material-boards.jpg" },
  { no: "02", value: "PVC", name: "PVC", note: "Sheet for shutters, signage, and moisture-steady interiors.", image: "/images/pvc-acrylic-color.jpg" },
  { no: "03", value: "ACP", name: "ACP", note: "Aluminium composite for facades, shopfronts, and folded edges.", image: "/images/acp-facade.jpg" },
  { no: "04", value: "Acrylic", name: "Acrylic", note: "Clear and coloured sheet for letters, light, and laser detail.", image: "/images/laser-acrylic.jpg" },
  { no: "05", value: "Teak wood", name: "Teak wood", note: "Solid teak for carving, furniture parts, and feature grain.", image: "/images/carved-teak.jpg" },
  { no: "06", value: "Plywood", name: "Plywood", note: "Layered board for joinery, finished edges, and structural cuts.", image: "/images/plywood-edge.jpg" },
  { no: "07", value: "Mild steel", name: "MS", note: "Mild steel for frames, brackets, and cut profiles.", image: "/images/metal-cut.jpg" },
  { no: "08", value: "Stainless steel", name: "SS", note: "Stainless steel, slotted and finished for visible metalwork.", image: "/images/metal-cut.jpg" },
  { no: "09", value: "Corian", name: "Corian", note: "Solid surface for crisp edges, grooves, and counter details.", image: "/images/stone-corian.jpg" },
  { no: "10", value: "Sandstone", name: "Sand stone", note: "Stone cut and carved for architectural detail.", image: "/images/stone-corian.jpg" },
];

export const WORK = [
  { title: "Folded skin", meta: "ACP", image: "/images/acp-facade.jpg", alt: "Folded champagne aluminium composite panels", delay: "0ms" },
  { title: "Cut edge", meta: "Corian & sandstone", image: "/images/stone-corian.jpg", alt: "A Corian slab beside sandstone, both with a cut edge", delay: "70ms" },
  { title: "Slotted metal", meta: "SS & MS", image: "/images/metal-cut.jpg", alt: "Brushed stainless steel and matte mild steel parts with slotted cuts", delay: "140ms" },
  { title: "Layered edge", meta: "Plywood", image: "/images/plywood-edge.jpg", alt: "Macro of a cleanly cut birch plywood edge", delay: "0ms" },
  { title: "Sheet colour", meta: "PVC & acrylic", image: "/images/pvc-acrylic-color.jpg", alt: "A fan of ivory, charcoal, amber, and clear PVC and acrylic sheets", delay: "70ms" },
  { title: "Relief", meta: "Teak carving", image: "/images/carved-teak.jpg", alt: "Carved teak flutes catching warm light", delay: "140ms" },
];

export const STEPS = [
  { index: "01", title: "The drawing", copy: "Send a file, a sketch, or a sample of the board you want matched.", delay: "0ms" },
  { index: "02", title: "The cut", copy: "Routing, laser, or carving in the material you name.", delay: "90ms" },
  { index: "03", title: "The board", copy: "Pieces leave the studio ready for the site.", delay: "180ms" },
];
