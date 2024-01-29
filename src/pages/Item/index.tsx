import { ChangeEvent, FormEvent, useState } from "react";

import ButtonBox from "@components/ButtonBox";
import { Table } from "antd";

type Arr = {
  [key: string]: string;
};

export default function Item() {
  const [file, setFile] = useState<File | undefined>();
  const [array, setArray] = useState<Arr[]>([]);
  const [header, setHeader] = useState<string[]>([]);

  const fileReader = new FileReader();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const csvFileToArray = (string: string): void => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    setHeader(csvHeader);
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const newArray = csvRows.map((i, index) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {} as Arr);
      obj.key = index.toString();
      return obj;
    });

    setArray(newArray);
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        if (event.target && event.target.result) {
          const text = event.target.result.toString();
          csvFileToArray(text);
        }
      };

      fileReader.readAsText(file);
    }
  };
  const columns = header.map((key) => {
    return {
      title: key,
      dataIndex: key,
      key: key,
      sorter: (a: { Rating: number }, b: { Rating: number }) =>
        a.Rating - b.Rating,
    };
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE</h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <ButtonBox
          text=" IMPORT CSV"
          styleClass="btn-green"
          handleBtn={(e) => {
            handleOnSubmit(e);
          }}
        />
      </form>
      <br />
      <Table dataSource={array} columns={columns} />;
    </div>
  );
}
