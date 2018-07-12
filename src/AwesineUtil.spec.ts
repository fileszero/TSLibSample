import { AwesomeUtil } from ".";
test("make instance", () => {
    const util: AwesomeUtil = new AwesomeUtil();
    expect(util).not.toBeNull();
});