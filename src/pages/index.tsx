import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home(this: any) {
  const router = useRouter();

    const index = () => {
      router.push('/');
    };
    const signup = () => {
      router.push('/auth/signup');
    };
    const signin = () => {
      router.push('/auth/signin');
    };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* Main Section */}
<section className="bg-gray-900 text-white">

{/* Alert */}
<div id="alert-1" className="fixed inset-x-0 bottom-0 p-4">
  <div className="relative flex items-center justify-between gap-4 rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
    <p className="text-sm font-medium">
      Love VectorCrop? <a href="#" className="inline-block underline"> let's Join With Us!</a>
    </p>
    <button aria-label="Close" data-dismiss-target="#alert-1"
       className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>
{/* /Alert */}


  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> 
        Meet your future
        <span className="sm:block"> Goals with VectorCrop.</span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
      We will deliver you marketing and technology solutions in the best way.</p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/auth/signin">Sign in </a>

        <a className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/auth/signup">Sign Up</a>
      </div>
    </div>
  </div>


  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
  <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-80 dark:bg-gray-800">
    <div className="flex items-center justify-between w-full mb-6">
        <p className="text-xl font-medium text-gray-800 dark:text-white">
            Calendar
        </p>
        <button className="flex items-center text-gray-800 border-0 hover:text-black dark:text-gray-50 dark:hover:text-white focus:outline-none">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                </path>
            </svg>
        </button>
    </div>
    <div className="flex items-center justify-between p-3 mb-2 bg-green-100 rounded">
        <span className="p-2 bg-white rounded-lg">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z">
                </path>
            </svg>
        </span>
        <div className="flex items-center justify-between w-full ml-2">
            <p>
                Grooming with Alicia
            </p>
            <p>
                22.07
            </p>
        </div>
    </div>
    <div className="flex items-center justify-between p-3 mb-2 bg-purple-100 rounded">
        <span className="p-2 bg-white rounded-lg">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z">
                </path>
            </svg>
        </span>
        <div className="flex items-center justify-between w-full ml-2">
            <p>
                Launch of Itachi
            </p>
            <p>
                22.07
            </p>
        </div>
    </div>
    <div className="flex items-center justify-between p-3 mb-2 bg-yellow-100 rounded">
        <span className="p-2 bg-white rounded-lg">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M960 256q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm832 928v352q0 22-20 30-8 2-12 2-12 0-23-9l-93-93q-119 143-318.5 226.5t-429.5 83.5-429.5-83.5-318.5-226.5l-93 93q-9 9-23 9-4 0-12-2-20-8-20-30v-352q0-14 9-23t23-9h352q22 0 30 20 8 19-7 35l-100 100q67 91 189.5 153.5t271.5 82.5v-647h-192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h192v-163q-58-34-93-92.5t-35-128.5q0-106 75-181t181-75 181 75 75 181q0 70-35 128.5t-93 92.5v163h192q26 0 45 19t19 45v128q0 26-19 45t-45 19h-192v647q149-20 271.5-82.5t189.5-153.5l-100-100q-15-16-7-35 8-20 30-20h352q14 0 23 9t9 23z">
                </path>
            </svg>
        </span>
        <div className="flex items-center justify-between w-full ml-2">
            <p>
                Helfest tickets
            </p>
            <p>
                22.07
            </p>
        </div>
    </div>
</div>




<div className="flex flex-col justify-start max-w-xl gap-4 p-4 bg-white shadow-xl rounded-xl dark:bg-gray-800 md:flex-row">
    <div className="relative">
        <img src="/images/landscape/1.jpg" className="w-full rounded-xl md:w-auto md:max-h-40"/>
        <span className="absolute px-2 py-1 text-xs text-white rounded bg-gray-700/50 right-2 bottom-2">
            7 min
        </span>
    </div>
    <div className="flex flex-col justify-between">
        <div className="flex items-start justify-between my-2 text-gray-700 dark:text-white md:m-0">
            <p className="text-xl leading-5">
                How to travel arround the world without any money
            </p>
            <button className="text-red-400 hover:text-red-600">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z">
                    </path>
                </svg>
            </button>
        </div>
        <div className="flex items-center my-2 text-xs text-gray-500 dark:text-gray-400 md:m-0">
            <svg width="10" height="10" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z">
                </path>
            </svg>
            123,344,893 views
            <svg width="10" height="10" fill="currentColor" className="ml-6 mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z">
                </path>
            </svg>
            45 876 likes
        </div>
        <div className="flex items-start my-2 md:m-0">
            <div className="relative">
                <a href="#" className="relative block">
                    <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
                <svg width="10" height="10" fill="currentColor" className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z">
                    </path>
                </svg>
            </div>
            <div className="flex flex-col items-start justify-center ml-2">
                <span className="flex items-center text-sm text-gray-600 dark:text-gray-200">
                    Charlie Rabiller
                    <span className="block w-2 h-2 ml-1 bg-green-500 rounded-full">
                    </span>
                </span>
                <span className="text-xs text-gray-400">
                    1 week ago
                </span>
            </div>
        </div>
    </div>
</div>






</div>

</section>


<script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"></script>
    </>
  )
}
