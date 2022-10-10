/**
 * This holds on to values and reacts to changes with the value
 */
export class BindableNumber {
    private _value: number;
    private _bindedFunction: Function;

    /**
     * This is the currently binded value. Setting a new value triggers the binded function.
     *
     * Bind the function using {@link BindableNumber.setCallbackFunction}
     */
    public get value() {
        return this._value;
    }
    public set value(newValue: number) {
        // return if there is no actual change
        if (newValue === this._value) return;

        this._value = newValue;
        this._bindedFunction?.(this._value);
    }

    /**
     * This holds on to values and reacts to changes with the value
     *
     * @param defaultValue - The default value
     */
    public constructor(defaultValue: number) {
        this._value = defaultValue;
    }

    /**
     * This set the binded function
     *
     * @param callback - The function to be invoked when changes to the value is detected
     * @param runImmediately - Run the function immediately even if there are no changes yet
     */
    public setCallbackFunction(
        callback: Function,
        runImmediately: boolean = false
    ): void {
        this._bindedFunction = callback;
        if (runImmediately) this._bindedFunction(this._value);
    }
}
