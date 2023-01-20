import React from "react";

export default function UsersCard({ user }) {
  return (
    <div className="grid md:grid-cols-8 md:gap-3 md:mt-3 items-center grid-cols-3 text-center">
      <img
        className="box w-[40px] h-[40px] rounded-full mr-10 col-start-1 ml-5"
        src={user.avatar ? `http://localhost:5000/avatar/${user.avatar}` : null}
        alt="avatar"
      />
      <p className="text-sm box md:col-start-2 md:col-end-4 ">
        {user.firstname} {user.lastname}
      </p>
      <p className="text-sm col-start-4 col-end-6 hidden md:block ">
        {user.email}
      </p>
      {user.is_admin === 1 ? (
        <p className=" md:col-start-7 md:col-end-9"> Administrateur </p>
      ) : (
        <p className=" md:col-start-7 md:col-end-9"> Utilisateur </p>
      )}
      <hr className="col-start-1 md:col-end-9 gap-3 col-end-4" />
    </div>
  );
}
