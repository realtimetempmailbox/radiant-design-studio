import { Link } from "@tanstack/react-router";

export default function ServicesIndex() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Our Services</h1>
      <ul>
        <li><Link to="/services/carpet-cleaning">Carpet Cleaning</Link></li>
        <li><Link to="/services/vacate-cleaning">Vacate Cleaning</Link></li>
        <li><Link to="/services/tile-grout-cleaning">Tile & Grout Cleaning</Link></li>
        <li><Link to="/services/rug-cleaning">Rug Cleaning</Link></li>
        <li><Link to="/services/upholstery-cleaning">Upholstery Cleaning</Link></li>
        <li><Link to="/services/window-cleaning">Window Cleaning</Link></li>
      </ul>
    </div>
  );
}
