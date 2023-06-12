import * as React from 'react'
import Card from './worksCard'
import { Logo } from './svg'
const Works = () =>{

    //fake datas 
    const [Works, setWorks] = React.useState([
        {
            Logo : <p className="text-white text-xl font-bold">SarsHub : Covid-19 Tracker</p>, 
            Img : `url('https://firebasestorage.googleapis.com/v0/b/tradi-de5be.appspot.com/o/bang%2Fsarshub.png?alt=media&token=de6879f2-dfba-4d81-98bd-0a0bb9f9ecac&_gl=1*sxfmkb*_ga*NDQ4NDExOTM5LjE2NzY1ODEzMzk.*_ga_CW55HF8NVT*MTY4NjU0MzQyMS41LjEuMTY4NjU0MzUwNi4wLjAuMA..`,
            Link  :"https://github.com/onlymachiavelli/SarsHub-Covid-tracker-website" , 
            pageURL:"https://sarshub.vercel.app/", 
            Title : "SarsHub"
        },
        {
            Logo : <p className="text-white text-xl font-bold">LandHippo FST Hackathon</p>, 
            Img : `url('https://firebasestorage.googleapis.com/v0/b/tradi-de5be.appspot.com/o/bang%2Flandhippo.png?alt=media&token=730f7786-164e-4ba7-807f-9e36b9e6e3a8&_gl=1*1yaux2v*_ga*NDQ4NDExOTM5LjE2NzY1ODEzMzk.*_ga_CW55HF8NVT*MTY4NjU0MzQyMS41LjEuMTY4NjU0MzQ5OS4wLjAuMA..')`,
            Link  :"https://github.com/onlymachiavelli/hackathon_FST_front" , 
            pageURL:"https://github.com/onlymachiavelli/hackathon_FST_front", 
            Title : "LandHippo"
        },
        {
            Logo : <p className="text-white text-xl font-bold">Solution Bureatique Informatique</p> , 
            Img : `url('https://firebasestorage.googleapis.com/v0/b/tradi-de5be.appspot.com/o/bang%2Fsbinfo.png?alt=media&token=130c74d2-4c49-43e0-ae6d-07c8a516d2b4&_gl=1*1g04qvx*_ga*NDQ4NDExOTM5LjE2NzY1ODEzMzk.*_ga_CW55HF8NVT*MTY4NjU0MzQyMS41LjEuMTY4NjU0MzQ4NS4wLjAuMA..')`,
            Link  :"https://github.com/onlymachiavelli/sbinformatiques" , 
            pageURL:"https://sbinformatiques.vercel.app/", 
            Title : "SBI"
        },
        {
            Logo :
            <p className="text-white text-xl font-bold">World Currency Converter</p>
            , 
            Img : `url('https://firebasestorage.googleapis.com/v0/b/tradi-de5be.appspot.com/o/bang%2FworldCurrency.png?alt=media&token=1274ea8d-6f7a-4956-a949-e17abfccc4ba&_gl=1*pp5zl9*_ga*NDQ4NDExOTM5LjE2NzY1ODEzMzk.*_ga_CW55HF8NVT*MTY4NjU0MzQyMS41LjEuMTY4NjU0MzUxMC4wLjAuMA..')`,
            Link  :"https://github.com/onlymachiavelli/world-currency-web-app" , 
            pageURL:"https://github.com/onlymachiavelli/world-currency-web-app", 
            Title : "World Currency Converter"
        },
        {
            Logo : 
            <p className="text-white text-xl font-bold">PostLike : API Manager</p>
            , 
            Img : `url('https://firebasestorage.googleapis.com/v0/b/tradi-de5be.appspot.com/o/bang%2Fpostlike%5D.png?alt=media&token=ae8495dd-7bd9-4fd7-a1c2-84a6e68c8fb0&_gl=1*1d5o7uo*_ga*NDQ4NDExOTM5LjE2NzY1ODEzMzk.*_ga_CW55HF8NVT*MTY4NjU0MzQyMS41LjEuMTY4NjU0MzUwMy4wLjAuMA..')`,
            Link  :"https://github.com/onlymachiavelli/PostLike" , 
            pageURL:"https://postlike.vercel.app/", 
            Title : "PostLike"
        },
        {
            Logo :
            <p className="text-white text-xl font-bold">Instalink LTD</p>, 
            Img : `url('https://firebasestorage.googleapis.com/v0/b/tradi-de5be.appspot.com/o/bang%2Filink.png?alt=media&token=13c9a41b-87ac-42dc-8710-711c4cbde04d&_gl=1*1oxu5tc*_ga*NDQ4NDExOTM5LjE2NzY1ODEzMzk.*_ga_CW55HF8NVT*MTY4NjU0MzQyMS41LjEuMTY4NjU0MzQ5Mi4wLjAuMA..')`,
            Link  :"https://github.com/onlymachiavelli/instalink-react" , 
            pageURL:"https://instalink-fp793bonj-onlymachiavelli.vercel.app/", 
            Title : "InstaLink LTD"
        },
        ,
        {
            Logo :
            <p className="text-white text-xl font-bold">Inboxify Messages Manager</p>, 
            Img : `url('https://firebasestorage.googleapis.com/v0/b/tradi-de5be.appspot.com/o/bang%2Finboxify.png?alt=media&token=9816370e-6088-4e9f-8542-18257e2a0f92&_gl=1*1bsjbwg*_ga*NDQ4NDExOTM5LjE2NzY1ODEzMzk.*_ga_CW55HF8NVT*MTY4NjU0MzQyMS41LjEuMTY4NjU0MzQ5Ni4wLjAuMA..')`,
            Link  :"" , 
            pageURL:"", 
            Title : "Hello World"
        },
        ,
        {
            Logo :
            <p className="text-white text-xl font-bold">Snative SVG Syntax Fixer</p>, 
            Img : `url('https://firebasestorage.googleapis.com/v0/b/tradi-de5be.appspot.com/o/bang%2Fsn.png?alt=media&token=74a8a1d4-9db9-4c53-83a6-6f4ebc427b71&_gl=1*764rd0*_ga*NDQ4NDExOTM5LjE2NzY1ODEzMzk.*_ga_CW55HF8NVT*MTY4NjU0MzQyMS41LjEuMTY4NjU0NDMwMC4wLjAuMA..')`,
            Link  :"https://github.com/onlymachiavelli/svg2Svg" , 
            pageURL:"https://snative.vercel.app/", 
            Title : "Snative"
        },

        
    ])

    //
    return (
        <section className='w-full h-auto pb-10'>
            <p className='text-red font-bold text-xl block m-auto w-full text-center pb-10'>
                --MY WORKS
            </p>

           <div className='tablet:flex tablet:items-center tablet:justify-center gap-4  grid-cols-3 flex-wrap'>
                {
                    Works.map((data, index) =>{
                        return (
                            <Card 
                                Logo={data.Logo}
                                Img={data.Img}
                                Link={data.Link}
                                pageURL={data.pageURL}
                                Title={data.Title}
                                
                            key={index} />
                        )
                    })
                }
           </div>
        </section>
    )
}

export default Works