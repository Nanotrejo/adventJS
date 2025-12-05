"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeUntilTakeOff = timeUntilTakeOff;
function timeUntilTakeOff(fromTime, takeOffTime) {
    var fromDate = parseElfDateTime(fromTime);
    var takeOffDate = parseElfDateTime(takeOffTime);
    return Math.floor((takeOffDate.getTime() - fromDate.getTime()) / 1000);
    function parseElfDateTime(elfDateTime) {
        var _a = elfDateTime.split('@'), datePart = _a[0], timePart = _a[1];
        var _b = datePart.split('*'), yearStr = _b[0], monthStr = _b[1], dayStr = _b[2];
        var _c = timePart
            .replace(' NP', '')
            .split('|'), hourStr = _c[0], minuteStr = _c[1], secondStr = _c[2];
        var year = parseInt(yearStr, 10);
        var month = parseInt(monthStr, 10) - 1; // JavaScript months are 0-based
        var day = parseInt(dayStr, 10);
        var hour = parseInt(hourStr, 10);
        var minute = parseInt(minuteStr, 10);
        var second = parseInt(secondStr, 10);
        return new Date(Date.UTC(year, month, day, hour, minute, second));
    }
}
var takeoff = '2025*12*25@00|00|00 NP';
// from December 24, 2025, 23:59:30, 30 seconds before takeoff
timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff);
// 30
// exactly at takeoff time
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff);
// 0
// 12 seconds after takeoff
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff);
// -12
