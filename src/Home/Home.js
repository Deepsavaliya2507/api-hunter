import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFirstDataRequest } from "../Store/First/action";

function Home() {


  const dispatch = useDispatch();

  const { isLoading, FirstPageData } = useSelector((Store) => ({
    isLoading: Store?.First?.loading,
    FirstPageData: Store?.First?.FirstPageData,
  }));

  useEffect(() => {
    dispatch(getFirstDataRequest());
  }, []);

  return (
    <div>
      <>
        {
          isLoading ? "loading" : <div className="my-5">
            <h1 className="text-2xl font-medium text-center">Home</h1>
            <div className="mt-5">
              {FirstPageData?.map((item, index) => (
                <div key={index} className="flex">
                  <p className="font-medium">{item.id}.</p>&nbsp;&nbsp;
                  <p className="text-center">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        }
      </>
    </div>
  )
}

export default Home;
