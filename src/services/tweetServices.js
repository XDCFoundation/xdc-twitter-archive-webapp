import { httpService } from "../managers/httpService";
import { httpConstants } from "../images/constants";

export default { getTweetByUrl }
async function getTweetByUrl(path, data) {
    let url = process.env.REACT_APP_GET_TWEET_BY_URL + path;
    return httpService(httpConstants.METHOD_TYPE.GET, { 'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON }, data, url)
        .then(
            response => {
                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);

            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}