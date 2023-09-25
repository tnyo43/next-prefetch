import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

export default function AppDynamic() {
  return (
    <div>
      <Link href="/">root</Link>
      <ul>
        <li>
          <Link href="/static">/static</Link>
        </li>
        <li>
          <Link href="/static/prefetch_false" prefetch={false}>
            /static (no prefetch)
          </Link>
        </li>
        <li>
          <Link href="/dynamic">/dynamic</Link>
        </li>
        <li>
          <Link href="/dynamic/prefetch_false" prefetch={false}>
            /dynamic (no prefetch)
          </Link>
        </li>
        <li>
          <Link href="https://nextjs.org/">external link</Link>
        </li>
        <li>
          <Link href="https://nextjs.org/docs" prefetch={false}>
            external link (no prefetch)
          </Link>
        </li>
      </ul>
    </div>
  );
}
