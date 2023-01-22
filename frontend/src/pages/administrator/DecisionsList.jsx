// import React from "react";
// import { useCurrentUserContext } from "../../context/UserContext";
// import Logo from "../../assets/logo-makesense.png";
// import "../../css/administrator/decisionList.css";
// import { BsTrash } from "react-icons/bs";

// export default function DecisionsList() {
//   const { user, token } = useCurrentUserContext();

//   return (
//     <div className="usersListPage w-screen">
//       <div className="usersListHeader flex flex-row items-center justify-between bg-light-grey">
//         <div className="flex flex-col">
//           {user ? (
//             <p className="pl-10 pt-3 text-xl">LISTE DES DECISIONS </p>
//           ) : (
//             <p className="pl-10 pt-3 text-xl">Bonjour</p>
//           )}
//           <p className="pl-10 text-x font-extralight">
//             Nous sommes le : {new Date().toLocaleDateString()}
//           </p>
//         </div>
//         <div className="logo-home">
//           <img src={Logo} alt="logo make-sense" />
//         </div>
//       </div>
//       <div className="usersListBoard grid grid-cols-8 mt-12 text-center bg-gray-200 border-2 border-gray-600 border-solid">
//         <div className="decisionsListBoard1 pt-1">
//           <input type="checkbox" />
//         </div>
//         <div className="decisionsListBoard">Auteur</div>
//         <div className="decisionsListBoard">Concerné</div>
//         <div className="decisionsListBoard">Expert</div>
//         <div className="decisionsListBoard">Titre Décision</div>
//         <div className="decisionsListBoard">Date de création</div>
//         <div className="decisionsListBoard">Date finalisation</div>
//         <div className="decisionsListBoard">Status</div>
//         {/* {users.map((user) => (
//         <div className="grid grid grid-cols-8 text-center mt-2">
//           <button type="button" className="decisionsListBoard1 pt-1 pl-12">
//             <BsTrash />
//           </button>
//           <div>{user.firstname}</div>
//           <div>{user.lastname}</div>
//           <div>{user.email}</div>

//           <div>{user.city}</div>

//           <div>{user.phone}</div>

//           <div>fezg</div>

//           <div>egih</div>
//         </div>
//       ))} */}
//       </div>
//     </div>
//   );
// }
