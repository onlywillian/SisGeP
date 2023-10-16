"use client"

import Link from "next/link";

function handleLogOutButtonClick() {
    var Cookies = document.cookie.split(";");

    for (var i = 0; i < Cookies.length; i++) {
      document.cookie = Cookies[i] + "=;expires=" + new Date().toUTCString();
    }
}

export default function LogOutButton() {
  return (
    <Link href="/account/login" className="mb-4" onClick={handleLogOutButtonClick}>
      <h1>Log Out</h1>
    </Link>
  );
}
