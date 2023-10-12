import { TabMonthPros } from './types';

export function TabMonth(props: TabMonthPros) {
  const { monthNames, selectedMonth, onMonthChange } = props;

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-2">
      {monthNames.map((month, index) => {
        return (
          <div
            data-selected={selectedMonth === index}
            className="flex cursor-pointer items-center justify-center rounded border border-[#ddd] bg-[#ffffff] p-1 text-sm text-[#666] hover:bg-[#005193] hover:text-[#ffffff] data-[selected=true]:bg-[#005193] data-[selected=true]:text-[#fff]"
            key={month + index}
            onClick={() => onMonthChange(index)}
          >
            {month}
          </div>
        );
      })}
    </div>
  );
}
