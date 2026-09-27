/**
 * Jagdish enterprise — Master Data Model
 * Ahmedabad, Gujarat, India
 */

export const COMPANY = {
  name: "Jagdish enterprise",
  tagline: "Laser cutting service & Engineering Works",
  established: 2008,
  yearsInOperation: "18+",
  proprietor: "Management Team & Works Director",
  gst: "24AAACG1092F1ZK",
  phoneDisplay: "+91 81414 99771",
  phoneRaw: "+918141499771",
  waNumber: "918141499771",
  email: "contact@jagdishenterprise.in",
  address: "Gate Number 2, SARDAR PATEL MUNICIPAL TIMBER MARKET, 9/A/2, LATI BAZAR, behind Gita Mandir, Lati bazar, Part - 3, Behrampura, Ahmedabad, Gujarat 380022, India",
  addressShort: "Ahmedabad, Gujarat",
  coordinates: "23.0225° N, 72.5714° E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "20+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "jagdish-enterprise-fiber-laser",
    "code": "FL-01",
    "name": "CNC Fiber Laser Cutting & Profile Processing",
    "category": "Laser Cutting",
    "spec": "Ultra-precise fiber laser cutting for stainless steel, mild steel, aluminum and brass sheets with micro-burr finish.",
    "specsList": [
      {
        "label": "Laser Power",
        "val": "1 kW to 12 kW Fiber Source"
      },
      {
        "label": "Bed Dimensions",
        "val": "1500 mm \u00d7 3000 mm / 2000 mm \u00d7 6000 mm"
      },
      {
        "label": "Cutting Thickness",
        "val": "0.5 mm up to 32 mm MS / 25 mm SS"
      },
      {
        "label": "Positioning Accuracy",
        "val": "\u00b1 0.03 mm Repeatability"
      }
    ],
    "price": "\u20b91,80,000",
    "priceUnit": "/ job lot"
  },
  {
    "id": "jagdish-enterprise-sheet-metal",
    "code": "SM-02",
    "name": "Precision CNC Sheet Metal Bending & Enclosures",
    "category": "Fabrication",
    "spec": "Multi-axis CNC press brake bending ensuring accurate angle consistency across heavy production batches.",
    "specsList": [
      {
        "label": "Bending Capacity",
        "val": "80 Ton to 300 Ton"
      },
      {
        "label": "Max Bend Length",
        "val": "Up to 4000 mm"
      },
      {
        "label": "Backgauge Precision",
        "val": "0.01 mm CNC Multi-Axis"
      },
      {
        "label": "Material Types",
        "val": "CRCA, SS 304/316, Galvanized, Aluminum"
      }
    ],
    "price": "\u20b945,000",
    "priceUnit": "/ project"
  },
  {
    "id": "jagdish-enterprise-welded-assembly",
    "code": "WA-03",
    "name": "Heavy Structural Metal Fabrication & Frames",
    "category": "Fabrication",
    "spec": "MIG/TIG certified industrial structural welding for machinery frames, chassis, and custom enclosures.",
    "specsList": [
      {
        "label": "Welding Standards",
        "val": "ASME Sec IX / AWS D1.1 Compliant"
      },
      {
        "label": "Surface Treatment",
        "val": "Grit Blasting & Epoxy Powder Coating"
      },
      {
        "label": "Testing",
        "val": "DPT / Ultrasonic NDT Inspection"
      },
      {
        "label": "Batch Volume",
        "val": "Prototypes to High-Volume Runs"
      }
    ],
    "price": "\u20b985,000",
    "priceUnit": "/ assembly"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}
