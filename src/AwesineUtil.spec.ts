import { AwesomeUtil } from ".";
test("make instance", () => {
    const util: AwesomeUtil = new AwesomeUtil();
    expect(util).not.toBeNull();
});

test("the name is AwesomeUtil", () => {
    const util: AwesomeUtil = new AwesomeUtil();
    expect(util.getName()).toBe("AwesomeUtil");
});