import * as React from 'react'
import Card from './worksCard'
import { Logo } from './svg'
const Works = () =>{

    //fake datas 
    const [Works, setWorks] = React.useState([
        {
            Logo : <Logo Width="200" />, 
            Img : `url('https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg')`,
            Link  :"" , 
            pageURL:"", 
            Title : "Hello World"
        },
        {
            Logo : <Logo Width="200" />, 
            Img : `url('https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg')`,
            Link  :"" , 
            pageURL:"", 
            Title : "Hello World"
        },
        {
            Logo : <Logo Width="200" />, 
            Img : `url('https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg')`,
            Link  :"" , 
            pageURL:"", 
            Title : "Hello World"
        },
        {
            Logo : <Logo Width="200" />, 
            Img : `url('https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg')`,
            Link  :"" , 
            pageURL:"", 
            Title : "Hello World"
        },
        {
            Logo : <Logo Width="200" />, 
            Img : `url('https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg')`,
            Link  :"" , 
            pageURL:"", 
            Title : "Hello World"
        },
        {
            Logo : <Logo Width="200" />, 
            Img : `url('https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg')`,
            Link  :"" , 
            pageURL:"", 
            Title : "Hello World"
        },
    ])
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