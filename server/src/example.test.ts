import { example } from "./example.js";

test("example test", () => {
        const result = example();
        expect(result.length).toBeGreaterThan(0);
});
