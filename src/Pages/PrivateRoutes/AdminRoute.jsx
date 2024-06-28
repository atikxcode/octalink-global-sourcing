import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Providers/AuthProvider";


const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  // Fetch admin data
  const { isPending, isError, error, data: admins } = useQuery({
    queryKey: ['admins'],
    queryFn: async () => {
      const res = await axiosPublic.get('/user');
      return res.data;
    }
  });

  if (isPending || loading) {
    return (
      <div className="mx-auto container flex justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  // Check if user is logged in and has admin role
  if (user && admins) {
    const isAdmin = admins.some(admin => admin.email === user.email && admin.role === "admin");

    if (isAdmin) {
      return children;
    }
  }

  // Redirect to login if user is not an admin
  return <Navigate state={location.pathname} to="/login" />;
};

export default AdminRoute;
