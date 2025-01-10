import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { Layout, NotFound } from "@/components";

// Public Routes
// const Auth = lazy(() => import("@/pages/Auth"));

// Private Routes
const Home = lazy(() => import("@/pages/Home"));

export default function AllRoutes() {
	// const publicRoutes = useRoutes([
	// 	{
	// 		path: "*",
	// 		element: <Navigate to={"/auth"} />
	// 	},
	// 	{
	// 		path: "/auth",
	// 		element: <Auth />
	// 	},
	// 	{
	// 		path: "*",
	// 		element: <NotFound />
	// 	}
	// ]);

	const privateRoutes = useRoutes([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />
				},
				{
					path: "*",
					element: <NotFound />
				}
			]
		}
	]);

	return privateRoutes;

	// return !!user ? privateRoutes : publicRoutes;
}
