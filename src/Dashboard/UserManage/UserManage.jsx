import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const UserManage = () => {
  const axiosPublic = useAxiosPublic()
  const  {user} = useContext(AuthContext);

  const {isPending, isError, error, refetch, data: Allusers } = useQuery({
    queryKey: ['Allusers'],
    queryFn: async () => {
      const res = await axiosPublic.get('/user');
      return res.data;
    }
  });

  
  if (isPending) {
    return <div className="mx-auto container flex justify-center"><span className="loading loading-dots loading-lg"></span></div>;
  }


  const currentUser = Allusers?.filter(users => users?.email == user?.email)
  // console.log(currentUser[0])

  if (isError) {
    return <p>Error: {error.message}</p>;
  }


  const handleRoleChange = (id, newRole) => {
    const updateRole = {
      role: newRole,  
  }

  // console.log("Updated Donation Request", updateRole)

  axiosPublic.put(`/user/role/${id}`, updateRole)
    .then(res => {
      if(res.data.modifiedCount > 0){
        Swal.fire({
          toast:true,
          position: "top-end",
          icon: "success",
          title: "Updated the User Role Successfully",
          showConfirmButton: false,
          timer: 1500,
          
        });
       refetch();
      } 
    })
    .catch(error => {
      console.error(error)
    })
  };



  return (
   
<div className=' my-auto mx-auto container'>


<div className="flex flex-col gap-4 items-center my-20">
  <h2 className="text-[#797F54]  text-4xl">All Users</h2>
  <p className="font-sans font-normal text-xl text-center">Manage users effortlessly with  intuitive admin panel. Add users new role  to keep the community thriving.</p>
</div>




  {
    Allusers?.map(users => 
     
        <div key={users._id} className="overflow-x-auto shadow-custom rounded-2xl mb-10">
<table className="table">
{/* head */}
<thead>
<tr>

          
        <th className="text-center">Users</th>
        <th className="text-center">Role</th>
        <th className="text-center">Actions</th>
      </tr>
</thead>
<tbody>
  {/* row 1 */}
  <tr>

        <td className="text-center  flex justify-center">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={users?.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{users?.name}</div>
              <div className="text-sm opacity-50">{users?.email}</div>
            </div>
          </div>
        </td>
        <td className="text-center">

          <span className=" ">{users?.role}</span>
        </td>
  
        <td className="text-center">
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={users?.role}
                  onChange={(e) => handleRoleChange(users._id, e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="client">Client</option>

                </select>
              </td>
      </tr>

</tbody>



</table>
     </div>
      
    )
  }
</div>
  );
};

export default UserManage;