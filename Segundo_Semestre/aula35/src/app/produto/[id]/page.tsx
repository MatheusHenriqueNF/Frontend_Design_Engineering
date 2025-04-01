'use client';
import { useParams } from "next/navigation";

export default function Produto() {
  const param = useParams();
    return {
        <>
         <h1>Produto {param.id}</h1>
        </>
    };
}