import { facebook } from "../../lib/facebook";

export default function handler(req: any, res: any) {
	if (req.query.code) {
		facebook
			.callback(req.query.code)
			.then((response: { data: { access_token: any } }) => {
				res.status(200).json(response.data.access_token); // store access_token in database for later use
			})
			.catch((error: { response: { data: any } }) => {
				res.status(200).json(error.response.data);
			});
	}
}
