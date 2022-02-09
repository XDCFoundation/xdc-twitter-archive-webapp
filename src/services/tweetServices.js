import { httpService } from "../managers/httpService";
import { httpConstants } from "../constants";

export default { getTweetByUrl, getArchivedTweetCount };

async function getTweetByUrl(path, data) {
  let url = process.env.REACT_APP_GET_TWEET_BY_URL + path;
  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    data,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getArchivedTweetCount(requestData) {
  let url =
    process.env.REACT_APP_ARCHIVED_TWEET_COUNT +
    httpConstants.API_END_POINT.ARCHIVE_TWEET_COUNT;
  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
