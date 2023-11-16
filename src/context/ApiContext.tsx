import {
	useContext,
	useState,
	useEffect,
	createContext,
	PropsWithChildren,
} from "react";
import axios from "axios";
import { NaturalEvent } from "../data/Model";

type apiContextProps = {
	method: string;
	url: string;
	body: string;
	error: string;
};

const APIContext = createContext<NaturalEvent | null>(null);

function ApiContextProvider(props: PropsWithChildren<apiContextProps>) {
	const [isLoading, setIsLoading] = useState(false);
	const [apiData, setApiData] = useState([]);
	const [apiError, setApiError] = useState("");

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const response = await axios({
					method: props.method,
					url: props.url,
					data: props.body,
				});
				const data = await response?.data;

				setApiData(data);
				setIsLoading(false);
			} catch (error) {
				setApiError(props.error);
				setIsLoading(false);
			}
		};

		fetchData();
	}, [props.url, props.method, props.body]);

	return (
		<ApiContextProvider value={{ isLoading, apiData, apiError }}>
			{props.children}
		</ApiContextProvider>
	);
}

export default ApiContextProvider;

export function useApi() {
	const context = useContext(APIContext);
	if (context == undefined) {
		throw new Error("Context not used within provider");
	}
	return context;
}

