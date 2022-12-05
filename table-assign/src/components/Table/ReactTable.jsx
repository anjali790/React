import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Checkbox } from "antd";
import Highlighter from "react-highlight-words";

import './table.css';
import { data } from './data';

export function ReactTable() {
  const [count, setCount] = useState(0);
  const [tabledata, setTabledata] = useState("")
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined />
    ),

    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : "not found"}
        />
      ) : (
        text
      ),
  });

  const handleDelete = (key) => {
    const newData = tabledata.filter((item) => item.key !== key);
    setTabledata(newData);
  };

  const columns = [
    {
      title: <Checkbox value="checkbox">Select All</Checkbox>,
      dataIndex: "checkbox",
      width: "5%"
    },
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      width: "10%",
      ...getColumnSearchProps("key"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "15%",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
      width: "15%",
      ...getColumnSearchProps("branch"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "18%",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, data) =>
        <button onClick={() => handleDelete(data.key)} className="delete-btn">Delete</button>
    },
  ];

  const handleAddRow = () => {
    const { key, checkbox, name, branch, address } = data[count]
    const addRowData = {
      checkbox,
      key,
      name,
      branch,
      address,
    };

    setTabledata([...tabledata, addRowData]);
    setCount(count + 1);

  };

  return (
    <div className="tableContainer">
      <Button
        onClick={handleAddRow}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >Add Row </Button>
      <Table columns={columns} dataSource={tabledata} />;
    </div>
  );
};