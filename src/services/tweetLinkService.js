import {httpGetService, httpService} from "../managers/httpService";
import {httpConstants} from "../constants";
export default {
    tweetLink,
}
async function tweetLink(tweeturl) {
    let url = process.env.REACT_APP_TWEET_LINK_SERVICE + httpConstants.API_END_POINT.TWEET_LINK+ `?url=${tweeturl}`;
    console.log("url",url)
    return httpService(httpConstants.METHOD_TYPE.GET, {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON}, {}, url)
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