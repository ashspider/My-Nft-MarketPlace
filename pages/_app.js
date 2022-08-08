/* pages/_app.js */
import '../styles/globals.css'

import Link from 'next/link'
import { useState } from 'react';


  
function MyApp({ Component, pageProps }) {
  const[accounts, setAccounts] = useState([])
  const isConnected = Boolean(accounts[0]);
 
  async function connectAccount() {
     if(window.ethereum) {
         const accounts = await window.ethereum.request({
             method: "eth_requestAccounts" ,
         })

         setAccounts(accounts);
     }
 }


  return (

   
    <div class="w3-panel w3-blueviolet">
     
  

   

      
 

      <div className="Appe">{isConnected ? (
        <button className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'>Connected</button>
      ): (
        <button className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg' onClick={connectAccount}> Connect To Metamask </button>
      )}
      </div>



     
         <div className='nav-links'>
          <Link href="/">
            <a className="nav-button">
             
              Buy Now <br></br>
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="nav-button">
             MINT <br></br>
            </a>
          </Link>
          </div>
         
   
      <Component {...pageProps} />
    </div>
 

  )
      }
export default MyApp