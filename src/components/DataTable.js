import React, { useContext, useMemo } from 'react';
import { Table } from "react-bootstrap"
import TableBody from './TableBody';
import { APIContext } from '../store/apiContext';



const DataTable = () => {

    const dataCtx = useContext(APIContext);
    console.log(dataCtx)
    const { loading, apiData } = useMemo(() => {
        return dataCtx;
    }, [dataCtx])

    return (
        <Table striped bordered hover className="text-center align-middle">
            <thead>
                <tr>
                    <th>Profile Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <TableBody data={apiData?.results || []} loading={loading} />
        </Table>
    )
}

export default DataTable
