import React from 'react'
import { BsClockFill } from 'react-icons/bs'
import { BiShare } from 'react-icons/bi'
import { GradientHeader } from '../../Components'
import imge from '../../assets/extra/blog.png'

const NewsFeedPage = () => {
    const sampleContents = [
        {
            id: 1,
            image: imge,
            title: 'Qui excepturi illo et officia laboriosam.',
            content: `Lorem ipsum dolor sit amet. Non animi facilis hic molestias molestiaeSit autem. Aut voluptatem similiqueEst maxime sed distinctio doloremque. Et eligendi molestias Qui repudiandae qui nobis consectetur ab fugiat unde est excepturi voluptatem eos dolores iste et quasi officiis. Sit illum omnisVel magnam quo veniam voluptatem At voluptates impedit id ratione nihil non quia enim. Est enim porro Qui vero et distinctio deserunt ut natus deleniti aut nulla deleniti in laudantium praesentium. In veritatis perferendisAut possimus est commodi ullam est delectus voluptatem ut earum earum. Sit veniam galisum ex eligendi galisumEst voluptatem sit error laborum in perferendis sunt 33 molestiae odio. Vel sint dolorumEa quos et voluptatem minus et consequatur voluptatem est doloremque quia et velit iure qui architecto exercitationem. Ad voluptas quis est galisum quibusdamEst doloribus. Sed velit sint In voluptatibus in nobis possimus est excepturi similique et alias explicabo! Sed quod aspernatur ea eius impeditSed voluptate est sapiente iure et saepe itaque!`,
            date: 'Monday, May 17, 2021'
        },
        {
            id: 2,
            image: imge,
            title: 'Qui excepturi illo et officia laboriosam.',
            content: `Lorem ipsum dolor sit amet. Non animi facilis hic molestias molestiaeSit autem. Aut voluptatem similiqueEst maxime sed distinctio doloremque. Et eligendi molestias Qui repudiandae qui nobis consectetur ab fugiat unde est excepturi voluptatem eos dolores iste et quasi officiis. Sit illum omnisVel magnam quo veniam voluptatem At voluptates impedit id ratione nihil non quia enim. Est enim porro Qui vero et distinctio deserunt ut natus deleniti aut nulla deleniti in laudantium praesentium. In veritatis perferendisAut possimus est commodi ullam est delectus voluptatem ut earum earum. Sit veniam galisum ex eligendi galisumEst voluptatem sit error laborum in perferendis sunt 33 molestiae odio. Vel sint dolorumEa quos et voluptatem minus et consequatur voluptatem est doloremque quia et velit iure qui architecto exercitationem. Ad voluptas quis est galisum quibusdamEst doloribus. Sed velit sint In voluptatibus in nobis possimus est excepturi similique et alias explicabo! Sed quod aspernatur ea eius impeditSed voluptate est sapiente iure et saepe itaque!`,
            date: 'Monday, May 17, 2021'
        },
        {
            id: 3,
            image: imge,
            title: 'Qui excepturi illo et officia laboriosam.',
            content: `Lorem ipsum dolor sit amet. Non animi facilis hic molestias molestiaeSit autem. Aut voluptatem similiqueEst maxime sed distinctio doloremque. Et eligendi molestias Qui repudiandae qui nobis consectetur ab fugiat unde est excepturi voluptatem eos dolores iste et quasi officiis. Sit illum omnisVel magnam quo veniam voluptatem At voluptates impedit id ratione nihil non quia enim. Est enim porro Qui vero et distinctio deserunt ut natus deleniti aut nulla deleniti in laudantium praesentium. In veritatis perferendisAut possimus est commodi ullam est delectus voluptatem ut earum earum. Sit veniam galisum ex eligendi galisumEst voluptatem sit error laborum in perferendis sunt 33 molestiae odio. Vel sint dolorumEa quos et voluptatem minus et consequatur voluptatem est doloremque quia et velit iure qui architecto exercitationem. Ad voluptas quis est galisum quibusdamEst doloribus. Sed velit sint In voluptatibus in nobis possimus est excepturi similique et alias explicabo! Sed quod aspernatur ea eius impeditSed voluptate est sapiente iure et saepe itaque!`,
            date: 'Monday, May 17, 2021'
        },
    ]

    return (
        <main className='container-fluid pt-5 mt-5 p-0 m-0 overflow-y-auto'>
            <header className='ps-5 ms-5'>
                <GradientHeader title={'Recently Posted'} />
            </header>
            <section className='d-flex flex-column align-items-center container-fluid px-5 gap-4 pb-5'>
            {sampleContents.map((post, indx) => (
                <article key={indx} className='p-4 rounded-3 container container-fluid' style={{backgroundColor: 'var(--primary-color'}}>
                    <div className='text-center'>
                        <img src={post.image} className='col-12 col-lg-5' alt='content_photo'/>
                    </div>
                    <h3 className='text-center py-4'><strong>{post.title}</strong></h3>
                    <span><BsClockFill className='text-light me-2'/>{post.date}</span>
                    <p className='mt-3 py-4 border-top border-bottom border-3 border-light px-3'>{post.content}</p>
                    <div className='d-flex justify-content-end container'>
                        <button className='border-light px-4 btn btn-warning'><BiShare className='flip' />Share</button>
                    </div>
                </article>
            ))}
            </section>
        </main>
    )
}

export default NewsFeedPage