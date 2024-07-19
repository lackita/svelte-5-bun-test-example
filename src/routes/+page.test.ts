import { render } from "@testing-library/svelte"
import Home from "./+page.svelte"
import { test } from "bun:test"

test("example", () => {
    render(Home)
})

