import React from "react";

export default function UsersCard({ user }) {
  return (
    <div className="grid grid-cols-8 gap-3 mt-3 items-center">
      <img
        className="box w-[40px] h-[40px] rounded-full mr-10 col-start-1 ml-5"
        src={user.avatar ? `http://localhost:5000/avatar/${user.avatar}` : null}
        alt="avatar"
      />
      <p className="text-sm box col-start-2 col-end-4">
        {user.firstname} {user.lastname}
      </p>
      <p className="text-sm col-start-4 col-end-6">{user.email}</p>
      {user.is_admin === 1 ? (
        <p className=" col-start-7 col-end-9"> Administrateur </p>
      ) : (
        <p className=" col-start-7 col-end-9"> Utilisateur </p>
      )}
      <hr className="col-start-1 col-end-9 gap-3" />
    </div>
  );
}
