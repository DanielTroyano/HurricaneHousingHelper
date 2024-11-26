import React, { useState, useEffect } from "react";
import UpdatesItem from "./UpdatesItem";
import Spinner from "./spinner";

const Updates = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const pageSize = 8; // Number of articles per page
    const country = "us"; // Default country
    const category = "general"; // Default category
    const API_KEY = "YOUR_NEWSAPI_KEY"; // Replace with your NewsAPI key

    const fetchNews = async (page) => {
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setArticles(data.articles || []);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews(page);
    }, [page]);

    return (
        <div className="container my-4">
            <h1 className="text-center">Top Headlines</h1>
            {loading && <Spinner />}
            <div className="row">
                {!loading &&
                    articles.map((article, index) => (
                        <div className="col-md-4" key={index}>
                            <UpdatesItem
                                title={article.title || ""}
                                description={article.description || ""}
                                imageUrl={article.urlToImage}
                                newsUrl={article.url}
                                author={article.author}
                                date={article.publishedAt}
                                source={article.source.name}
                            />
                        </div>
                    ))}
            </div>
            <div className="d-flex justify-content-between my-3">
                <button
                    disabled={page <= 1}
                    className="btn btn-dark"
                    onClick={() => setPage(page - 1)}
                >
                    &larr; Previous
                </button>
                <button
                    className="btn btn-dark"
                    onClick={() => setPage(page + 1)}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
};

export default Updates;
