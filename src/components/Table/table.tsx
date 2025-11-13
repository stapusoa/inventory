import { forwardRef } from "react";
import classNames from "classnames";
import type { TableProps } from "./types";

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ 
      columns,
      data,
      multiSelect = false,
      onRowClick,
      className,
      fullWidth = true,
      variant = "expanded"
  }, ref) => {

  // ✅ Define column width classes
  const widthClasses: Record<string, string> = {
    small: "w-1/12",
    medium: "w-2/12",
    large: "w-3/12",
    xlarge: "w-4/12",
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg border font-sfpro">
      <table
        ref={ref}
        className={classNames(
          "border-collapse table-fixed",
          fullWidth && "w-full",
          className
        )}
      >
        {/* 🔹 Table Head */}
        <thead className={classNames(
          "border-1 border-t-solid border-grey-50 text-grey-400 uppercase",
          variant === "compact" ? "text-4" : "text-3 leading-4"
        )}>
          <tr className="pt-4">
            {multiSelect && <th className="px-3 py-4 text-left font-400 tracking-wider cursor-pointer">Select</th>}
            {columns.map((col) => (
              <th
                key={col.key}
                className={classNames(
                  "px-3 py-4 text-left font-400 tracking-wider",
                  widthClasses[col.width || "medium"], // ✅ Ensure default width
                  col.align === "center" && "text-center",
                  col.align === "right" && "text-right"
                )}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* 🔹 Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 pl-2.5 font-400 leading-6 transition-colors cursor-pointer last:border-b-0"
              onClick={() => onRowClick?.(row)}
            >
              {multiSelect && (
                <td className="px-3 py-4 text-center">
                  <input type="checkbox" />
                </td>
              )}
              {columns.map((col, colIndex) => (
                <td
                  key={`${col.key}-${colIndex}`} // ✅ Ensure a unique key
                  className={classNames(
                    "px-3 py-4 text-center text-grey-800",
                    widthClasses[col.width || "medium"],
                    col.align === "center" && "text-center",
                    col.align === "right" && "text-right"
                  )}
                >
                  {/* ✅ Ensure col.key exists before accessing row[col.key] */}
                  {col.key
                    ? col.colType === "currency"
                      ? `$${row[col.key]?.toFixed(2)}`
                      : row[col.key] ?? "-"
                    : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

Table.displayName = "Table";