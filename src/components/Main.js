import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import styled from "styled-components";

const ClearButton = styled.button`
  width: 20%;
  height: 50px;
  margin: 10px 0 10px 10px;
  background-color: white;
  border-color: black;
  border-radius: 40px;
  // font-size: 20%;
  text-align: center;
  cursor: pointer;
`;

const Main = () => {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>`
      );
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const handleClear = () => {
    setSrcDoc("");
    setHtml("");
    setCss("");
    setJs("");
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setSrcDoc(
  //       `<html>
  //     <body>${html}</body>
  //     <style>${css}</style>
  //     <script>${js}</script>
  //   </html>`
  //     );
  //   }, 250);

  //   return () => clearTimeout(timeout);
  // }, [setHtml, setCss, setJs]);

  return (
    <main>
      <div className="top-pane pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="clear-btn-container">
        <ClearButton onClick={handleClear}>Clear All</ClearButton>
      </div>
      <div className="bottom-pane">
        <iframe
          srcDoc={srcDoc}
          title="code-output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="90%"
          // height="100%"
          className="iframe"
        />
      </div>
    </main>
  );
};

export default Main;
