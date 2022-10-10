var BindableNumber = (function () {
    function BindableNumber(defaultValue) {
        this._value = defaultValue;
    }
    Object.defineProperty(BindableNumber.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            var _a;
            if (newValue === this._value)
                return;
            this._value = newValue;
            (_a = this._bindedFunction) === null || _a === void 0 ? void 0 : _a.call(this, this._value);
        },
        enumerable: false,
        configurable: true
    });
    BindableNumber.prototype.setCallbackFunction = function (callback, runImmediately) {
        if (runImmediately === void 0) { runImmediately = false; }
        this._bindedFunction = callback;
        if (runImmediately)
            this._bindedFunction(this._value);
    };
    return BindableNumber;
}());
export { BindableNumber };
//# sourceMappingURL=bindable.js.map