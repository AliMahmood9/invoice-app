import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg";

export const Header: React.FC = () => (
  <header className={styles.header}>
    <img src={Logo} alt="logo" />
  </header>
);
