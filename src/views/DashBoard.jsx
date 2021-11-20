import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import PostCard from "../components/PostCard";

const DashBoard = () => {
  // State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(+searchParams.get("page"));

  useEffect(() => {
    let isMounted = true;

    if (!currentPage) {
      setCurrentPage(1);
    }

    setSearchParams({ page: `${currentPage}` });
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get(
          `https://jsonplaceholder.typicode.com/posts/?_page=${currentPage}`
        );
        if (!isMounted) return null;
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
    return () => (isMounted = false);
  }, [currentPage, setSearchParams]);

  const validPage = () => currentPage >= 1 && currentPage <= 10;

  return validPage() ? (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox message={error} />
      ) : (
        <>
          {
            <div className="mid-row">
              <div className="card-container">
                {posts.map((post) => (
                  <PostCard key={post.id} postData={post} />
                ))}
              </div>
            </div>
          }

          {
            <div className="page-nav">
              <button
                className="nav-btn"
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >{`<< Prev`}</button>
              <p>{`Page ${currentPage}`}</p>
              <button
                className="nav-btn"
                disabled={currentPage === 10}
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >{` Next >>`}</button>
            </div>
          }
        </>
      )}
    </div>
  ) : (
    <Navigate to="../" replace={true} />
  );
};

export default DashBoard;
