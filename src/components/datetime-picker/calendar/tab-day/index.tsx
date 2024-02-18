import { twMerge } from 'tailwind-merge';
import { dateGreaterThan, dateLessThan } from '../../../../helpers/date';
import { TabDayNavigation } from './tab-day-navigation';
import { TabDayProps } from './types';

export function TabDay(props: TabDayProps) {
  const {
    weekDays,
    displayedWeeks,
    selectedDate,
    now,
    startDate,
    endDate,
    onDayClick,
    onTodayClick,
    monthNames,
    selectedMonth,
    selectedYear,
    onNavClick,
    changeSelectionTab,
  } = props;

  return (
    <>
      <TabDayNavigation
        monthNames={monthNames}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        onNavClick={onNavClick}
        changeSelectionTab={changeSelectionTab}
      />

      <table className="w-full border-collapse">
        <thead>
          <tr className="">
            {weekDays.map((day, index) => {
              return (
                <th
                  className="h-8 w-10 border-b border-b-[#2e2e2e30] p-0 text-center align-middle text-sm text-[#999]"
                  key={index + day}
                >
                  {day}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {displayedWeeks.map((week, index) => {
            return (
              <tr key={week.toString() + index} className="h-7">
                {week.map((date, index) => {
                  const offMonth = date.getMonth() !== selectedMonth;
                  const selected =
                    selectedDate && date.toDateString() === selectedDate.toDateString();
                  const today = !selected && date.toDateString() === now.toDateString();
                  const UM_DIA = 24 * 60 * 60 * 1000; // 24 horas × 60 minutos × 60 segundos × 1000 milissegundos
                  const disablePreviewDates =
                    (startDate && dateLessThan(date, new Date(startDate.getTime() - UM_DIA))) ??
                    false;
                  const disableNextDates = (endDate && dateGreaterThan(date, endDate)) ?? false;
                  const isDisable = disablePreviewDates || disableNextDates;

                  const className = {
                    enable:
                      'text-[#262626] cursor-pointer data-[selected-date=true]:bg-[#005193] data-[today=true]:font-bold data-[selected-date=true]:text-[#ffffff] data-[today=true]:text-[#005193] data-[off-month=true]:opacity-50 hover:bg-[#005193] hover:text-[#ffffff] data-[today=true]:hover:text-[#ffffff]',
                    disable: 'cursor-default select-none',
                  }[isDisable ? 'disable' : 'enable'];

                  const color = {
                    enable: undefined,
                    disable: '#b0b0b0',
                  }[isDisable ? 'disable' : 'enable'];

                  return (
                    <td key={date.toString() + index} className="box-border border-collapse">
                      <div
                        data-disable={isDisable}
                        data-today={today}
                        data-off-month={offMonth}
                        data-selected-date={selected}
                        style={{ color }}
                        className={twMerge(
                          'flex h-7 w-7 items-center justify-center rounded-full text-center align-middle text-sm  transition-all',
                          className,
                        )}
                        id={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
                        onClick={(e) => {
                          if (isDisable) return;
                          onDayClick(e);
                        }}
                      >
                        <span>{date.getDate()}</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <span
        className="block cursor-pointer p-2 pb-0 text-center text-xs font-bold opacity-50 hover:text-[#005193] hover:opacity-80"
        onClick={onTodayClick}
      >
        Hoje
      </span>
    </>
  );
}
