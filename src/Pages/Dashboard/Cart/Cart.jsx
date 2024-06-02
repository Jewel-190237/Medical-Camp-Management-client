import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAxios from "../../../Hooks/useAxios";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxios();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const tPrice = totalPrice.toFixed(2);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    })
            }
        });
}

return (
    <>
        <div className="flex justify-around">
            <h2 className="text-4xl">Item:{cart.length} </h2>
            <h2 className="text-4xl">Total Price: {tPrice} </h2>
            <h2 className="btn ntn-outline">Pay</h2>
        </div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Sl No
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => <tr key={item._id}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                                {/* <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                            </td>
                            <td>{item.price}</td>
                            <th>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-800"></FaTrashAlt></button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
);
};

export default Cart;