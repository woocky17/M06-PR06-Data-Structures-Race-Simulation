import { MdHome } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 50,
      }}
    >
      <div>
        <Link to="/">
          <MdHome size={24} color="#000" />
        </Link>
      </div>
      <ul
        style={{
          display: "flex",
          gap: 50,
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <NavLink
            to="/Crear-Circuito"
            style={({ isActive }) => ({
              color: isActive ? "#3B82F6" : "#4B5563",
              textDecoration: "none",
            })}
          >
            Crear Circuito
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Crear-Participantes"
            style={({ isActive }) => ({
              color: isActive ? "#3B82F6" : "#4B5563",
              textDecoration: "none",
            })}
          >
            Crear Participantes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Crear-Vehiculos"
            style={({ isActive }) => ({
              color: isActive ? "#3B82F6" : "#4B5563",
              textDecoration: "none",
            })}
          >
            Crear Vehiculos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
