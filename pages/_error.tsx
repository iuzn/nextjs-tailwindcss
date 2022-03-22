import React from "react";
import { ErrorProps } from "next/error";

function Error({ statusCode }: { statusCode: number }) {
  return (
    <>
      <h1>Error {statusCode}</h1>
    </>
  );
}

Error.getInitialProps = (res: ErrorProps, err: ErrorProps) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
