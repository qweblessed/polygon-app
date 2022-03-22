import {useEffect, useState} from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
    nftaddress,nftmarketaddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import NFTMarket from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import axios from "axios";

export default function MyAsset(){

    const [nfts,setNfts] = useState([])
    const [loadingState,setLoadingState] = useState('not-loaded')

    useEffect(()=>{
        loadNfts()
    },[])

    async function loadNfts() {
        const provider = new ethers.providers.JsonRpcProvider()
        const tokenContract = new ethers.Contract(nftaddress,NFT.abi,provider)
        const marketContract = new ethers.Contract(nftmarketaddress,NFTMarket.abi,provider)
        const data = await marketContract.fetchMarketItems()
        console.log(data)
        let items = await Promise.all(data.map(async i=> {
            console.log(i.tokenId)
            const tokenUri = await tokenContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenUri)
            console.log(meta.data)
            let price = ethers.utils.formatUnits(i.price.toString(),'ether')

            let item = {
                price,
                tokenId:i.tokenId.toNumber(),
                seller:i.seller,
                owner:i.owner,
                image:meta.data.image,
                name:meta.data.name,
                description:meta.data.description,
            }
            console.log(item.description)
            return item
        }))
        setNfts(items)
        console.log(nfts)
        setLoadingState('loaded')
    }
    if (loadingState == 'loaded' && !nfts.length) return(
        <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
    return(
        <div className="flex justify-center">
            <div className="px-4" style={{ maxWidth: '1600px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                    {
                        nfts.map((nft, i) => (
                            <div key={i} className="border shadow rounded-xl overflow-hidden">
                                <img src={nft.image} />
                                <div className="p-4">
                                    <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                                    <div style={{ height: '70px', overflow: 'hidden' }}>
                                        <p className="text-gray-400">{nft.description}</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-black">
                                    <p className="text-2xl font-bold text-white">{nft.price} ETH</p>
                                    <button className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
