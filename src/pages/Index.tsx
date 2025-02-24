
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import Sidebar from "../components/Sidebar";
import {
  Search,
  Plus,
  Download,
  RotateCcw,
  Trash2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface InventoryItem {
  status: "error" | "success";
  partNumber: string;
  description: string;
  modified: string;
  qty: number;
  totalCost: number;
}

const initialInventory: InventoryItem[] = [
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
    totalCost: 27.50,
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof InventoryItem | "">("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (field: keyof InventoryItem) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleRowClick = (partNumber: string) => {
    navigate(`/part/${partNumber}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="transition-all duration-300 ml-20 lg:ml-64">
        <main className="p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Plus className="h-4 w-4 mr-2" />
                New Part
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Part Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Modified
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    QTY
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {initialInventory.map((item) => (
                  <tr
                    key={item.partNumber}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleRowClick(item.partNumber)}
                  >
                    <td className="px-6 py-4">
                      {item.status === "error" ? (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      ) : (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      )}
                    </td>
                    <td className="px-6 py-4">{item.partNumber}</td>
                    <td className="px-6 py-4">{item.description}</td>
                    <td className="px-6 py-4">{item.modified}</td>
                    <td className="px-6 py-4">{item.qty}</td>
                    <td className="px-6 py-4">
                      ${item.totalCost.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
