function isNumberInOpenInterval(number, min, max) {
    return number >= min
        && number <= max;
}
var DayTime = (function () {
    function DayTime(hour, minute) {
        if (isNumberInOpenInterval(hour, 0, 23)
            && isNumberInOpenInterval(minute, 0, 59)) {
            this.hour = hour;
            this.minute = minute;
        }
        else {
            throw new RangeError("Incorrect time set: " + hour + ":" + minute);
        }
    }
    DayTime.hasValidStructure = function (text) {
        return /^\d{1,2}:\d{2}$/.test(text);
    };
    DayTime.fromString = function (time) {
        if (DayTime.hasValidStructure(time)) {
            var splitTime = time.split(":");
            return new DayTime(Number(splitTime[0]), Number(splitTime[1]));
        }
        else {
            throw new Error("Given value " + time + " didn't match expected format HH:mm");
        }
    };
    DayTime.fromCurrentTime = function () {
        var now = new Date();
        return new DayTime(now.getHours(), now.getMinutes());
    };
    DayTime.prototype.isAfter = function (dayTime) {
        return (this.hour > dayTime.hour
            || (this.hour === dayTime.hour && this.minute > dayTime.minute));
    };
    return DayTime;
}());
var NightMode = (function () {
    function NightMode(options) {
        if (options === void 0) { options = {}; }
        this.evening = options.evening instanceof DayTime ? options.evening : new DayTime(21, 0);
        this.morning = options.morning instanceof DayTime ? options.morning : new DayTime(6, 0);
        this.refreshIntervalInSeconds = (typeof options.refreshIntervalInSeconds === 'number') ? options.refreshIntervalInSeconds : 20;
        this.cssNightClassName = (typeof options.cssNightClassName === 'string') ? options.cssNightClassName : 'night';
        if (options.autoSwitch !== false) {
            this.enableAutoSwitch();
        }
    }
    NightMode.prototype.isNight = function () {
        var now = DayTime.fromCurrentTime();
        return this.morning.isAfter(now) || !this.evening.isAfter(now);
    };
    NightMode.prototype.syncBodyClassWithCurrentTime = function () {
        if (this.isNight()) {
            document.body.classList.add(this.cssNightClassName);
        }
        else {
            document.body.classList.remove(this.cssNightClassName);
        }
    };
    NightMode.prototype.enableAutoSwitch = function () {
        var _this = this;
        this.syncBodyClassWithCurrentTime();
        this.autoSwitchTimeoutIntervalID = setInterval(function () { return _this.syncBodyClassWithCurrentTime(); }, this.refreshIntervalInSeconds * 1000);
    };
    NightMode.prototype.disableAutoSwitch = function () {
        clearInterval(this.autoSwitchTimeoutIntervalID);
    };
    return NightMode;
}());
//# sourceMappingURL=night-mode.js.map