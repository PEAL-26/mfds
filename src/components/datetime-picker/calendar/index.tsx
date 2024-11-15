'use client';

import { TabDay } from './tab-day';
import { TabMonth } from './tab-month';
import { TabYear } from './tab-year';

import { forwardRef } from 'react';
import { monthNames, weekDays } from './constants';
import { CalendarProps } from './types';
import { useCalendar } from './use-calendar';

export const Calendar = forwardRef<HTMLInputElement, CalendarProps>((props, ref) => {
  const { startDate, endDate } = props;
  const {
    datepickerRef,
    now,
    selectedDate,
    selectedMonth,
    selectedYear,
    displayedWeeks,
    selectionTab,
    changeSelectionTab,
    onNavClick,
    onDayClick,
    onTodayClick,
    onMonthChange,
    onYearChange,
    yearsArray,
    handleClear,
    isLoading,
  } = useCalendar(props);

  if (isLoading) return null;

  return (
    <div className="box-border w-64 rounded-md border bg-white p-3 shadow" ref={datepickerRef}>
      {selectionTab === 'day' && (
        <TabDay
          now={now}
          startDate={startDate}
          endDate={endDate}
          weekDays={weekDays}
          monthNames={monthNames}
          selectedYear={selectedYear}
          selectedDate={selectedDate}
          selectedMonth={selectedMonth}
          displayedWeeks={displayedWeeks}
          onNavClick={onNavClick}
          onDayClick={onDayClick}
          onTodayClick={onTodayClick}
          changeSelectionTab={changeSelectionTab}
          onClearClick={handleClear}
        />
      )}

      {selectionTab === 'month' && (
        <TabMonth
          monthNames={monthNames}
          selectedMonth={selectedMonth}
          onMonthChange={onMonthChange}
        />
      )}

      {selectionTab === 'year' && (
        <TabYear
          yearsArray={yearsArray}
          selectedYear={selectedYear}
          onYearChange={onYearChange}
          onNavClick={onNavClick}
        />
      )}
    </div>
  );
});

Calendar.displayName = 'Calendar';
