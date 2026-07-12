import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();


  const getUsers = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://backend-2-1s5i.onrender.com/api/admin/users",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setUsers(response.data);

    } catch (error) {
      console.log(error);
    }

  };



  const deleteUser = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await axios.delete(
        `https://backend-2-1s5i.onrender.com/api/admin/user/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      getUsers();

    } catch (error) {
      console.log(error);
    }

  };



  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };



  useEffect(() => {

    getUsers();

  }, []);



  return (

    <div className="min-h-screen bg-gray-100 flex">


      {/* Sidebar */}

      <aside className="w-64 bg-gray-900 text-white min-h-screen p-5 hidden md:block">

        <h2 className="text-2xl font-bold mb-8">
          Admin Panel
        </h2>


        <ul className="space-y-4">


          <li className="bg-purple-600 p-3 rounded-lg">
            Dashboard
          </li>



        </ul>


      </aside>




      {/* Main */}

      <div className="flex-1 p-6">


        {/* Header */}

        <div className="flex justify-between items-center mb-8">


          <div>

            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h1>

          

          </div>



          <button

            onClick={logout}

            className="bg-red-500 hover:bg-red-600 
            text-white px-5 py-2 rounded-lg 
            transition"

          >
            Logout
          </button>


        </div>





        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">


          <div className="bg-white p-6 rounded-xl shadow">

            <p className="text-gray-500">
              Total Users
            </p>

            <h2 className="text-4xl font-bold text-purple-600">
              {users.length}
            </h2>

          </div>



          <div className="bg-white p-6 rounded-xl shadow">

            <p className="text-gray-500">
              Admin
            </p>

            <h2 className="text-4xl font-bold text-green-600">
              {
                users.filter(
                  user => user.role?.toLowerCase() === "admin"
                ).length
              }
            </h2>

          </div>



          <div className="bg-white p-6 rounded-xl shadow">

            <p className="text-gray-500">
              Normal Users
            </p>

            <h2 className="text-4xl font-bold text-blue-600">
              {
                users.filter(
                  user => user.role?.toLowerCase() === "user"
                ).length
              }
            </h2>

          </div>


        </div>





        {/* Users Table */}

        <div className="bg-white rounded-xl shadow overflow-hidden">


          <div className="p-5 border-b">

            <h2 className="text-xl font-bold">
              Users List
            </h2>

          </div>



          <div className="overflow-x-auto">


          <table className="w-full">


            <thead className="bg-gray-200">


              <tr>


                <th className="p-4 text-left">
                  Name
                </th>


                <th className="p-4 text-left">
                  Email
                </th>


                <th className="p-4 text-left">
                  Role
                </th>


                <th className="p-4 text-center">
                  Action
                </th>


              </tr>


            </thead>



            <tbody>


              {
                users.map((user)=>(


                  <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50"
                  >


                    <td className="p-4 font-medium">
                      {user.name}
                    </td>


                    <td className="p-4 text-gray-600">
                      {user.email}
                    </td>


                    <td className="p-4">


                      <span

                      className={
                        user.role?.toLowerCase() === "admin"
                        ?
                        "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                        :
                        "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      }

                      >

                        {user.role}

                      </span>


                    </td>



                    <td className="p-4 text-center">


                      <button

                      onClick={() =>
                        deleteUser(user._id)
                      }

                      className="bg-red-500 hover:bg-red-600
                      text-white px-4 py-2 rounded-lg
                      transition"

                      >

                        Delete

                      </button>


                    </td>


                  </tr>


                ))
              }



            </tbody>


          </table>


          </div>


        </div>


      </div>


    </div>

  );

}


export default Dashboard;