import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UserContacts = () => {
  const [activeTab, setActiveTab] = useState('unread'); // State to manage active tab
  const axiosPublic = useAxiosPublic();

  const { isPending, isError,refetch,  error, data: messages } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
      const res = await axiosPublic.get('/usermessage');
      return res.data;
    }
  });

  if (isPending) {
    return <div className="mx-auto container flex justify-center"><span className="loading loading-dots loading-lg"></span></div>;
  }

  const unreadMessages = messages.filter(message => message.status === 'unread');
  const readMessages = messages.filter(message => message.status === 'read');

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const updateStatus = (id, stat) => {

    const messageStat = {
      status: stat
    }
    axiosPublic.put(`/usermessage/status/${id}`, messageStat)
    .then(res => {
      if(res.data.modifiedCount > 0){
        Swal.fire({
          toast:true,
          position: "top-end",
          icon: "success",
          title: "Message Status Updated.",
          showConfirmButton: false,
          timer: 1500
        });
    

      } 
      refetch()
    })
    .catch(error => {
      console.error(error)
    })
  }



  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/usermessage/${id}`)
          .then(response => {
            const data = response.data;
            if (data.deletedCount > 0) {
              Swal.fire({
                // toast:true,
                title: "Deleted!",
                text: "Message Has Been Deleted",
                icon: "success"
              }).then(() => {
               refetch()
              });
              
            }
            
          })
          
          .catch(error => {
            console.error('Error deleting file:', error);
            Swal.fire({
              // toast:true,
              title: "Error",
              text: "An error occurred while deleting the file.",
              icon: "error"
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          // toast:true,
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  };
  

  return (
    <div className="container my-20 mx-auto p-4">
      <div className="flex  justify-center gap-10 mb-8">
        <button
          className={`p-2 ${activeTab === 'unread' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('unread')}
        >
          Unread Messages
        </button>
        <button
          className={`p-2 ${activeTab === 'read' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('read')}
        >
          Read Messages
        </button>
      </div>

      {activeTab === 'unread' && (
        <div className="mb-8 flex flex-col items-center gap-10 p-2 ">
          <h2 className="text-2xl font-semibold mb-2 text-[#797F54]">Unread Messages</h2>
          {unreadMessages.length === 0 ? (
            <p>No unread messages.</p>
          ) : (
            unreadMessages.map(message => (
              <div key={message?._id}>
                <div className="p-4 mb-4 border-[1px] border-gray-400  rounded-xl flex flex-col gap-3 h-auto">
                  <div className="font-sans font-semibold text-xl text-[#797F54]">{message.userName} <span className="text-black">({message.userEmail})</span></div>
                  <div className="text-xl italic font-semibold"><span className="text-[#797F54]">User Phone Number:</span> {message.userPhoneNumber}</div>
                  <div className="text-[#797F54] text-xl font-bold  md:w-[500px] lg:w-[500px] xl:w-[500px]">Message: <span className="font-semibold text-lg text-black ">{message.userMessage}</span></div>
                  <button onClick={() => updateStatus(message?._id, 'read')} className='p-3 md:p-4 lg:p-4 xl:p-4 text-[13px] tracking-wider md:text-[14px] lg::text-[14px] xl:text-[14px] font-bold   border-0 text-white bg-black hover:bg-[#797F54] rounded-[30px] duration-300'>Mark As Read</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'read' && (
        <div className="mb-8 flex flex-col items-center gap-10 p-2 ">
          <h2 className="text-2xl font-semibold mb-2 text-[#797F54]">Read Messages</h2>
          {readMessages.length === 0 ? (
            <p>No read messages.</p>
          ) : (
            readMessages.map(message => (
              <div key={message._id}>
               <div className="p-4 mb-4 border-[1px] border-gray-400  rounded-xl flex flex-col gap-3 h-auto">
                  <div className="font-sans font-semibold text-xl text-[#797F54]">{message.userName} <span className="text-black">({message.userEmail})</span></div>
                  <div className="text-xl italic font-semibold"><span className="text-[#797F54]">User Phone Number:</span> {message.userPhoneNumber}</div>
                  <div className="text-[#797F54] text-xl font-bold md:w-[500px] lg:-w[500px] xl:w-[500px]">Message: <span className="font-semibold text-lg text-black ">{message.userMessage}</span></div>
                  <button onClick={() => handleDelete(message?._id)} className='p-3 md:p-4 lg:p-4 xl:p-4 text-[13px] tracking-wider md:text-[14px] lg::text-[14px] xl:text-[14px] font-bold   border-0 text-white bg-black hover:bg-[#797F54] rounded-[30px] duration-300'>Delete Message</button>
                  
                  
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UserContacts;
