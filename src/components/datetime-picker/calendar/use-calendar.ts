import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import { CalendarProps, Tab } from './types';

export function useCalendar(props: CalendarProps) {
  const { value, onChange } = props;
  const now: Date = useMemo(() => new Date(), []);

  const [isLoading, setIsLoading] = useState(true);

  const [year, month, date] = useMemo(() => {
    const newDate = value ? new Date(value) : now;
    const year = newDate?.getFullYear();
    const month = newDate?.getMonth();
    return [year, month, value];
  }, [value]);

  const [selectedDate, setSelectedDate] = useState<Date | null | undefined>(date);
  const [selectedMonth, setSelectedMonth] = useState<number>(month);
  const [selectedYear, setSelectedYear] = useState<number>(year);

  // state needed to display the day view, an array of the month weeks containing an array of week dates
  const [displayedWeeks, setDisplayedWeeks] = useState<Date[][]>([]);

  // state that tells wich tab is active : day, month, years
  const [selectionTab, setSelectionTab] = useState<Tab>('day');

  // years array needed for the years view
  const [yearsArray, setYearsArray] = useState<number[]>([]);

  const datepickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const years: number[] = [];
    for (let y = selectedYear - 10; y < selectedYear + 10; y++) {
      years.push(y);
    }
    setYearsArray(years);
  }, [selectedYear]);

  useEffect(() => {
   setIsLoading(false)
  }, []);

  //get the array of weeks and dates needed for the day tab view, and update the displayedWeeks state
  useEffect(() => {
    function getMonthLength(year: number, month: number) {
      const monthLastDate = new Date(year, month + 1, 0);
      return monthLastDate.getDate();
    }

    //get the first date object of the month
    const currentMonthFirstDate: Date = new Date(selectedYear, selectedMonth, 1);

    //get the day number of the week of the first date of the month
    const currentMonthFirstDay: number = currentMonthFirstDate.getDay();

    // get the current month length
    const currentMonthLastDate: number = getMonthLength(selectedYear, selectedMonth);

    // initialize a new array
    const calendarArray: Date[][] = [];

    //determine if 6 or 5 weeks have to be displayed for this month
    const numberOfWeeksToDisplay: number = currentMonthFirstDay + currentMonthLastDate > 35 ? 6 : 5;

    for (let week = 0; week < numberOfWeeksToDisplay; week++) {
      const weekArray: Date[] = [];
      const dayStartPosition: number = week * 7 - currentMonthFirstDay;
      for (let day = 1; day <= 7; day++) {
        const dayPosition = dayStartPosition + day;
        weekArray.push(new Date(selectedYear, selectedMonth, dayPosition));
      }
      calendarArray.push(weekArray);
    }

    setDisplayedWeeks(calendarArray);
  }, [selectedYear, selectedMonth]);

  const onYearChange = (value: number) => {
    setSelectionTab('day');
    setSelectedYear(value);
  };

  const onMonthChange = (index: number) => {
    setSelectionTab('day');
    setSelectedMonth(index);
  };

  const onDayClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const date = new Date(target.id);
    const offMonth = target.getAttribute('data-off-month');

    if (offMonth) setSelectedMonth(date.getMonth());

    setSelectedDate(date);
    onChange?.(date);
  };

  const onTodayClick = (e: MouseEvent<HTMLSpanElement>) => {
    const now = new Date(new Date().toISOString().split('T')[0]);
    setSelectedMonth(now.getMonth());
    setSelectedYear(now.getFullYear());
    setSelectedDate(now);
    onChange?.(now);
  };

  const onNavClick = (
    e: React.MouseEvent<HTMLElement>,
    direction: 'next' | 'prev',
    dateElement: Tab = 'day',
  ) => {
    e.preventDefault();
    switch (dateElement) {
      case 'day': {
        if (direction === 'prev') {
          if (selectedMonth === 0) {
            setSelectedMonth(11);
            setSelectedYear(selectedYear - 1);
          } else {
            setSelectedMonth(selectedMonth - 1);
          }
        }
        if (direction === 'next') {
          if (selectedMonth === 11) {
            setSelectedMonth(0);
            setSelectedYear(selectedYear + 1);
          } else {
            setSelectedMonth(selectedMonth + 1);
          }
        }
        break;
      }
      case 'year': {
        if (direction === 'prev') {
          const years: number[] = [];
          for (let y = yearsArray[0] - 20; y < yearsArray[0]; y++) {
            years.push(y);
          }
          setYearsArray(years);
        }
        if (direction === 'next') {
          const years: number[] = [];
          for (
            let y = yearsArray[yearsArray.length - 1] + 1;
            y <= yearsArray[yearsArray.length - 1] + 20;
            y++
          ) {
            years.push(y);
          }
          setYearsArray(years);
        }
        break;
      }
      default:
        break;
    }
  };

  const changeSelectionTab = (e: React.MouseEvent<HTMLElement> | null = null, tab: Tab) => {
    if (e) {
      e.preventDefault();
    }
    setSelectionTab(tab);
  };

  const handleClear = () => {
    onChange?.(undefined);
  };

  return {
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
    handleClear,
    yearsArray,
    isLoading
  };
}
