import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


export default function Tools() {
  return (
  <div className="flex flex-col mt-4 ml-4 items-center">
    <h1 className="text-3xl font-bold mb-4">DataBreach Lookup</h1>
    <div className="flex flex-row w-full max-w-sm items-center gap-1.5">
      <Input type="text" id="text" placeholder="12345678" />
      <Button type="submit">Submit</Button>
    </div>
    <div id="results" className="bg-slate-800 mt-8 w-full h-64">

    </div>
  </div>


  );
}