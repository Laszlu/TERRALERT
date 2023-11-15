import { useEffect, useState } from "react";
import axios from "axios";

type useFetchProps = {
	method: string;
	url: string;
	body: string;
	error: string;
};

const useFetch = (props: useFetchProps) => {
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

	return { isLoading, apiData, apiError };
};

export default useFetch;

