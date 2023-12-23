import Link from "next/link";

function NavLink({ url: url, label: label }: { url: string; label: string }) {
  return (
    <Link
      href={url}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {label}
    </Link>
  );
}

export default NavLink;
