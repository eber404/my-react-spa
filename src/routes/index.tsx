import { createFileRoute } from "@tanstack/react-router"
import { useGetAllProducts } from "@/api/fakestore"
import Loader from "@/components/loader"

export const Route = createFileRoute("/")({
	component: HomeComponent,
})

function HomeComponent() {
	const { data, isLoading } = useGetAllProducts()

	if (isLoading) {
		return <Loader />
	}

	const formatPrice = (price: number) => {
		return Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(price)
	}

	return (
		<div className="container mx-auto max-w-3xl px-4 py-10">
			<div className="grid gap-6">
				<section className="rounded-lg border p-4">
					<h2 className="mb-2 font-medium">Products</h2>
					{data?.map((product) => (
						<div
							key={product.id}
							className="flex border-b nth-last-[1]:border-none py-2"
						>
							<p className="text-gray-500 text-sm hover:text-indigo-500">
								{product.title} - {formatPrice(product.price ?? 0)}
							</p>
						</div>
					))}
				</section>
			</div>
		</div>
	)
}
