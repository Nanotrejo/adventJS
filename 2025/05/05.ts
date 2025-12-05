export { timeUntilTakeOff };

type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
  const fromDate = parseElfDateTime(fromTime);
  const takeOffDate = parseElfDateTime(takeOffTime);
  return Math.floor((takeOffDate.getTime() - fromDate.getTime()) / 1000);

  function parseElfDateTime(elfDateTime: ElfDateTime): Date {
    const [datePart, timePart] = elfDateTime.split('@');
    const [yearStr, monthStr, dayStr] = datePart.split('*');
    const [hourStr, minuteStr, secondStr] = timePart
      .replace(' NP', '')
      .split('|');

    const year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10) - 1; // JavaScript months are 0-based
    const day = parseInt(dayStr, 10);
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    const second = parseInt(secondStr, 10);

    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }
}

const takeoff = '2025*12*25@00|00|00 NP';

// from December 24, 2025, 23:59:30, 30 seconds before takeoff
timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)
// 30

// exactly at takeoff time
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
// 0

// 12 seconds after takeoff
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
// -12
