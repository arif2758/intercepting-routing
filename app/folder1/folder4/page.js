import Link from "next/link";
import React from "react";

export default function Folder4() {
  return (
    <div className="p-20 fle-col gap-10">
      <h1 className="text-2xl"> Folder 4</h1>
      <Link href="/folder1/folder3" className="text-blue-400">
        Folder 3
      </Link>
      <div>
        <Link href="/folder1" className="text-blue-400">
          Folder 1
        </Link>
      </div>
    </div>
  );
}
