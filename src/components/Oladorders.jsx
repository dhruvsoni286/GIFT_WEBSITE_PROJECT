import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { domain, header } from '../env'
import './oldOrders.css'

const Oladorders = () => {
    const [orders, setOrders] = useState(null)
    const [reload, setReload] = useState(null);
    useEffect(() => {
        const getorder = async () => {
            await Axios({
                method: 'get',
                url: `${domain}/api/orders/`,
                headers: header
            }).then(response => {
                console.log(response.data, "$444 old order");
                setOrders(response.data)
            })
        }
        getorder()
    }, [reload])

    const delateorderhistory = async (id) => {
        await Axios({
            method: "delete",
            url: `${domain}/api/orders/${id}/`,
            headers:header
        }).then((res) => {
            // console.log(res.data);
            setReload(res.data)
        })
    }

    return (
        <div className="container">
            <h1>Orders History</h1>
            <table className="table old_table_name ">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Total</th>
                        <th>Quantity</th>
                        <th>Order Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.length !== 0 ?
                            orders?.map((order, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>TK. {order?.total}</td>
                                    <td>{order?.cartproduct?.length}</td>
                                    <td>{order?.order_status}</td>
                                    <td><Link to={`/orderdetails/${order?.id}`}className="btn custom-btn-green"><span>Details</span></Link></td>
                                    <td><p onClick={() => delateorderhistory(order.id)} className="btn custom-btn-red"><span>Delete</span></p></td>
                                </tr>
                            )) :
                            (
                                <div>
                                    <h1 className="display-1">
                                        No Old Order
                                    </h1>
                                    <Link to="/" className="btn custom-btn-info"><span>GO HOME</span></Link>
                                </div>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Oladorders
