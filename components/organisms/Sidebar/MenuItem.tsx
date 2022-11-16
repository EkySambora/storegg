import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  title: string;
  icon:
    | "menu-overview"
    | "menu-transaction"
    | "menu-message"
    | "menu-card"
    | "menu-rewards"
    | "menu-settings"
    | "menu-logout";
  active?: boolean;
  href: string;
}
const MenuItem: React.FC<Props> = (props) => {
  const { title, icon, active, href } = props;

  return (
    <div
      className={cx({
        item: true,
        "mb-30": true,
        active: active,
      })}
    >
      <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      <div className="me-3"></div>
      <p className="item-title m-0">
        <Link href={href}>
          <a href="" className="text-lg text-decoration-none">
            {title}
          </a>
        </Link>
      </p>
    </div>
  );
};

export default MenuItem;
