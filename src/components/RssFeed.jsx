// src/RssFeed.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const RssFeed = () => {
  const [rssContent, setRssContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRssFeed = async () => {
      try {
        const response = await axios.get(
          "https://itboomi-strapi-blog-7k9mk.ondigitalocean.app/api/rss",
          {
            headers: { "Content-Type": "application/rss+xml" },
          }
        );
        setRssContent(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the RSS feed:", error);
        setLoading(false);
      }
    };

    fetchRssFeed();
  }, []);

  return <div>{loading ? <p>Loading...</p> : <pre>{rssContent}</pre>}</div>;
};

export default RssFeed;
