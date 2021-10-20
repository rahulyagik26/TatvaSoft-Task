import React, { useContext, useMemo } from 'react';
import APIProvider from '../store/apiContext';
import classes from './TableBody.module.css';

const TableBody = ({ data, loading }) => {
    console.log(data, loading)
    const tableData = data.map(el => {
        return (
            <tr key={el.id.value}>
                <td>
                    <img src={el.picture.medium} alt="dfjl" />
                </td>
                <td>{`${el.name.first} ${el.name.last}`}</td>
                <td>{el.email}</td>
                <td>{el.location.city}</td>
                <td>{el.location.state}</td>
            </tr>
        )
    })

    return (
        <tbody className={classes.tableBody}>
            {tableData}
        </tbody>
    )
}
export default TableBody
