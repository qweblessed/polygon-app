import React from 'react';



export default function HomeCard(){
    return(
        <div className="relative">
            <div className="before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0  before:bg-[url('https://wallpaperaccess.com/full/2641074.gif')] before:bg-fixed before:bg-center before:opacity-50 before:blur">
                <div className="flex relative justify-around flex-wrap items-center mb-5">
                    <div className="w-1/2 justify-center">
                        <div className="relative text-white text-[26px] font-semibold">
                            Discover, collect, and sell extraordinary NFTs
                        </div>
                        <div className="text[#1868b7] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]">
                            NFT Polygon is first  NFT marketplace using Polygon solutions
                        </div>
                        <div className="flex">
                            <a href="#anchor" className="btn-3 text-center pt-5 rounded-[0.7rem]">
                                Explore
                            </a>
                            <a href="create-nft" className="btn-3 pl-5 text-center ml-10 pt-5 rounded-[0.7rem]">
                                Create
                            </a>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="card rounded-[3rem] ">
                            <div className="front">
                                <img
                                    className="rounded-t-lg md:object-contain "
                                    src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
                                    alt=""
                                />
                                <div className="h-20 bg-[#FF1493FF] p-4 rounded-b-lg flex items-center text-white ">
                                    <img
                                        className="h-[2.25rem] rounded-full "
                                        src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                                        alt=""
                                    />
                                    <div className="flex flex-col justify-center ml-4">
                                        <div className="flex flex-row justify-between">
                                            Price
                                            <img src="https://cdn.iconscout.com/icon/free/png-128/matic-2709185-2249231.png" className="w-6 pl-1"/>
                                        </div>
                                        <a
                                            className="text-[#1868b7]"
                                            href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                                        >
                                            150 Matic
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="back ">
                                <div className="flex flex-col justify-center h-96">
                                    <div className=""><p className="text-3xl pt-5 ">NFT #2521</p></div>
                                    <div className="text-3xl pt-10 "><span className="text-[#FF1493FF]">Description:</span><p className="pl-4 pr-4 break-all text-base">
                                        nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra </p>
                                    </div>
                                    <div className="text-2xl pt-4"><span className="text-[#FF1493FF]">Creator:</span> <p className="pl-4 pr-4 break-all text-sm">0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65 </p></div>
                                    <div className="text-xl btn-2 pb-10">
                                        <a href="#" className="btn rounded-[0.7rem] text-center pt-5 ">
                                            BUY ASSET
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}