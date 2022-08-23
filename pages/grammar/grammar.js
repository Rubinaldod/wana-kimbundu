import { useState,useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Grammar(){
    const router = useRouter();

    return(
        <div className="mt-4 p-10">
            <h2 className="font-semibold text-xl border-b p-2 mb-4 ">Tópicos</h2>
            <ul>
                <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1" onClick={() => router.push('/alfabeth/alfabeth')}>
                    <span>Alfabeto e pronúncia</span>
                </li>
                <li className="font-semibold text-xl font-sans mb-1">
                    Números
                        <ul className='p-3'>
                            <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1" onClick={() => router.push('/numbers/cardinals')}>
                                    <span>Cardinais</span>
                            </li>
                            <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1"onClick={() => router.push('/numbers/ordinals')}>
                                <span>Ordinais</span>
                            </li>
                        </ul>
                </li >
                    <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1" onClick={() => router.push('/animals/animals')}><span>Animais</span></li>
                    <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1"><span>Familiares</span></li>
                    <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1"><span>Saudações</span></li>
                    <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1"><span>Perguntas</span></li>
                    <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1" onClick ={() => router.push('/plural/plural')}><span>O plural em kimbundu</span></li>
            </ul>
        </div>
    )
}