import "./App.css";
import { Button } from "./components/Button";

import { FaPlus } from "react-icons/fa";
import { Input } from "./components/Input";
import { Select } from "./components/Select/Select";
import { DateTime } from "./components/DateTime";

function App() {
  return (
    // TODO : to be remove after testing
    <>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Button variant="secondary">Reset</Button>
        <Button variant="primary">Save</Button>
        <Button variant="tertiary" size="large">
          <FaPlus /> Add New Item
        </Button>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <Input
          name="username"
          placeholder="Enter your username"
          value=""
          onChange={() => {}}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <Select
          name="invoiceTerms"
          options={[
            { label: "NET 10 Days", value: "NET_10_DAYS" },
            { label: "NET 20 Days", value: "NET_20_DAYS" },
            { label: "NET 30 Days", value: "NET_30_DAYS" },
          ]}
          onChange={(e) => console.log(e.target.value)}
          value="NET_20_DAYS"
        />
      </div>
      <div>
        <DateTime
          type="datetime-local"
          name="eventDateTime"
          value=""
          onChange={() => {}}
          placeholder="Select Date and Time"
        />
      </div>
    </>
  );
}

export default App;
