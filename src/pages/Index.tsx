
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/index";
import Sidebar from "../components/Sidebar";
import { Input } from "../components/Input"
import {

  Plus,
  Download,
  RotateCcw,
  Trash2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

import { Icon } from '../components/Icon'

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


  const handleRowClick = (partNumber: string) => {
    navigate(`/part/${partNumber}`);
  };

  const [selected, setSelected] = useState("Select an option");


  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="transition-all duration-300 ml-20 lg:ml-64">
        <main className="p-8">
          <div className="flex items-center gap-4 mb-3 justify-between">
            <div className="relative flex items-center justify-center w-full">
              <Input
                className="flex flex-row items-center justify-center"
                type="text"
                fullWidth={true}
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                inputSize="medium" // ✅ Now uses `inputSize`
                onKeyDown={(e) => {
                  if (e.key === "Enter") console.log("Searching for:", searchQuery);
                }}
                startIcon={<Icon size="small" name="search" />}
                endIcon={
                  searchQuery && (
                    <Button size="small" iconButton={true} className="flex bg-transparent border-0 items-center justify-center bg-transparent border-0" onClick={() => setSearchQuery("")}>
                      <Icon size="small" name="xmark" />
                    </Button>
                  )
                }
              />
            </div>
            <div className="flex items-center justify-center">
              <Button size="small" iconButton={true} className="bg-transparent flex items-center justify-center border-0">
                <Icon name="filter" size="medium" />
              </Button>
            </div>
          </div>
          <div className="mb-4 mt-1 flex items-center justify-between">
            <div className="flex items-center gap-3 justify-center">
              <Button size="small" iconButton={true} className="flex items-center justify-center bg-transparent border-0">
                <Icon name="sortDown" size="medium" />
              </Button>
              <Input
                className="flex flex-row items-center color-grey-500 justify-center"
                type="dropdown"
                fullWidth={false}
                placeholder="Name"
                value={selected}
                inputSize="small" // ✅ Now uses `inputSize`
                endIcon={<Icon size="small" name="chevronDown" />}
                options={["Option 1", "Option 2", "Option 3"]}
                onSelect={(val) => setSelected(val)}
              />
            </div>
            <Button size="medium" iconButton={false} className="btn-primary gap-2 flex items-center justify-center border-0">
              <Icon name="add" size="small" />
              Button
            </Button>
          </div>

          <div className="bg-white rounded-lg border overflow-x-auto">
            <table className="w-full border-collapse table-fixed font-sfpro">
              <thead className="border-1 border-t-solid border-grey-50">
                <tr className="pt-4 text-3 leading-4 uppercase text-grey-400">
                  <th className="pl-0 pr-2 pb-4 pt-4 w-1/16 text-center font-400 tracking-wider">
                    Status
                  </th>
                  <th className="px-0 pb-4 pt-4 w-3/16 text-left font-400 tracking-wider">
                    Part Number
                  </th>
                  <th className="px-0 pb-4 pt-4 w-6/16 text-left font-400 tracking-wider">
                    Description
                  </th>
                  <th className="px-0 pb-4 pt-4 w-2/16 text-left font-400 tracking-wider">
                    Modified
                  </th>
                  <th className="px-0 pb-4 pt-4 w-2/16 text-left font-400 tracking-wider">
                    QTY
                  </th>
                  <th className="px-0 pb-4 pt-4 w-2/16 text-left font-400 tracking-wider">
                    Total Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {initialInventory.map((item) => (
                  <tr
                    key={item.partNumber}
                    className="hover:bg-gray-50 pl-2.5 font-400 leading-6 transition-colors cursor-pointer"
                    onClick={() => handleRowClick(item.partNumber)}
                  >
                    <td className="w-1/16 pl-0 pr-2 py-4 text-center text-grey-600 text-4.25">
                      {item.status === "error" ? (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      ) : (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      )}
                    </td>
                    <td className="w-3/16 px-0 py-4 text-left text-grey-800 text-5">{item.partNumber}</td>
                    <td className="w-6/16 px-0 py-4 text-left text-grey-600 text-4.25">{item.description}</td>
                    <td className="w-2/16 px-0 py-4 text-left text-grey-600 text-4.25">{item.modified}</td>
                    <td className="w-2/16 px-0 py-4 text-left text-grey-600 text-4.25">{item.qty}</td>
                    <td className="w-2/16 px-0 py-4 text-left text-grey-600 text-4.25">
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


