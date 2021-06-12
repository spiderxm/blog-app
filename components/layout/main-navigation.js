import Link from "next/link";
import Image from "next/image";
import classes from "./main-navigation.module.css";
function Navigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Image
            src="/logo.png"
            height={100}
            width={100}
            className={classes.logo}
          />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
