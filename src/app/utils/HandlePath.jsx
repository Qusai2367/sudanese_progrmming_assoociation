"use client";

import { useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { usePathname } from "next/navigation";

export const HandlePath = ({ btn }) => {
  const { requireAuth, user } = useAuth();
  const pathname = usePathname();

 
  useEffect(() => {
    if (user) {
      requireAuth(pathname);
    }
  }, [user, pathname, requireAuth]);

  return (
    <div
      onClick={() => requireAuth(pathname)}
      style={{ cursor: "pointer" }}
    >
      {btn}
    </div>
  );
};
