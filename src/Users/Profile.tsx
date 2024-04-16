import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User } from "./client";
export default function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState({
    _id: "",
    username: "",
    password: "",
    role: "USER",
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account: User = await client.profile();
    setProfile(account);
  };

  const findUserById = async (id: any) => {
    const user = await client.findUserById(id);
    setProfile(user);
  };

  const save = async () => {
    await client.updateUser(profile);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchProfile();
    }
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100">
        Users
      </Link>
      {profile && (
        <div>
          <input
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <input
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <input
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <input
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <select
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save}>Save</button>
          <button onClick={signout}>Signout</button>
        </div>
      )}
    </div>
  );
}
