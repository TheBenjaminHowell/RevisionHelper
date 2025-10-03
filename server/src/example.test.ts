import { example } from "./example.ts";

test("example test", () => {
        const result = example();
        expect(result.length).toBeGreaterThan(0);
});
