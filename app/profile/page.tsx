// import { DateRangePicker } from "@/components/customui/date-range-picker";

import DateRangePickerV0 from "@/components/customui/date-range-picker-v0";

export default function Profile() {

  return (
    <div>
      <div className="mt-4 ml-4">
        Profile
        <div>
          {/* <DateRangePicker
            onUpdate={(values) => console.log(values)}
            initialDateFrom="2023-01-01"
            initialDateTo="2023-12-31"
            align="start"
            locale="en-GB"
            showCompare={false}
          /> */}
          <DateRangePickerV0 />
        </div>
      </div>
    </div>
  );
}
