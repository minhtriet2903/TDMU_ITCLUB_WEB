import React, { Component } from "react";
import SearchForm from "../../src/components/User/SearchForm";
import TableData from "../../src/components/User/TableData";
import AddUser from "../../src/components/User/AddUser";
import ButtonAddUser from "../../src/components/User/ButtonAddUser";
import dataUser from "../../src/components/User/Data.json";
import { v4 as uuidv4, v4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: false,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {},
      userObj: {}
    };
  }

  componentWillMount() {
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(dataUser));
    } else {
      var temp = localStorage.getItem("userData");
      this.setState({
        data: JSON.parse(temp)
      });
    }
  }

  onDisplay = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  };

  onSearch = dl => {
    this.setState({
      searchText: dl
    });
  };

  onAdd = (name, phone, permission) => {
    var item = {};
    item._id = v4();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem("userData", JSON.stringify(items));
  };

  onModify = user => {
    this.setState({
      userEditObject: user
    });
  };
  onDelete = idUser => {
    var tempData = this.state.data.filter(item => item._id !== idUser);
    this.setState({
      data: tempData
    });
    localStorage.setItem("userData", JSON.stringify(tempData));
  };
  onChangeUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  };
  getUserInfo = info => {
    this.state.data.forEach((value, key) => {
      if (value._id === info._id) {
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    });
    localStorage.setItem("userData", JSON.stringify(this.state.data));
  };
  render() {
    var result = [];
    this.state.data.forEach(item => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    });
    return (
      <div>
        <div className="searchForm">
          <div className="container">
            <div className="">
              <ButtonAddUser
                display={() => this.onDisplay()}
                isDisplayForm={this.state.isDisplayForm}
              />
              <SearchForm
                onSearch={dl => this.onSearch(dl)}
                editUserStatus={this.state.editUserStatus}
                changeUserStatus={() => this.onChangeUserStatus()}
                userEditObject={this.state.userEditObject}
                getUserInfo={info => this.getUserInfo(info)}
              />
            </div>
            <div className="inline">
              <TableData
                data={result}
                modify={user => this.onModify(user)}
                changeUserStatus={() => this.onChangeUserStatus()}
                delete={idUser => this.onDelete(idUser)}
              />
              <AddUser
                isDisplayForm={this.state.isDisplayForm}
                add={(name, phone, permission) =>
                  this.onAdd(name, phone, permission)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
