import { useQuery } from "@tanstack/react-query";
import { getSpcRssFeed } from "services/arcgis-server-convective-outlooks/convective-outlooks";

export const useRssFeedQuery = (feedType) => {
	return useQuery(["spc-rss-feeds", feedType], () => getSpcRssFeed(feedType));
};