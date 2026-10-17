import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "LINE Designer Boards — the designer's choice",
  description:
    "LINE Designer Boards is Ar. Sajjan’s CNC router and laser cutting studio in Gaganpahad, Hyderabad. Cutting and carving in MDF, PVC, ACP, acrylic, teak, plywood, mild steel, stainless steel, Corian, and sandstone.",
};

export const viewport = {
  themeColor: "#F5C400",
};

const business = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LINE Designer Boards",
  slogan: "the designer's choice",
  description: "CNC router and laser cutting studio specialising in cutting and carving.",
  email: "linedesignerboards@gmail.com",
  telephone: ["+919505021007", "+918328607857"],
  founder: { "@type": "Person", name: "Ar. Sajjan" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Beside Neha Suiting & Shirting, Opp. MRM Stone, Gaganpahad, Shamshabad Road",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`js ${montserrat.variable} ${outfit.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      </body>
    </html>
  );
}
