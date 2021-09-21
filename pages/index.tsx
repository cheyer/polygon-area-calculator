import Head from "next/head";
import React, { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Container from "../components/Container";
import FileInput from "../components/FileInput";
import NavBar from "../components/NavBar";
import PolygonList from "../components/PolygonList";
import { FORM_FIELD_FILE_NAME } from "./utils/constants";
import { IPolygonWithArea } from "./utils/transformPolygonData";

const Index = () => {
  const [buttonText, setButtonText] = useState("Submit");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [polygonData, setPolygonData] = useState<IPolygonWithArea[] | null>(
    null
  );

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    setSelectedFile(files ? files[0] : null);
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPolygonData(null);
    setError(null);
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      return;
    }
    setIsLoading(true);
    setButtonText("Loading");

    const formData = new FormData();
    formData.append(FORM_FIELD_FILE_NAME, selectedFile);

    fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setPolygonData(data.polygons))
      .catch((error) => setError(error.message))
      .finally(() => {
        setIsLoading(false);
        setButtonText("Submit");
      });
  };

  return (
    <div>
      <Head>
        <title>Polygon Area Calc</title>
      </Head>
      <NavBar text="Poly Area Calc" />
      <Container>
        <p className="prose">
          Upload your a file with polygons and calculate the polygon areas.
        </p>
        <div className="flex py-6 flex-col">
          <FileInput
            name={FORM_FIELD_FILE_NAME}
            onChange={handleChange}
            disabled={isLoading}
            selectedFile={selectedFile}
          />
          <div className="flex flex-col md:flex-row py-6">
            <Button
              onClick={handleSubmit}
              text={buttonText}
              disabled={isLoading || !selectedFile}
            />
            <div className="px-0 py-3 md:px-3 md:py-0">
              <Button
                onClick={handleRemove}
                text="Reset"
                disabled={!selectedFile}
              />
            </div>
          </div>
        </div>
        {error && (
          <Alert type="error" title="There is an error" description={error} />
        )}
        {polygonData && <PolygonList polygons={polygonData} />}
      </Container>
    </div>
  );
};

export default Index;
