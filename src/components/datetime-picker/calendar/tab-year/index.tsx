import { TabYearNavigation } from './tab-year-navigation';
import { TabYearProps } from './types';

export function TabYear(props: TabYearProps) {
  const { yearsArray, selectedYear, onYearChange, onNavClick } = props;

  return (
    <>
      <TabYearNavigation yearsArray={yearsArray} onNavClick={onNavClick} />

      <div className="grid grid-cols-4 grid-rows-5 gap-1">
        {yearsArray.map((year, index) => {
          return (
            <div
              data-selected={selectedYear === year}
              className="flex cursor-pointer items-center justify-center rounded border border-[#ddd] bg-[#ffffff] p-1 text-sm text-[#666] hover:bg-[#005193] hover:text-[#ffffff] data-[selected=true]:bg-[#005193] data-[selected=true]:text-[#fff]"
              key={year + index}
              onClick={() => onYearChange(year)}
            >
              {year}
            </div>
          );
        })}
      </div>
    </>
  );
}
