import Link from "next/link";
import React from "react";

export default function Folder1Page() {
  return (
    <div className="p-20 fle-col gap-10">
      <h1 className="text-2xl"> Folder 1</h1>
      <Link href = "/folder1/folder2" className="text-blue-400">Folder 2</Link>
    </div>
  );
}
