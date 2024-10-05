class TestConfig {
    static get MyBoolean() { return true; }
    static get MyInteger() { return 142; }
    static get MyFloat() { return 322.0; }
    static get MyCombinedFloat() { return 45724.0; }
    static get MyDouble() { return 233.9; }
    static get MyRegex() { return /Test Reg(E|e)x/; } // Just another RegEx.
    static get MySubstitutedString() { return 'Sometimes I just want to scream Hello World!'; }
}
module.exports = TestConfig
// Generated with ninja-bear v1.0.0 (https://pypi.org/project/ninja-bear/).
