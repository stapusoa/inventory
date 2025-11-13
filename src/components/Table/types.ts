import { ReactNode } from "react";
import type { ColAlign, ColType, ColWidth, TableVariant } from "./tableConstants";

export interface TableColumn {
  key: string;
  label: string;
  width?: ColWidth;
  align?: ColAlign;
  colType?: ColType;
  isDisabled?: boolean;
  error?: boolean | string;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  multiSelect?: boolean;
  onRowClick?: (rowData: any) => void;
  className?: string;
  fullWidth?: boolean;
  variant?: TableVariant;
  placeholder?: string;
}
