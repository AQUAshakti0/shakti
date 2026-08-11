import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components & Spare Parts — RO Membranes, Pumps, Vessels & Gauges",
  description:
    "Genuine Water Treatment Spare Parts: RO Membranes, Pressure Gauges, Membrane Housings, Cartridge Housings, Rotameters, Panel Boards, Dosing Pumps, and Valves by Aqua Shakti Industries.",
  alternates: { canonical: "/products/spare-parts" },
};

export default function SparePartsPage() {
  const parts = [
    {
      name: "Pressure Gauge",
      image: "/spares/pressure-gauge.png",
      desc: "SS Body Glycerin Filled Pressure Gauges (0-7 bar & 0-28 bar) with clear dial indicator scale for RO water plants.",
    },
    {
      name: "RO Membrane Housing",
      image: "/spares/membrane-housing.png",
      desc: "FRP & SS304 Membrane Pressure Vessels for 4040 and 8040 high-rejection reverse osmosis membranes.",
    },
    {
      name: "Cartridge Filter Housing",
      image: "/spares/cartridge-housing.png",
      desc: "SS & Polypropylene Jumbo Filter Housings with 5 to 20 micron spun sediment filter cartridges.",
    },
    {
      name: "Rotameter (Flow Meter)",
      image: "/spares/rotameter.png",
      desc: "Acrylic Body Inline & Panel Mount Water Flow Meters with LPH / GPM volumetric flow measurement scale.",
    },
    {
      name: "Electrical Panel Board",
      image: "/spares/panel-board.png",
      desc: "Automatic RO Controller Panel with Level Switches, Digital Display & Dry Run Pump Protection.",
    },
    {
      name: "Water Level Sensor",
      image: "/spares/level-sensor.png",
      desc: "Stainless Steel Float Switches & Electronic Conductivity Level Controllers for overhead water tanks.",
    },
    {
      name: "Dosing Pump",
      image: "/spares/dosing-pump.png",
      desc: "Electronic Diaphragm Metering Dosing Pumps (0-6 LPH) with stroke frequency control for antiscalant chemical dosing.",
    },
    {
      name: "Multi-Port Valve",
      image: "/spares/multiport-valve.png",
      desc: "Manual & Automatic Top/Side Mount Multiport Valves for Sand Filter, Activated Carbon & Softener vessels.",
    },
  ];

  return (
    <div className="page-content">
      <h1 className="page-title">Components &amp; Spare Parts</h1>
      <p className="page-intro">
        Aqua Shakti Industries stocks a complete inventory of genuine water treatment components and spare parts. We supply high-quality replacement spares for RO plants, STP/ETP units, softeners, and DM plants across Gujarat and India.
      </p>

      <h2 className="section-heading">Featured Spare Parts &amp; Accessories</h2>
      <div className="parts-grid large-cards" style={{ marginBottom: "50px" }}>
        {parts.map((part, idx) => (
          <div className="part-card" key={idx}>
            <div className="part-card-img" style={{ height: "200px", background: "#f8fafc", position: "relative" }}>
              <img src={part.image} alt={part.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="part-card-label" style={{ padding: "16px", textAlign: "left" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a5fb4", marginBottom: "6px" }}>
                {part.name}
              </h3>
              <p style={{ fontSize: "12.5px", color: "#1a1a1a", lineHeight: 1.5, margin: 0 }}>
                {part.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-heading">Spares Compatibility</h2>
      <table>
        <thead>
          <tr>
            <th>Spare Category</th>
            <th>Available Brands / Makes</th>
            <th>Sizes / Standards</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RO Membranes</td>
            <td>Dow Filmtec, Hydranautics, Toray, Vontron</td>
            <td>4040, 8040 High Rejection</td>
          </tr>
          <tr>
            <td>High Pressure Pumps</td>
            <td>Grundfos, CNP, Shakti, Lubi</td>
            <td>SS Vertical Multistage</td>
          </tr>
          <tr>
            <td>FRP Pressure Vessels</td>
            <td>Pentair, Structural, Wave Cyber</td>
            <td>0844 to 6386 Sizes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
