import { useEffect } from "react";

function Error404() {

  useEffect(() => {
    document.title = "Error 404";
  }, []);

  return (
    <h2>This page doesn't exist... Sorry (っ╥﹏╥ ς)</h2>
  );
};

export default Error404;