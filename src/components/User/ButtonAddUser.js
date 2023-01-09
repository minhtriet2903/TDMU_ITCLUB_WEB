import React, { Component } from 'react';

class ButtonAddUser extends Component {
    onDisplayButton = () => {
        if (this.props.isDisplayForm === false) {
            return <div className="w-max cursor-pointer text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800" onClick={() => this.props.display()} >Thêm người dùng</div>
        } else {
            return <div className="w-max cursor-pointer text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800" onClick={() => this.props.display()}>Đóng</div>
        }
    }
    render() {
        return (
            <div className="btn-group">
                {this.onDisplayButton()}
            </div>
        );
    }
}

export default ButtonAddUser;