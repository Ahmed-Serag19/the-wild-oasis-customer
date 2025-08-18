import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src={logo}
        alt="Logo"
        height="60"
        width="60"
        className="rounded-full"
      />
      <span className="text-2xl font-bold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
