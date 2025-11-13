
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Icon, Select, Table, TableColumn } from "../components/index";
import Sidebar from "../components/Sidebar";
import {
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const initialInventory = [
  {
    status: "error",
    partNumber: "AS100",
    description: "Bike Assembly",
    modified: "03/31/2021",
    qty: 0,
    totalCost: 559.05,
  },
  {
    status: "success",
    partNumber: "B101",
    description: "Discount Brake Cables",
    modified: "03/31/2021",
    qty: 77,
    totalCost: 106.38,
  },
  {
    status: "success",
    partNumber: "B200",
    description: "Heavy Duty Brake Cables",
    modified: "05/28/2021",
    qty: 10,
    totalCost: 27.5,
  },
];

// ✅ Table column definitions
const columns: TableColumn[] = [
  { key: "status", label: "Status", colType: "status", width: "small", align: "center" },
  { key: "partNumber", label: "Part Number", colType: "text", width: "medium", align: "left" },
  { key: "description", label: "Description", colType: "text", width: "large", align: "left" },
  { key: "modified", label: "Modified", colType: "date", width: "medium", align: "left" },
  { key: "qty", label: "QTY", colType: "qty", width: "small", align: "right" },
  { key: "totalCost", label: "Total Cost", colType: "currency", width: "medium", align: "right" },
];

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColumn, setSelectedColumn] = useState<string>("All");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleRowClick = (row: any) => {
    navigate(`/part/${row.partNumber}`);
  };

  // ✅ Filter Data by Search Query and Selected Column
  const filteredData = initialInventory.filter((item) => {
    if (!searchQuery) return true;
    if (selectedColumn === "All") {
      return Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return (
      item[selectedColumn as keyof typeof item]
        ?.toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ?? false
    );
  });

  // ✅ Sort Data by Selected Column
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const valueA = a[sortColumn as keyof typeof a];
    const valueB = b[sortColumn as keyof typeof b];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    } else {
      return sortOrder === "asc"
        ? valueA.toString().localeCompare(valueB.toString())
        : valueB.toString().localeCompare(valueA.toString());
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="transition-all duration-300 ml-20 lg:ml-64">
        <main className="p-8">
          {/* 🔹 Search and Filter Row */}
          <div className="flex items-center gap-4 mb-3 justify-between">
            <div className="relative flex items-center justify-center w-full">
              <Input
                type="text"
                fullWidth={true}
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                inputSize="medium"
                startIcon={<Icon size="small" name="search" />}
                endIcon={
                  searchQuery && (
                    <Button
                      size="small"
                      iconButton={true}
                      className="bg-transparent border-0"
                      onClick={() => setSearchQuery("")}
                    >
                      <Icon size="small" name="xmark" />
                    </Button>
                  )
                }
              />
            </div>
            <div className="flex items-center justify-center">
              <Button size="small" iconButton={true} className="btn-ghost">
                <Icon name="filter" size="medium" />
              </Button>
            </div>
          </div>

          {/* 🔹 Sort and Column Filter */}
          <div className="mb-4 mt-1 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Sort Button */}
              <Button
                size="small"
                iconButton={true}
                className="bg-transparent color-grey-400 border-0 flex items-center justify-center"
                onClick={() => {
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                }}
              >
                {sortOrder === "asc" ? <Icon name="sortUp" size="medium" /> : <Icon name="sortDown" size="medium" />}
              </Button>

              {/* Column Selector */}
              <Select
                placeholder="Filter by Column"
                options={["All", ...columns.map((col) => col.key)]}
                value={selectedColumn}
                size="small"
                onSelect={(val) => setSelectedColumn(val)}
              />
            </div>
            <Button size="medium" iconButton={false} className="btn-primary">
              <Icon name="add" size="small" />
              Button
            </Button>
          </div>

          {/* 🔹 Table Component */}
          <Table
            columns={columns}
            data={sortedData}
            onRowClick={handleRowClick}
            fullWidth={true}
            variant="expanded"
          />
        </main>
      </div>
    </div>
  );
};

export default Index;