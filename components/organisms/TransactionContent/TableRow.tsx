import Link from "next/link";
import React from "react";
import cx from "classnames";

interface TableRowProps {
  title: string;
  image: string;
  category: string;
  item: number;
  price: number;
  status: "Pending" | "Success" | "Failed";
}

function TableRow(props: TableRowProps) {
  const { image, title, category, item, price, status } = props;
  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">Rp {price}</p>
      </td>
      <td>
        <div>
          <span
            className={cx("float-start icon-status", {
              success: status === "Success",
              failed: status === "Failed",
              pending: status === "Pending",
            })}
          ></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link href="/member/transaction/detail">
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
}

export default TableRow;
