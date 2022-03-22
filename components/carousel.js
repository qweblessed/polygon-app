import React from "react";
import { CarouselProvider, Slider, Slide,} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";



export default function Index(props) {
    console.log(props.nfts.length)
    return (
    <CarouselProvider
        naturalSlideWidth={20}
        naturalSlideHeight={8}
        totalSlides={1}

    >
        <Slider className=" h-96">
            <div id="slider" className="h-full flex ease-out md:w-full lg-3/4 2xl:w-2/3 lg:p-1 xl:p-5 ">
        {
            props.nfts.map((nft,i) => {
                return (
                        <Slide index={i}  key={i} className="">
                            <div className="wrap pl-5 mt-auto " key={i}  >
                                <div className="card-2 rounded-[3rem] pl-2">
                                    <div className="front-2">
                                        <img
                                            className="rounded-t-lg object-cover h-60 w-48 "
                                            src={nft.image}
                                            alt=""
                                        />
                                        <div className="h-20 bg-[#FF1493FF] p-4 rounded-b-lg flex items-center w-48 text-white ">
                                            <img
                                                className="h-[2.25rem] rounded-full "
                                                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                                                alt=""
                                            />
                                            <div className="flex flex-col  ml-4">
                                                <div className="flex flex-row justify-between">
                                                    Price
                                                   <img src="https://cdn.iconscout.com/icon/free/png-128/matic-2709185-2249231.png" className="w-6  "/>
                                                </div>
                                                <a
                                                    className="text-[#1868b7] flex flex-row"
                                                    href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                                                >
                                                    {nft.price} Matic
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="back-2 text-white w-48 h-80">
                                        <div className="flex flex-col justify-center ">
                                            <div><p className="text-normal pt-2">NFT {nft.name}</p></div>
                                            <div className="text-base h-32"><span className="text-[#FF1493FF]">Description:</span><p className="pl-4 pr-4 break-all text-xs">
                                                {nft.description}</p>
                                            </div>
                                            <div className="text-base pt-4"><span className="text-[#FF1493FF]">Creator:</span> <p className="pl-4 pr-4 break-all text-xs pb-5">{nft.seller}</p></div>
                                            <div className="btn-2 pb-10">
                                                <a href="#" className="btn-4 rounded-[0.7rem] text-center pt-5 " onClick={()=>props.buyNft(nft)}>
                                                    BUY ASSET
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                   )
            })
        }
            </div>
        </Slider>


    </CarouselProvider>
    );
}
