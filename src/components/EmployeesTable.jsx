import React from 'react';
import { Table as AntdTable, Button, Popconfirm } from 'antd';
import PropTypes from 'prop-types';

const EmployeesTable = ({ data, editItem, deleteItem }) => {
    const columns = [{
        title: '#',
        dataIndex: 'id',
        key: 'id',
        sortOrder: 'ascend',
    }, {
        title: 'Фамилия',
        dataIndex: 'lastName',
    },  {
        title: 'Имя',
        dataIndex: 'firstName',
    },  {
        title: 'Отдел',
        dataIndex: 'departmentName',
    },  {
        title: 'Действия',
        render: (text, record) => (
            <span>
        <Button
            icon="edit"
            onClick={() => editItem(record.id)}
        />
        <Popconfirm
            placement="top"
            title="Вы действительно хотите удалить запись?"
            onConfirm={() => deleteItem(record.id)}
            okText="Да"
            cancelText="Нет"
        >
          <Button
              type="danger"
              icon="delete"
          />
        </Popconfirm>
      </span>
        ),
    }];

    return (

    <AntdTable
        rowKey="uid"
        dataSource={data}
        columns={columns}
        locale={{
            emptyText: 'Нет данных',
        }}
    />
);
};

EmployeesTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    editItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
};

EmployeesTable.defaultProps = {
    data: null,
};

export default EmployeesTable;
