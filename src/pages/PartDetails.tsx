import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, MoreHorizontal, AlertCircle, CheckCircle2, Lock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Sidebar from "../components/Sidebar";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ label, isActive, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-medium transition-colors
      ${isActive ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:text-gray-900"}
    `}
  >
    {label}
  </button>
);

interface PartData {
  status: "ACTIVE" | "INACTIVE";
  description: string;
  unitsOfMeasure: string;
  poItemType: string;
  standardCost: number;
  created: string;
  dateIssued: string;
  vendor: string;
  buyer: string;
  committed: number;
  onHand: number;
  available: number;
  lotNumber: string;
  revisionLevel: string;
  expirationDate: string;
}

interface InventoryItem {
  status: "error" | "success";
  partNumber: string;
  description: string;
  modified: string;
  qty: number;
  totalCost: number;
}

const inventory: InventoryItem[] = [
  { status: "error", partNumber: "AS100", description: "Bike Assembly", modified: "03/31/2021", qty: 0, totalCost: 559.05 },
  { status: "success", partNumber: "B101", description: "Discount Brake Cables", modified: "03/31/2021", qty: 77, totalCost: 106.38 },
  { status: "success", partNumber: "B200", description: "Heavy Duty Brake Cables", modified: "05/28/2021", qty: 10, totalCost: 27.50 },
];

const PartDetails = () => {
  const { partNumber } = useParams();
  const [activeTab, setActiveTab] = useState("General Info");
  const [isEditing, setIsEditing] = useState(false);
  const [partData, setPartData] = useState<PartData>({
    status: "INACTIVE",
    description: "Bike Assembly",
    unitsOfMeasure: "Each",
    poItemType: "Purchase",
    standardCost: 9.34,
    created: "10/29/2020",
    dateIssued: "10/29/2020",
    vendor: "Brent's Bicycle Brakes",
    buyer: "Kelly Jacobsen",
    committed: 10,
    onHand: 10,
    available: 10,
    lotNumber: "1000",
    revisionLevel: "A01",
    expirationDate: "08/24/2028"
  });

  const handleInputChange = (field: keyof PartData, value: string | number) => {
    setPartData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderReadOnlyField = (label: string, value: string | number) => (
    <div>
      <h4 className="text-sm font-medium text-gray-500 mb-1">{label}:</h4>
      <p>{value}</p>
    </div>
  );

  const renderEditableField = (label: string, field: keyof PartData, value: string | number) => (
    <div>
      <h4 className="text-sm font-medium text-gray-500 mb-1">{label}:</h4>
      <Input
        value={value}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className="max-w-[200px]"
      />
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "BOM":
        return (
          <div className="bg-white rounded-lg border p-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg text-gray-600 mb-4">FINISHED GOODS</h2>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl text-left font-medium">TB-1000</h3>
                      <p className="text-gray-500 text-left">Value Touring Bike</p>
                    </div>
                    <div className="flex items-center gap-8">
                      <div>
                        <p className="text-sm text-left text-gray-500">QTY:</p>
                        <p className="text-left">12 EA</p>
                      </div>
                      <p className="text-green-500">ACTIVE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg text-gray-600 mb-4">RAW GOODS</h2>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-medium">BP100</h3>
                      <p className="text-gray-500">Quality Brake Pads</p>
                    </div>
                    <div className="flex items-center gap-8">
                      <div>
                        <p className="text-sm text-gray-500">QTY:</p>
                        <p>12 EA</p>
                      </div>
                      <p className="text-green-500">ACTIVE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Locations":
        return (
          <div className="bg-white rounded-lg border p-8">
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium">Shipping</h3>
                    <p className="text-gray-500">Staging area for shipping.</p>
                  </div>
                  <div className="grid grid-cols-4 gap-8">
                    <div>
                      <p className="text-sm text-gray-500">NUMBER:</p>
                      <p>4</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">GROUP:</p>
                      <p>ANNAPOLIS</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">ON-HAND:</p>
                      <p>48 EA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LOT NUMBER:</p>
                      <p>008</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">COMMITTED:</p>
                      <p>1 EA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WO NUMBER:</p>
                      <p>-</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Vendors":
        return (
          <div className="bg-white rounded-lg border p-8">
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-4 gap-8">
                  <div className="col-span-2">
                    <div>
                      <h3 className="text-xl font-medium">Brent's Bicycle Brakes</h3>
                      <p className="text-gray-500">B25-6676</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">LAST COST:</p>
                      <p>$6.00 EA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">USD LAST COST:</p>
                      <p>$6.00 EA</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">LAST DATE:</p>
                      <p>08/17/2021</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LEAD TIME:</p>
                      <p>125</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">DEFAULT:</p>
                      <p>YES</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">MIN QTY:</p>
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-4 gap-8">
                  <div className="col-span-2">
                    <div>
                      <h3 className="text-xl font-medium">Kevin's Cables</h3>
                      <p className="text-gray-500">B25-1901</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">LAST COST:</p>
                      <p>$7.50 EA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">USD LAST COST:</p>
                      <p>$7.50 EA</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">LAST DATE:</p>
                      <p>09/10/2021</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LEAD TIME:</p>
                      <p>18</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">DEFAULT:</p>
                      <p>NO</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">MIN QTY:</p>
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Tracking":
        return (
          <div className="bg-white rounded-lg border p-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-semibold mb-8">Other Tracking</h2>
                <div className="space-y-4">
                  {isEditing ? (
                    <>
                      {renderEditableField("LOT NUMBER", "lotNumber", partData.lotNumber)}
                      {renderEditableField("REVISION LEVEL", "revisionLevel", partData.revisionLevel)}
                      {renderEditableField("EXPIRATION DATE", "expirationDate", partData.expirationDate)}
                    </>
                  ) : (
                    <>
                      {renderReadOnlyField("LOT NUMBER", partData.lotNumber)}
                      {renderReadOnlyField("REVISION LEVEL", partData.revisionLevel)}
                      {renderReadOnlyField("EXPIRATION DATE", partData.expirationDate)}
                    </>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Serial Numbers</h2>
                  <Button variant="ghost" className="text-blue-500">
                    See More
                  </Button>
                </div>
                <ul className="space-y-3">
                  <li>0Z134B</li>
                  <li>0Z025T</li>
                  <li>0Z89JK</li>
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    0Z6V11
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "General Info":
        return (
          <div className="bg-white rounded-lg border p-8">
            <h2 className="text-xl font-semibold mb-6 text-left">General Info</h2>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="text-sm text-gray-500 uppercase text-left">STATUS:</div>
              <div className="text-red-500 px-2 py-0.5 rounded text-sm font-medium bg-red-50">
                {isEditing ? (
                  <select 
                    value={partData.status}
                    onChange={(e) => handleInputChange("status", e.target.value as "ACTIVE" | "INACTIVE")}
                    className="bg-transparent border-none text-red-500"
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                ) : partData.status}
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-1">
                  <h3 className="text-lg font-medium text-left">{partNumber}</h3>
                  {isEditing ? (
                    <Input
                      value={partData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-gray-600 text-left">{partData.description}</p>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1 text-left">COMMITTED:</h4>
                  {isEditing ? (
                    <Input
                      value={partData.committed}
                      onChange={(e) => handleInputChange("committed", e.target.value)}
                      className="max-w-[120px]"
                    />
                  ) : (
                    <p className="text-xl font-medium text-left">{partData.committed}</p>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1 text-left">ON-HAND:</h4>
                  {isEditing ? (
                    <Input
                      value={partData.onHand}
                      onChange={(e) => handleInputChange("onHand", e.target.value)}
                      className="max-w-[120px]"
                    />
                  ) : (
                    <p className="text-xl font-medium text-left">{partData.onHand}</p>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1 text-left">AVAILABLE:</h4>
                  {isEditing ? (
                    <Input
                      value={partData.available}
                      onChange={(e) => handleInputChange("available", e.target.value)}
                      className="max-w-[120px]"
                    />
                  ) : (
                    <p className="text-xl font-medium text-left">{partData.available}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-24 gap-y-8">
                {isEditing ? (
                  <>
                    {renderEditableField("UNITS OF MEASURE", "unitsOfMeasure", partData.unitsOfMeasure)}
                    {renderEditableField("PO ITEM TYPE", "poItemType", partData.poItemType)}
                    {renderEditableField("STANDARD COST", "standardCost", partData.standardCost)}
                  </>
                ) : (
                  <>
                    {renderReadOnlyField("UNITS OF MEASURE", partData.unitsOfMeasure)}
                    {renderReadOnlyField("PO ITEM TYPE", partData.poItemType)}
                    {renderReadOnlyField("STANDARD COST", `$${partData.standardCost}`)}
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-x-24 gap-y-8">
                {isEditing ? (
                  <>
                    {renderEditableField("CREATED", "created", partData.created)}
                    {renderEditableField("DATE ISSUED", "dateIssued", partData.dateIssued)}
                  </>
                ) : (
                  <>
                    {renderReadOnlyField("CREATED", partData.created)}
                    {renderReadOnlyField("DATE ISSUED", partData.dateIssued)}
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-x-24 gap-y-8">
                {isEditing ? (
                  <>
                    {renderEditableField("VENDOR", "vendor", partData.vendor)}
                    {renderEditableField("BUYER", "buyer", partData.buyer)}
                  </>
                ) : (
                  <>
                    {renderReadOnlyField("VENDOR", partData.vendor)}
                    {renderReadOnlyField("BUYER", partData.buyer)}
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img src="/images/bike-main.png" alt="Bike" className="w-full h-80 object-contain bg-gray-100 rounded-lg" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg p-4">
                  <img src="/images/bike-drawing.png" alt="Technical Drawing" className="w-full h-full object-contain" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg p-4">
                  <img src="/images/bike-parts.png" alt="Disassembled Parts" className="w-full h-full object-contain" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg p-4">
                  <img src="/images/bike-assembly.png" alt="Assembly Process" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const tabs = ["General Info", "Tracking", "BOM", "Locations", "Vendors"];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="transition-all duration-300 w-64 lg:w-80 border-r bg-white">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Inventory</h2>
        </div>
        <div>
          {inventory.map((item) => (
            <Link
              key={item.partNumber}
              to={`/part/${item.partNumber}`}
              className={`flex items-center justify-between p-3 border-b hover:bg-gray-100 transition
                ${partNumber === item.partNumber ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
            >
              <div className="flex items-center gap-2">
                {item.status === "error" ? (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                )}
                <span className="text-sm font-medium">{item.partNumber}</span>
              </div>
              <span className="text-xs text-gray-500">{item.modified}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white border-b">
          <div className="h-16 flex items-center justify-between max-w-[1600px] mx-auto px-8">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-2xl font-semibold">Inventory</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                className={isEditing ? "text-green-500" : "text-blue-500"}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Save" : "Edit"}
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-8 py-6">
          <div className="flex gap-2 mb-8">
            {tabs.map((tab) => (
              <Tab
                key={tab}
                label={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </div>

          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default PartDetails;
