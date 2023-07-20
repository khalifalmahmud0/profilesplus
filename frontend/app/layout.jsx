// import "./style.scss";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
// 	return (
// 		<html lang="en">
// 			<body className={inter.className}>{children}</body>
// 		</html>
// 	);
// }
import {
	Fonts,
	QueryClientProvider,
	ReactQueryDevtools,
	queryClient,
} from "@/app/import/packages";
import "@/app/style.scss";

const RootLayout = ({ children }) => {
	return (
		<>
			<html lang="en" className={Fonts}>
				<body className="bg-[#272727] ">
					<QueryClientProvider client={queryClient}>
						<div className="">{children}</div>
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</body>
			</html>
		</>
	);
};
export default RootLayout;