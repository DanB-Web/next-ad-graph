"use client";
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const session = useSession();

  const isLoggedIn = session.status === "authenticated";

  const logoutHandler = () => {
    signOut({ callbackUrl: "/" });
  };

  // First arg is provider if using multiples
  const loginHandler = () => {
    signIn(undefined, { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex justify-between">
      <div>
        {isLoggedIn ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={logoutHandler}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={loginHandler}
          >
            Sign In
          </button>
        )}
      </div>
      {isLoggedIn ? (
        <p className="text-3xl text-green-500">Logged in</p>
      ) : (
        <p className="text-3xl text-red-500">Logged out</p>
      )}
      <div className="flex justify-between gap-4">
        <Link
          href={"/"}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Home (Public route)
        </Link>
        <Link
          href={"/dashboard"}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Dashboard (Protected route)
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
