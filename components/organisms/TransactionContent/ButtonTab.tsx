import React from "react";
import cx from "classnames";
interface ButtonTabProps {
  title: string;
  active: boolean;
}
function ButtonTab(props: ButtonTabProps) {
  const { title, active } = props;
  return (
    <a
      data-filter="*"
      href="#"
      className={cx("btn btn-status rounded-pill text-sm me-3", {
        "btn-active": active,
      })}
    >
      {title}
    </a>
  );
}

export default ButtonTab;
