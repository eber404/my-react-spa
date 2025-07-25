import { defineConfig } from "@kubb/core"
import { pluginOas } from "@kubb/plugin-oas"
import { pluginReactQuery } from "@kubb/plugin-react-query"
import { pluginTs } from "@kubb/plugin-ts"

export default defineConfig({
	input: {
		path: "configs/fakestoreapi.json",
	},
	output: {
		path: "src/api/fakestore",
		clean: true,
		extension: {
			".ts": "",
		},
	},
	plugins: [
		pluginOas(),
		pluginTs(),
		pluginReactQuery({
			output: {
				path: "hooks",
			},
			group: {
				type: "tag",
				name: ({ group }) => `${group}Hooks`,
			},
			client: {
				importPath: "../../client",
				dataReturnType: "data",
			},
			mutation: {
				methods: ["post", "put", "delete"],
			},
			infinite: {
				queryParam: "next_page",
				initialPageParam: 0,
				cursorParam: "nextCursor",
			},
			query: {
				methods: ["get"],
				importPath: "@tanstack/react-query",
			},
			suspense: {},
		}),
	],
})
